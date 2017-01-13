import {LienVers, RedirigerVers, AppelerWebService} from '../coeur/kernel';
import {Redirection, IRoutable, Lien} from '../coeur/routage';
import * as Pages from './allPages';
import * as Services from '../commun/services';
import { Kernel, INavigateur } from '../coeur/kernel'

export class PageRechercheQuery
{
    auteur:string;
    contenu:string;
    categorie:string;
    lieu:string;
}

export class PageRecherche implements IRoutable<PageRechercheQuery>
{
    auteur:string;
    contenu:string;
    categorie:string;
    lieu:string;

    resultats:ComposantResultatRecherche[];

    construire(query:PageRechercheQuery)
    {
        this.lieu = query.lieu;
        this.categorie = query.categorie;
        this.contenu = query.contenu;
        this.auteur = query.auteur;
    }

    chercher()
    {
/*
        // Faire la recherche:
        var sin: Services.RechercheServiceIn = 
        {
            auteur:this.auteur, 
            contenu:this.contenu, 
            categorie:this.categorie, 
            lieu:this.lieu,
        };
*/
        
        /*
        //var resultatRecherche: Services.RechercheServiceOut;
        var resultatRecherche = AppelerWebService2(
            Services.WRechercheService, 
            {
                auteur:this.auteur, 
                contenu:this.contenu, 
                categorie:this.categorie, 
                lieu:this.lieu,
            });
        */

        this.resultats = [];
        
        AppelerWebService(
            Services.RechercheService, 
            {
                auteur:this.auteur, 
                contenu:this.contenu, 
                categorie:this.categorie, 
                lieu:this.lieu,
            },
            resultatRecherche =>
            {
                resultatRecherche.annonces.forEach(a => 
                {
                    var composant = new ComposantResultatRecherche();
                    composant.SetAnnonce(a);
                    this.resultats.push(composant);
                });
            }
        );
    }
}

export class ComposantResultatRecherche
{
    lien:Lien<Pages.PageVoirAnnonce>;

    SetAnnonce(annonce:Services.Annonce)
    {
        this.lien = LienVers(Pages.PageVoirAnnonce);//, {id: annonce.id});
    }
}