

export interface IRoutable<U>
{
    construire(query:U);
}


export class Lien<T>
{
    url:string;
    create:new()=>T;
}


export class Redirection<T>
{
    url:string;
    create:new()=>T;
}


export class Routeur
{
    //ajouterRouteParamétrée<T extends IRoutable<U>, U>(route:string, c: new ()=>T, mapping:any)
    
    routes:RouteParamétrée[] = [];

    ajouterRouteParamétrée(route:string, c: new ()=>any, mapping:any)
    {
        this.routes.push(new RouteParamétrée(route, c, mapping));
    }

    ajouterRoute(route:string, c: {new ():any})
    {
        this.routes.push(new RouteParamétrée(route, c, null));
    }

    obtenirLien<T>(c: {new(): T}) : Lien<T>
    {
        var found =this.routes.find(r => {
            return (r.pageConstructor == c);
        });

        var lien = new Lien<T>();
        lien.create = c;
        lien.url = found.url;
        return lien;
    }

    obtenirRedirection<T>(c: {new(): T}) : Redirection<T>
    {
        var found =this.routes.find(r => {
            return (r.pageConstructor == c);
        });

        var lien = new Redirection<T>();
        lien.create = c;
        lien.url = found.url;
        return lien;
    }

    instancier(_url:string):any
    {
        var found = this.routes.find(r => r.url == _url);
        var page = new found.pageConstructor();
        return page;
                /*
                if (r.query != null)
                {
                    var mapped = {};
                    for (var parametre in r.query)
                    {
                        var paramName = r.query[parametre];
                        mapped[paramName] = match[paramName];
                    }
                    page.construire(r);
                }*/
    }

    trouverType(_url:string) : any
    {
        var found = this.routes.find(r => r.url == _url);
        return found.pageConstructor;
    }
}


export class RouteParamétrée {
    
    constructor(
        public url:string, 
        public pageConstructor:{new ():any}, 
        public query:any)
    {
    }
}