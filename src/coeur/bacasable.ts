import { Routeur, Lien, Redirection} from './routage'
import { Kernel } from './kernel'

export class NavigateurBacASable implements INavigateur
{
    bacasable:BacASable;
    internet:InternetBacASable;
    applicationClient:ApplicationClient;

    _location:string;
    page:any;

    setBacASable(bacasable:BacASable)
    {
        this.bacasable = bacasable;
    }

    setInternet(internet:InternetBacASable)
    {
        this.internet = internet;
    }

    charger(applicationClient:ApplicationClient)
    {
        this.applicationClient = applicationClient;
        this.applicationClient.onload(this);
    }

    changerPage(page:any):any
    {
        this.bacasable.logPage(page);
        this.page = page;
        return page;
    }

    suivreLien<T>(lien: Lien<T>) : T
    {
        this.bacasable.logSuivre(lien.url);

        this._location = lien.url;
        var page = new lien.create();
        return this.changerPage(page);
    }

    suivre<T>(redirection: Redirection<T>) : T
    {
        this.bacasable.logSuivre(redirection.url);

        var page = new redirection.create();
        return this.changerPage(page);
    }

    /*
    executer<T>(f : () => Lien<T>) : T
    {
        var lien = f();
        var page = new lien.create();
        return page;
    }*/

    changerAdresse(_url:string)
    {
        this._location = _url; 
    }

    location() { return this._location; }
    setlocation(location:string) {this._location = location}

    appelerWebService(url:string, parameters:any, succes:(reponse:any)=>void) : void
    {
        return this.internet.envoyer(url, parameters, succes);
    }

    appelerWebServiceAsync(url:string, parameters:any) : Promise<any>
    {
        return this.internet.envoyerAsync(url, parameters);
    }
}


class ServeurBacASable
{
    bacasable:BacASable;
    internet:InternetBacASable;
    applicationServeur:ApplicationServeur;

    setBacASable(bacasable:BacASable)
    {
        this.bacasable = bacasable;
    }

    setInternet(internet:InternetBacASable)
    {
        this.internet = internet;
    }

    charger(applicationServeur:ApplicationServeur):void
    {
        this.applicationServeur = applicationServeur;
    }

    recevoir(url:string, parameters:any):any
    {
        return this.applicationServeur.recevoir(url, parameters);
    }

    recevoirAsync(url:string, parameters:any):Promise<any>
    {
        return this.applicationServeur.recevoir(url, parameters);
    }
}

export class ApplicationServeur
{
    routeurServeur:Routeur;
    injectionServeur:Implementations;

    init(routeurServeur:Routeur, injectionServeur:Implementations)
    {
        this.routeurServeur = routeurServeur;
        this.injectionServeur = injectionServeur;
    }

    recevoir(url:string, parameters:any):any
    {
        // identifier le webservice en fonction de l'url
        var typeService = this.routeurServeur.trouverType(url);
        var instanceConcrete = this.injectionServeur.instancier(typeService);
        return instanceConcrete.executer(parameters);
    }
}

export class Implementations
{
    items:ItemImplementations[] = [];

    ajouterImplementation<U, T extends U>(u : {new():U}, t : {new():T})
    {
        this.items.push({
            typeBase : u,
            typeConcret: t
        });
    }

    instancier(typeBase:any) : any
    {
        var found = this.items.find((i) => i.typeBase == typeBase);
        return new found.typeConcret();
    }

    instancier2<U>(u : {new():U}) : U
    {
        var found = this.items.find((i) => i.typeBase == u);
        return <U> (new found.typeConcret());
    }
}

export class ItemImplementations
{
    typeBase : { new() : any };
    typeConcret : {new() : any};
}

class InternetBacASable
{
    serveur:ServeurBacASable;
    bacasable:BacASable;

    setBacASable(bacasable:BacASable)
    {
        this.bacasable = bacasable;
    }
    setServeur(serveur:ServeurBacASable)
    {
        this.serveur = serveur;
    }

    envoyer(url:string, parameters:any, succes:(reponse:any)=>void) : any
    {
        var reponse = this.serveur.recevoir(url, parameters);
        if (succes != null)
            succes(reponse);
    }

    async envoyerAsync(url:string, parameters:any) : Promise<any>
    {
        this.bacasable.logAppel(url, parameters);
        var reponse = await this.serveur.recevoirAsync(url, parameters);
        this.bacasable.logReponse(reponse, url, parameters);
        return reponse;
    }
}

export class BacASable
{
    applicationServeur:ApplicationServeur;
    applicationClient:ApplicationClient;
    navigateur:NavigateurBacASable;
    internet:InternetBacASable;

    creer(
        applicationClient:ApplicationClient,
        applicationServeur:ApplicationServeur)
    {
        this.applicationClient = applicationClient;
        this.applicationServeur = applicationServeur;
        
        this.internet = new InternetBacASable();
        this.internet.setBacASable(this);
        
        this.navigateur = new NavigateurBacASable();
        this.navigateur.setBacASable(this);
        this.navigateur.setInternet(this.internet);

        var serveur = new ServeurBacASable();
        serveur.setBacASable(this);
        serveur.setInternet(this.internet);
        serveur.charger(this.applicationServeur);
        this.internet.setServeur(serveur);

        this.navigateur.charger(this.applicationClient);
        
        Kernel.navigateur = this.navigateur;
        Kernel.applicationClient = this.applicationClient;
/*
        // code à rajouter dans le navigateur
        var appClient = new ApplicationClient(
                new MonRouteurClient(),
                new MonRouteurServeur());
        appClient.onload(navigateur); 

        // code à rajouter dans Node
        var appServeur = new ApplicationServeur(
            new MonRouteurServeur()
        );
        appClient.setServeur(serveur);  
*/
    }

    logSuivre : (url:string)=>void = (url)=>{};
    logPage : (page:any)=>void = (page)=>{};
    logAppel : (url:any, parameters:any)=>void = (url:any, parameters:any)=>{};
    logReponse : (reponse:any, url:any, parameters:any)=>void = (reponse:any, url:any, parameters:any)=>{};
}


export interface IWebService<T, U>
{
    executer(t:T):U;
}

export class WebService<T, U> implements IWebService<T, U>
{
    executer(t:T):U{
        throw '_';
    }
}



export interface INavigateur
{
    location():string;
    setlocation(_url:string);
    appelerWebService(url:string, parameters:any, succes:(reponse:any)=>void) : void;
    appelerWebServiceAsync(url:string, parameters:any) : Promise<any>;
}


export class ApplicationClient
{
    routeurClient:Routeur;
    routeurServeur:Routeur;
    navigateur:INavigateur;
    page:any;
    
    init(routeurClient:Routeur, routeurServeur:Routeur)
    {
        this.routeurClient = routeurClient;
        this.routeurServeur = routeurServeur;
    }

    onload(navigateur:INavigateur)
    {
        this.navigateur = navigateur;
        var location = navigateur.location();
        if (location != undefined)
            this.page = this.routeurClient.instancier(location);
    }
    
    LienVers<T>(c: {new(): T; }) : Lien<T>
    {
        return this.routeurClient.obtenirLien(c);
    }

    RedirigerVers<T>(c: {new(): T; }) : Redirection<T>
    {
        var lien = this.routeurClient.obtenirRedirection(c);
        this.navigateur.setlocation(lien.url)
        return lien;
    }

    RedirigerVers2<T, U>(c: {new(): T; } ,parametres:U) : Lien<T>
    {
        var lien = this.routeurClient.obtenirLien(c);
        this.navigateur.setlocation(lien.url)
        return lien;
    }

    AppelerWebService<T, U>(w:{new():WebService<T,U>}, t:T, succes : (u:U) => void)
    {
        var lien = this.routeurServeur.obtenirLien(w);
        this.navigateur.appelerWebService(lien.url, t, succes);
    }
    
    AppelerWebServiceAsync<T, U>(w:{new():WebService<T,U>}, t:T) : Promise<U>
    {
        var lien = this.routeurServeur.obtenirLien(w);
        return this.navigateur.appelerWebServiceAsync(lien.url, t);
    }
    
}

export class Lanceur 
{
    private classe:{new() : ApplicationClient}
    applicationClient : ApplicationClient;
    navigateur: NavigateurReel;
    constructor(classe:{new() : ApplicationClient})
    {
        this.classe = classe;
    }

    lancer()
    {
        this.navigateur = new NavigateurReel();
        this.applicationClient = new this.classe();

        Kernel.navigateur = this.navigateur;
        Kernel.applicationClient = this.applicationClient;

        this.applicationClient.onload(this.navigateur);
    }
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class NavigateurReel implements INavigateur
{
    location():string
    {
        return window.location.pathname;
    }
    setlocation(_url:string)
    {
        window.location.pathname = _url;
    }
    appelerWebService(url:string, parameters:any, succes:(reponse:any)=>void) : void
    {
        var req = new XMLHttpRequest();
        req.open('POST', url, true);
        req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if(req.status == 200)
                succes(req.responseText);
            else
                alert("Erreur pendant le chargement de la page.\n");
        }
        };
        req.send(null);
    }

    appelerWebServiceAsync(url:string, parameters:any) : Promise<any>
    {
        console.log('appelerWebServiceAsync');
        return new Promise((_resolve,_reject) => {  
            var req = new XMLHttpRequest();
            req.open('POST', url, true);
            req.onreadystatechange = function (aEvt) {
                if (req.readyState == 4) {
                    if(req.status == 200)
                    {
                        console.log('resolve');
                        _resolve(req.responseText);
                    }   
                    else
                    {
                        console.log('reject');
                        _reject("Erreur pendant le chargement de la page.\n");
                    }
                }
            };
            req.send(null);
        });
    }

    
}