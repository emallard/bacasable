import {LienVers, RedirigerVers} from '../coeur/kernel';
import {Redirection, IRoutable, Lien} from '../coeur/routage';
import * as Pages from './allPages';
import {Input} from './input';

export default class PageAccueil
{
    auteur = new Input<string>();
    contenu = new Input<string>();
    categorie = new Input<string>();
    lieu = new Input<string>();

    lienSeConnecter = LienVers(Pages.PageConnection);
    
    constructor()
    {
        this.contenu.valeur = 'a';
    }

    chercher():Redirection<Pages.PageRecherche>
    {
        var parametres:Pages.PageRechercheQuery = {
            auteur:this.auteur.valeur, 
            contenu:this.contenu.valeur, 
            categorie:this.categorie.valeur, 
            lieu:this.lieu.valeur };
        return RedirigerVers(Pages.PageRecherche);//, parametres);
    }
/*
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
*/
        
}

