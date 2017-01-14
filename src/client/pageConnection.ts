import {LienVers, RedirigerVers, AppelerWebService} from '../coeur/kernel';
import {Redirection, Lien} from '../coeur/routage';
import * as Pages from './allPages';
import * as Services from '../commun/services';

export default class PageConnection
{
    utilisateur:string = null;
    motDePasse:string = null;
    message:string = null;

    seConnecter():Redirection<Pages.PageAccueilConnecté>|Pages.PageConnection
    {
        throw 'todo';
        /*
        AppelerWebService(
            Services.SeConnecterService,
            {utilisateur:this.utilisateur, 
            motDePasse:this.motDePasse},
            (resultat) =>
            {
                if (resultat.ok)
                    return RedirigerVers(Pages.PageAccueilConnecté);
                else
                    this.message = "Erreur de connection";
                    return this;
            }
        */
    }
}
