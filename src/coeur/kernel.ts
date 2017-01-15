import {Routeur, Lien, Redirection} from './routage'
import {WebService, INavigateur, ApplicationClient} from './bacasable'

export class Kernel
{
    public static navigateur : INavigateur;
    public static applicationClient : ApplicationClient;
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

export async function AppelerWebServiceAsync<T, U>(w:{new():WebService<T,U>}, t:T) : Promise<U>
{
    return Kernel.applicationClient.AppelerWebServiceAsync(w, t);
}
