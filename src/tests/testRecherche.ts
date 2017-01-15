import {NavigateurBacASable, ApplicationClient} from '../coeur/bacasable';
import * as Pages from '../client/allPages';
import {TestBase} from './test'

export class TestRecherche extends TestBase
{
    async test()
    {
        var lien = this.applicationClient.LienVers(Pages.PageAccueil);
        console.log(lien.url);
        var pageAccueil = this.navigateur.suivreLien(lien);
        
        pageAccueil.lieu.valeur = 'Paris';
        var pageRecherche = this.navigateur.suivre(pageAccueil.chercher());
        
        await pageRecherche.chercher();
        
        var pageVoirAnnonce = this.navigateur.suivreLien(pageRecherche.resultats[0].lien);
    }
}
