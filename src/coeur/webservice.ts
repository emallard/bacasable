import {RedirigerVers, Kernel} from './kernel';

export class WIn<T>
{
    out: T;
}

export interface IWebService<T, U>
{
    executer(t:T):U;
    //appeler(t:T):U;
}

export class WebService<T, U> implements IWebService<T, U>
{
    executer(t:T):U
    {
        throw 'not implemented';
    }

    /*
    appeler(t:T):U
    {
        return Kernel.applicationClient.navigateur.appelerWebService();
    }*/
}

export class WService<T, U>
{
    constructor(ct: {new():T;}, cu: {new():U;})
    {

    }
}

export class A{
    a:number;
} 
export class B{
    b:number;
}
export var MonService = new WService(A, B);