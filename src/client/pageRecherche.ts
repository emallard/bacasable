import {LienVers, RedirigerVers, AppelerWebService, AppelerWebServiceAsync} from '../coeur/kernel';
import {Redirection, IRoutable, Lien} from '../coeur/routage';
import {Input} from './input';
import * as Pages from './allPages';
import * as Services from '../commun/services';


export class PageRechercheQuery
{
    auteur:string;
    contenu:string;
    categorie:string;
    lieu:string;
}

export class PageRecherche implements IRoutable<PageRechercheQuery>
{
    auteur = new Input<string>();
    contenu = new Input<string>();
    categorie = new Input<string>();
    lieu = new Input<string>();

    resultats:ComposantResultatRecherche[];

    construire(query:PageRechercheQuery)
    {
        this.lieu.valeur = query.lieu;
        this.categorie.valeur = query.categorie;
        this.contenu.valeur = query.contenu;
        this.auteur.valeur = query.auteur;
    }

    async chercher()
    {
        this.resultats = [];
        
        var resultatRecherche = await AppelerWebServiceAsync(
            Services.RechercheService, 
            {
                auteur:this.auteur.valeur, 
                contenu:this.contenu.valeur, 
                categorie:this.categorie.valeur, 
                lieu:this.lieu.valeur,
        });

        resultatRecherche.annonces.forEach(a => 
        {
            var composant = new ComposantResultatRecherche();
            composant.SetAnnonce(a);
            this.resultats.push(composant);
        });
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
