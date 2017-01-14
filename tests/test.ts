
import {TestRecherche} from '../src/tests/testRecherche';

/*
    Dans le javascript du navigateur :

    var appClient = new ApplicationClient(
            new MonRouteurClient(),
            new MonRouteurServeur());
    
    appClient.onload(new NavigateurReel())
*/

new TestRecherche().test();