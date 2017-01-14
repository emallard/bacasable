import {LienVers, RedirigerVers} from '../coeur/kernel';
import {Redirection, IRoutable, Lien} from '../coeur/routage';
import * as Pages from './allPages';

export default class PageAccueil
{
    auteur:string = null;
    contenu:string = null;
    categorie:string = null;
    lieu:string = null;

    lienSeConnecter = LienVers(Pages.PageConnection);
    
    chercher():Redirection<Pages.PageRecherche>
    {
        var parametres:Pages.PageRechercheQuery = {
            auteur:this.auteur, 
            contenu:this.contenu, 
            categorie:this.categorie, 
            lieu:this.lieu};
        return RedirigerVers(Pages.PageRecherche);//, parametres);
    }

    async test() : Promise<void>
    {
        console.log('a');
        await this.appeler('/libs/bundle.js');
        console.log('b');
    }

    appeler(url:string) : Promise<any>
    {
        console.log('appelerWebServiceAsync');
        return new Promise((_resolve,_reject) => {  
            var req = new XMLHttpRequest();
            req.open('GET', url, true);
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

