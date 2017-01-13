import {NavigateurBacASable} from '../coeur/bacasable';
import {ApplicationClient} from '../coeur/kernel';
import * as Pages from '../client/allPages';

export class TestRecherche
{
    test(nav:NavigateurBacASable, applicationClient:ApplicationClient)
    {
        var pageAccueil = nav.suivreLien(applicationClient.LienVers(Pages.PageAccueil));
        
        pageAccueil.lieu = 'Paris';
        var pageRecherche = nav.suivre(pageAccueil.chercher());
        
        pageRecherche.chercher();
        
        var pageVoirAnnonce = nav.suivreLien(pageRecherche.resultats[0].lien);
    }
}
