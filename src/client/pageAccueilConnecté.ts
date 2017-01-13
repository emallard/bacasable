import * as Pages from './allPages';
import * as Services from '../commun/services';


export default class PageAccueilConnecté
{
    requete:Services.IMesAnnoncesRequete;

    init()
    {
        this.requete.executer();
    }

    ajouterAnnonce()
    {
        
    }
}
