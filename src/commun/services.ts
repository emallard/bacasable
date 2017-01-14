
import { WebService } from '../coeur/bacasable'
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

export class SEnregistrerServiceIn
{
    utilisateur:string;
    motDePasse:string;
}

export class SEnregistrerServiceOut 
{
}

export class SEnregistrerService extends WebService<SEnregistrerServiceIn, SEnregistrerServiceOut> 
{
}


export class SeConnecterServiceIn
{
    utilisateur:string;
    motDePasse:string;
}

export class SeConnecterServiceOut 
{
    ok:boolean;
}

export class SeConnecterService extends WebService<SeConnecterServiceIn, SeConnecterServiceOut> 
{
}


export interface IMesAnnoncesRequete
{
    executer() : Annonce[];
}