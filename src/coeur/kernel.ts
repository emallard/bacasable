import {IWebService} from './webservice'
import {Routeur, Lien, Redirection} from './routage'
import {WebService, WIn, WService} from './webservice'


// quand les interfaces entre l'applciation client réelle et le bac à sable sont différentes.

export interface INavigateur
{
    location():string;
    setlocation(_url:string);
    appelerWebService(url:string, parameters:any, succes:(reponse:any)=>void) : any;
    //appelerWebService<T extends IWebService<U,V>, U, V>(webserviceType:new () => T, u:U) : V;
}

export class Kernel
{
    public static navigateur : INavigateur;
    public static applicationClient : ApplicationClient;
}

export class ApplicationClient
{
    routeurClient:Routeur;
    routeurServeur:Routeur;
    navigateur:INavigateur;
    page:any;

    constructor(routeurClient:Routeur, routeurServeur:Routeur)
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
    
}

export function LienVers<T>(c: {new(): T; }) : Lien<T>
{
    return Kernel.applicationClient.LienVers(c);
}

export function RedirigerVers<T>(c: {new(): T; }) : Redirection<T>
{
    return Kernel.applicationClient.RedirigerVers(c);
}

export function AppelerWebService<T, U>(w:{new():WebService<T,U>}, t:T, succes : (u:U) => void)
{
    Kernel.applicationClient.AppelerWebService(w, t, succes);
}

/*
//export function AppelerWebService<T, U, W extends WebService<T,U>>(c: {new(): W; prototype: {}}, t:T, u:U) : void
export function AppelerWebService___<W, T, U>
    (c: {new(): W; prototype: { appeler(_t:T):U }}, t:T) : void
{
    //return Kernel.applicationClient.AppelerWebService(c, t);
    var lien = Kernel.applicationClient.routeurServeur.obtenirLien(c);
    return Kernel.applicationClient.navigateur.appelerWebService(lien.url, t);
}*/
