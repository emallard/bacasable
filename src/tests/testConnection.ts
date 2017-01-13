import {NavigateurBacASable} from '../coeur/bacasable';
import {ApplicationClient} from '../coeur/kernel';
import * as Pages from '../client/allPages';
import {Redirection, Lien} from '../coeur/routage';

export class TestRecherche
{

    test(nav:NavigateurBacASable, applicationClient:ApplicationClient)
    {
        var pageAccueil = nav.suivreLien(applicationClient.LienVers(Pages.PageAccueil));
        var pageConnection = nav.suivreLien(pageAccueil.lienSeConnecter);

        pageConnection.utilisateur = 'etienne';
        pageConnection.motDePasse = 'biiiiip';
        
        var accueilConnecté = nav.suivre(<Redirection<Pages.PageAccueilConnecté>> pageConnection.seConnecter());
    }


    testEchecConnexion(nav:NavigateurBacASable, applicationClient:ApplicationClient)
    {
        var pageAccueil = nav.suivreLien(applicationClient.LienVers(Pages.PageAccueil));
        var pageConnection = nav.suivreLien(pageAccueil.lienSeConnecter);

        pageConnection.utilisateur = 'etienne';
        pageConnection.motDePasse = 'tryagain';
        
        var accueilConnecté = <Pages.PageConnection> pageConnection.seConnecter();
    }
}
