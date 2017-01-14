import {NavigateurBacASable, ApplicationClient} from '../coeur/bacasable';
import * as Pages from '../client/allPages';
import {TestBase} from './test'

export class TestRecherche extends TestBase
{
    async test()
    {
        var pageAccueil = this.navigateur.suivreLien(this.applicationClient.LienVers(Pages.PageAccueil));
        
        pageAccueil.lieu = 'Paris';
        var pageRecherche = this.navigateur.suivre(pageAccueil.chercher());
        
        await pageRecherche.chercher();
        
        var pageVoirAnnonce = this.navigateur.suivreLien(pageRecherche.resultats[0].lien);
    }
}
