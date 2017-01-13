
import {TestRecherche} from '../src/tests/testRecherche';
import {BacASable, ApplicationServeur} from '../src/coeur/bacasable';
import {ApplicationClient} from '../src/coeur/kernel';
import {AnnoncesRouteurClient} from '../src/client/routeurClient';
import {AnnoncesRouteurServeur} from '../src/commun/routeurServeur';
import {AnnoncesInjectionServeur} from '../src/serveur/injectionServeur';

/*
    Dans le javascript du navigateur :

    var appClient = new ApplicationClient(
            new MonRouteurClient(),
            new MonRouteurServeur());
    
    appClient.onload(new NavigateurReel())
*/

function test1()
{
    /*
    var r = new AnnoncesRouteurServeur();
    var aaa = r.routes[0].pageConstructor;
    var trouve = r.trouverType('/api/recherche');
    */
    var applicationServeur = new ApplicationServeur(
        new AnnoncesRouteurServeur(),
        new AnnoncesInjectionServeur()
    );
    var applicationClient = new ApplicationClient(
        new AnnoncesRouteurClient(), 
        new AnnoncesRouteurServeur());

    var bacasable = new BacASable();
    bacasable.creer(applicationClient, applicationServeur);
    var t = new TestRecherche();
    t.test(bacasable.navigateur, bacasable.applicationClient)
}

test1();