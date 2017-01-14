import {Implementations} from '../coeur/bacasable'

import * as Definitions from '../commun/services'
import * as Services from './servicesImpl'

export class AnnoncesImplementations extends Implementations
{
    constructor()
    {
        super();
        this.ajouterImplementation(Definitions.RechercheService, Services.RechercheServiceImpl);
    }
}