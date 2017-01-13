import {Injection} from '../coeur/bacasable'

import * as Definitions from '../commun/services'
import * as Implementations from './servicesImpl'

export class AnnoncesInjectionServeur extends Injection
{
    constructor()
    {
        super();
        this.ajouterImplementation(Definitions.RechercheService, Implementations.RechercheServiceImpl);
    }
}