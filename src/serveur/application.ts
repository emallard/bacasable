import {AnnoncesRouteurServeur} from '../commun/services';
import {AnnoncesImplementations} from './implementationsServeur';
import {ApplicationServeur} from '../coeur/bacasable'

export class AnnoncesApplicationServeur extends ApplicationServeur
{
    constructor()
    {
        super();
        this.init(new AnnoncesRouteurServeur(), new AnnoncesImplementations());
    }
}