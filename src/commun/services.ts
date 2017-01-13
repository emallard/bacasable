
import { WebService, WIn, WService } from '../coeur/webservice'


export class RechercheServiceIn
{
    auteur:string;
    contenu:string;
    lieu:string;
    categorie:string;
}

export class RechercheServiceOut
{
    annonces:Annonce[];
}

export var WRechercheService = new WService(RechercheServiceIn, RechercheServiceOut);

export class RechercheService extends WebService<RechercheServiceIn, RechercheServiceOut>
{
   
}


    export class Annonce
    {
        id:string;
        auteur:string;
        contenu:string;
        categorie:string;
        lieu:string;
    }

    export interface ISEnregistrerService
    {
        executer(utilisateur:string, motDePasse:string);
    }

    export interface ISeConnecterRequete
    {
        executer(utilisateur:string, motDePasse:string);
    }

    export interface IMesAnnoncesRequete
    {
        executer() : Annonce[];
    }