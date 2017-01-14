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
        
}

