import {ApplicationClient, Lanceur} from '../coeur/bacasable';
import {Routeur} from '../coeur/routage';
import {AnnoncesRouteurServeur} from '../commun/services'
import * as Pages from './allPages';


export class AnnoncesRouteurClient extends Routeur
{
    constructor()
    {
        super();
        this.ajouterRoute('/', Pages.PageAccueil);
        this.ajouterRoute('/accueil', Pages.PageAccueil);
        this.ajouterRoute('/recherche', Pages.PageRecherche);
        this.ajouterRoute('/contact', Pages.PageContact);
        this.ajouterRoute('/connection', Pages.PageConnection);
        this.ajouterRoute('/prive/', Pages.PageAccueilConnecté);
        this.ajouterRouteParamétrée('/annonce/:id', Pages.PageVoirAnnonce, {id:'id'});
    }
}

export class AnnoncesApplicationClient extends ApplicationClient
{
    constructor()
    {
        super();
        this.init(new AnnoncesRouteurClient(), new AnnoncesRouteurServeur());
    }
}

// définition du lanceur pour intégration html
//<script src="/libs/bundle.js"></script>
//<script>bundle.lanceur.lancer()</script>
export var lanceur = new Lanceur(AnnoncesApplicationClient);