
import {RechercheService, RechercheServiceIn, RechercheServiceOut, Annonce} from '../commun/services'
import {AnnoncesRouteurServeur} from '../commun/routeurServeur'


export class RechercheServiceImpl extends RechercheService
{
    executer(i:RechercheServiceIn) : RechercheServiceOut
    {
        // todo MongoDB
        var res = new RechercheServiceOut();
        res.annonces = [];
        res.annonces.push({id: "123-456", auteur:'auteur', contenu:'contenu', categorie:'categorie', lieu:'lieu'})
        return res;
    }
}
