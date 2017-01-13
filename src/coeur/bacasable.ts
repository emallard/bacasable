import { Routeur, Lien, Redirection} from './routage'
import { Kernel, INavigateur, ApplicationClient } from './kernel'

export class NavigateurBacASable implements INavigateur
{
    internet:InternetBacASable;
    _location:string;
    applicationClient:ApplicationClient;
    
    setInternet(internet:InternetBacASable)
    {
        this.internet = internet;
    }

    charger(applicationClient:ApplicationClient)
    {
        this.applicationClient = applicationClient;
        this.applicationClient.onload(this);
    }

    suivreLien<T>(lien: Lien<T>) : T
    {
        this._location = lien.url;
        var page = new lien.create();
        return page;
    }

    suivre<T>(redirection: Redirection<T>) : T
    {
        var page = new redirection.create();
        return page;
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

    appelerWebService(url:string, parameters:any, succes:(reponse:any)=>void) : any
    {
        return this.internet.envoyer(url, parameters, succes);
    }
}


class ServeurBacASable
{
    internet:InternetBacASable;
    applicationServeur:ApplicationServeur;

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
}

export class ApplicationServeur
{
    routeurServeur:Routeur;
    injectionServeur:Injection;

    constructor(routeurServeur:Routeur, injectionServeur:Injection)
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

export class Injection
{
    items:ItemInjection[] = [];

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

export class ItemInjection
{
    typeBase : { new() : any };
    typeConcret : {new() : any};
}

class InternetBacASable
{
    serveur:ServeurBacASable;
    
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
        
        var internet = new InternetBacASable();
        this.navigateur = new NavigateurBacASable();
        this.navigateur.setInternet(internet);
        
        var serveur = new ServeurBacASable();
        serveur.setInternet(internet);
        internet.setServeur(serveur);
        serveur.charger(this.applicationServeur);

        this.navigateur.setInternet(internet);
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
}