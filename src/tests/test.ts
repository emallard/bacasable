
import {BacASable, NavigateurBacASable} from '../coeur/bacasable';
import {AnnoncesApplicationClient} from '../client/application';
import {AnnoncesApplicationServeur} from '../serveur/application'


export class TestBase
{
    applicationServeur:AnnoncesApplicationServeur;
    applicationClient:AnnoncesApplicationClient;
    bacasable:BacASable;
    navigateur:NavigateurBacASable;
    
    constructor()
    {
        this.applicationServeur = new AnnoncesApplicationServeur();
        this.applicationClient = new AnnoncesApplicationClient();
        this.bacasable = new BacASable();
        this.bacasable.creer(this.applicationClient, this.applicationServeur);
        this.navigateur = this.bacasable.navigateur;
    }
}
