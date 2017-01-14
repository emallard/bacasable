import {NavigateurBacASable, ApplicationClient} from '../coeur/bacasable';
import {Redirection, Lien} from '../coeur/routage';
import * as Pages from '../client/allPages';
import {TestBase} from './test'

export class TestConnection extends TestBase
{

    test()
    {
        var pageAccueil = this.navigateur.suivreLien(this.applicationClient.LienVers(Pages.PageAccueil));
        var pageConnection = this.navigateur.suivreLien(pageAccueil.lienSeConnecter);

        pageConnection.utilisateur = 'etienne';
        pageConnection.motDePasse = 'biiiiip';
        
        var accueilConnecté = this.navigateur.suivre(<Redirection<Pages.PageAccueilConnecté>> pageConnection.seConnecter());
    }


    testEchecConnexion()
    {
        var pageAccueil = this.navigateur.suivreLien(this.applicationClient.LienVers(Pages.PageAccueil));
        var pageConnection = this.navigateur.suivreLien(pageAccueil.lienSeConnecter);

        pageConnection.utilisateur = 'etienne';
        pageConnection.motDePasse = 'tryagain';
        
        var accueilConnecté = <Pages.PageConnection> pageConnection.seConnecter();
    }
}
