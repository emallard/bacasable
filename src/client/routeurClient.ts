import {Routeur} from '../coeur/routage';
import * as Pages from './allPages';

export class AnnoncesRouteurClient extends Routeur
{
    constructor()
    {
        super();
        this.ajouterRoute('/accueil', Pages.PageAccueil);
        this.ajouterRoute('/recherche', Pages.PageRecherche);
        this.ajouterRoute('/contact', Pages.PageContact);
        this.ajouterRoute('/connection', Pages.PageConnection);
        this.ajouterRoute('/prive/', Pages.PageAccueilConnecté);
        this.ajouterRouteParamétrée('/annonce/:id', Pages.PageVoirAnnonce, {id:'id'});
    }
}