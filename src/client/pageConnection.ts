import {LienVers, RedirigerVers} from '../coeur/kernel';
import {Redirection, Lien} from '../coeur/routage';
import * as Pages from './allPages';import * as Services from '../commun/services';

export default class PageConnection
{
    utilisateur:string;
    motDePasse:string;
    message:string;
    requete:Services.ISeConnecterRequete;
    
    seConnecter():Redirection<Pages.PageAccueilConnecté>|Pages.PageConnection
    {
        var ok = this.requete.executer(this.utilisateur, this.motDePasse);
        if (ok)
            return RedirigerVers(Pages.PageAccueilConnecté);
        this.message = "Erreur de connection";
        return this;
    }
}
