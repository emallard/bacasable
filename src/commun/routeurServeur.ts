import {Routeur} from '../coeur/routage';
import * as Services from './services';

export class AnnoncesRouteurServeur extends Routeur
{
    constructor()
    {
        super();
        this.ajouterRoute('/api/recherche', Services.RechercheService);
    }
}