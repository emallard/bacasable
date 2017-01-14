var bundle =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const pageAccueil_1 = __webpack_require__(5);
exports.PageAccueil = pageAccueil_1.default;
const pageAccueilConnect_1 = __webpack_require__(6);
exports.PageAccueilConnecté = pageAccueilConnect_1.default;
const pageConnection_1 = __webpack_require__(7);
exports.PageConnection = pageConnection_1.default;
const pageContact_1 = __webpack_require__(8);
exports.PageContact = pageContact_1.default;
const pageRecherche_1 = __webpack_require__(9);
exports.PageRecherche = pageRecherche_1.PageRecherche;
exports.PageRechercheQuery = pageRecherche_1.PageRechercheQuery;
exports.ComposantResultatRecherche = pageRecherche_1.ComposantResultatRecherche;
const pageVoirAnnonce_1 = __webpack_require__(10);
exports.PageVoirAnnonce = pageVoirAnnonce_1.default;
//# sourceMappingURL=allPages.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class Kernel {
}
exports.Kernel = Kernel;
function LienVers(c) {
    return Kernel.applicationClient.LienVers(c);
}
exports.LienVers = LienVers;
function RedirigerVers(c) {
    return Kernel.applicationClient.RedirigerVers(c);
}
exports.RedirigerVers = RedirigerVers;
function AppelerWebService(w, t, succes) {
    Kernel.applicationClient.AppelerWebService(w, t, succes);
}
exports.AppelerWebService = AppelerWebService;
//# sourceMappingURL=kernel.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const bacasable_1 = __webpack_require__(3);
const routage_1 = __webpack_require__(4);
const Services = __webpack_require__(2);
class AnnoncesRouteurServeur extends routage_1.Routeur {
    constructor() {
        super();
        this.ajouterRoute('/api/recherche', Services.RechercheService);
    }
}
exports.AnnoncesRouteurServeur = AnnoncesRouteurServeur;
class RechercheServiceIn {
}
exports.RechercheServiceIn = RechercheServiceIn;
class RechercheServiceOut {
}
exports.RechercheServiceOut = RechercheServiceOut;
class RechercheService extends bacasable_1.WebService {
}
exports.RechercheService = RechercheService;
class Annonce {
}
exports.Annonce = Annonce;
//# sourceMappingURL=services.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const kernel_1 = __webpack_require__(1);
class NavigateurBacASable {
    setInternet(internet) {
        this.internet = internet;
    }
    charger(applicationClient) {
        this.applicationClient = applicationClient;
        this.applicationClient.onload(this);
    }
    suivreLien(lien) {
        this._location = lien.url;
        var page = new lien.create();
        return page;
    }
    suivre(redirection) {
        var page = new redirection.create();
        return page;
    }
    /*
    executer<T>(f : () => Lien<T>) : T
    {
        var lien = f();
        var page = new lien.create();
        return page;
    }*/
    changerAdresse(_url) {
        this._location = _url;
    }
    location() { return this._location; }
    setlocation(location) { this._location = location; }
    appelerWebService(url, parameters, succes) {
        return this.internet.envoyer(url, parameters, succes);
    }
}
exports.NavigateurBacASable = NavigateurBacASable;
class ServeurBacASable {
    setInternet(internet) {
        this.internet = internet;
    }
    charger(applicationServeur) {
        this.applicationServeur = applicationServeur;
    }
    recevoir(url, parameters) {
        return this.applicationServeur.recevoir(url, parameters);
    }
}
class ApplicationServeur {
    init(routeurServeur, injectionServeur) {
        this.routeurServeur = routeurServeur;
        this.injectionServeur = injectionServeur;
    }
    recevoir(url, parameters) {
        // identifier le webservice en fonction de l'url
        var typeService = this.routeurServeur.trouverType(url);
        var instanceConcrete = this.injectionServeur.instancier(typeService);
        return instanceConcrete.executer(parameters);
    }
}
exports.ApplicationServeur = ApplicationServeur;
class Implementations {
    constructor() {
        this.items = [];
    }
    ajouterImplementation(u, t) {
        this.items.push({
            typeBase: u,
            typeConcret: t
        });
    }
    instancier(typeBase) {
        var found = this.items.find((i) => i.typeBase == typeBase);
        return new found.typeConcret();
    }
    instancier2(u) {
        var found = this.items.find((i) => i.typeBase == u);
        return (new found.typeConcret());
    }
}
exports.Implementations = Implementations;
class ItemImplementations {
}
exports.ItemImplementations = ItemImplementations;
class InternetBacASable {
    setServeur(serveur) {
        this.serveur = serveur;
    }
    envoyer(url, parameters, succes) {
        var reponse = this.serveur.recevoir(url, parameters);
        if (succes != null)
            succes(reponse);
    }
}
class BacASable {
    creer(applicationClient, applicationServeur) {
        this.applicationClient = applicationClient;
        this.applicationServeur = applicationServeur;
        var internet = new InternetBacASable();
        this.navigateur = new NavigateurBacASable();
        this.navigateur.setInternet(internet);
        var serveur = new ServeurBacASable();
        serveur.setInternet(internet);
        internet.setServeur(serveur);
        serveur.charger(this.applicationServeur);
        this.navigateur.setInternet(internet);
        this.navigateur.charger(this.applicationClient);
        kernel_1.Kernel.navigateur = this.navigateur;
        kernel_1.Kernel.applicationClient = this.applicationClient;
        /*
                // code à rajouter dans le navigateur
                var appClient = new ApplicationClient(
                        new MonRouteurClient(),
                        new MonRouteurServeur());
                appClient.onload(navigateur);
        
                // code à rajouter dans Node
                var appServeur = new ApplicationServeur(
                    new MonRouteurServeur()
                );
                appClient.setServeur(serveur);
        */
    }
}
exports.BacASable = BacASable;
class WebService {
    executer(t) {
        throw '_';
    }
}
exports.WebService = WebService;
class ApplicationClient {
    init(routeurClient, routeurServeur) {
        this.routeurClient = routeurClient;
        this.routeurServeur = routeurServeur;
    }
    onload(navigateur) {
        this.navigateur = navigateur;
        var location = navigateur.location();
        if (location != undefined)
            this.page = this.routeurClient.instancier(location);
    }
    LienVers(c) {
        return this.routeurClient.obtenirLien(c);
    }
    RedirigerVers(c) {
        var lien = this.routeurClient.obtenirRedirection(c);
        this.navigateur.setlocation(lien.url);
        return lien;
    }
    RedirigerVers2(c, parametres) {
        var lien = this.routeurClient.obtenirLien(c);
        this.navigateur.setlocation(lien.url);
        return lien;
    }
    AppelerWebService(w, t, succes) {
        var lien = this.routeurServeur.obtenirLien(w);
        this.navigateur.appelerWebService(lien.url, t, succes);
    }
}
exports.ApplicationClient = ApplicationClient;
class Lanceur {
    constructor(classe) {
        this.classe = classe;
    }
    lancer() {
        this.navigateur = new NavigateurReel();
        this.applicationClient = new this.classe();
        kernel_1.Kernel.navigateur = this.navigateur;
        kernel_1.Kernel.applicationClient = this.applicationClient;
        this.applicationClient.onload(this.navigateur);
    }
}
exports.Lanceur = Lanceur;
class NavigateurReel {
    location() {
        return window.location.pathname;
    }
    setlocation(_url) {
        window.location.pathname = _url;
    }
    appelerWebService(url, parameters, succes) {
        var req = new XMLHttpRequest();
        req.open('GET', 'http://www.mozilla.org/', true);
        req.onreadystatechange = function (aEvt) {
            if (req.readyState == 4) {
                if (req.status == 200)
                    succes(req.responseText);
                else
                    alert("Erreur pendant le chargement de la page.\n");
            }
        };
        req.send(null);
    }
}
exports.NavigateurReel = NavigateurReel;
//# sourceMappingURL=bacasable.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class Lien {
}
exports.Lien = Lien;
class Redirection {
}
exports.Redirection = Redirection;
class Routeur {
    constructor() {
        //ajouterRouteParamétrée<T extends IRoutable<U>, U>(route:string, c: new ()=>T, mapping:any)
        this.routes = [];
    }
    ajouterRouteParamétrée(route, c, mapping) {
        this.routes.push(new RouteParamétrée(route, c, mapping));
    }
    ajouterRoute(route, c) {
        this.routes.push(new RouteParamétrée(route, c, null));
    }
    obtenirLien(c) {
        var found = this.routes.find(r => {
            return (r.pageConstructor == c);
        });
        if (found == null)
            throw "Exception Obtenir Lien : " + c + " non trouvé";
        var lien = new Lien();
        lien.create = c;
        lien.url = found.url;
        return lien;
    }
    obtenirRedirection(c) {
        var found = this.routes.find(r => {
            return (r.pageConstructor == c);
        });
        if (found == null)
            throw "Exception Obtenir Redirection : " + c + " non trouvé";
        var lien = new Redirection();
        lien.create = c;
        lien.url = found.url;
        return lien;
    }
    instancier(_url) {
        var found = this.routes.find(r => r.url == _url);
        if (found == null)
            throw "Exception Route non trouvée : " + _url;
        var page = new found.pageConstructor();
        return page;
        /*
        if (r.query != null)
        {
            var mapped = {};
            for (var parametre in r.query)
            {
                var paramName = r.query[parametre];
                mapped[paramName] = match[paramName];
            }
            page.construire(r);
        }*/
    }
    trouverType(_url) {
        var found = this.routes.find(r => r.url == _url);
        return found.pageConstructor;
    }
}
exports.Routeur = Routeur;
class RouteParamétrée {
    constructor(url, pageConstructor, query) {
        this.url = url;
        this.pageConstructor = pageConstructor;
        this.query = query;
    }
}
exports.RouteParamétrée = RouteParamétrée;
//# sourceMappingURL=routage.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const kernel_1 = __webpack_require__(1);
const Pages = __webpack_require__(0);
class PageAccueil {
    constructor() {
        this.auteur = null;
        this.contenu = null;
        this.categorie = null;
        this.lieu = null;
        this.lienSeConnecter = kernel_1.LienVers(Pages.PageConnection);
    }
    chercher() {
        var parametres = {
            auteur: this.auteur,
            contenu: this.contenu,
            categorie: this.categorie,
            lieu: this.lieu
        };
        return kernel_1.RedirigerVers(Pages.PageRecherche); //, parametres);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageAccueil;
//# sourceMappingURL=pageAccueil.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class PageAccueilConnecté {
    init() {
        this.requete.executer();
    }
    ajouterAnnonce() {
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageAccueilConnecté;
//# sourceMappingURL=pageAccueilConnecté.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const kernel_1 = __webpack_require__(1);
const Pages = __webpack_require__(0);
class PageConnection {
    seConnecter() {
        var ok = this.requete.executer(this.utilisateur, this.motDePasse);
        if (ok)
            return kernel_1.RedirigerVers(Pages.PageAccueilConnecté);
        this.message = "Erreur de connection";
        return this;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageConnection;
//# sourceMappingURL=pageConnection.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class PageContact {
    envoyer() {
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageContact;
//# sourceMappingURL=pageContact.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const kernel_1 = __webpack_require__(1);
const Pages = __webpack_require__(0);
const Services = __webpack_require__(2);
class PageRechercheQuery {
}
exports.PageRechercheQuery = PageRechercheQuery;
class PageRecherche {
    construire(query) {
        this.lieu = query.lieu;
        this.categorie = query.categorie;
        this.contenu = query.contenu;
        this.auteur = query.auteur;
    }
    chercher() {
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
        kernel_1.AppelerWebService(Services.RechercheService, {
            auteur: this.auteur,
            contenu: this.contenu,
            categorie: this.categorie,
            lieu: this.lieu,
        }, resultatRecherche => {
            resultatRecherche.annonces.forEach(a => {
                var composant = new ComposantResultatRecherche();
                composant.SetAnnonce(a);
                this.resultats.push(composant);
            });
        });
    }
}
exports.PageRecherche = PageRecherche;
class ComposantResultatRecherche {
    SetAnnonce(annonce) {
        this.lien = kernel_1.LienVers(Pages.PageVoirAnnonce); //, {id: annonce.id});
    }
}
exports.ComposantResultatRecherche = ComposantResultatRecherche;
//# sourceMappingURL=pageRecherche.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

class PageVoirAnnonce // implements IRoutable<string>
 {
    construire(id) {
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageVoirAnnonce;
//# sourceMappingURL=pageVoirAnnonce.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const bacasable_1 = __webpack_require__(3);
const routage_1 = __webpack_require__(4);
const services_1 = __webpack_require__(2);
const Pages = __webpack_require__(0);
class AnnoncesRouteurClient extends routage_1.Routeur {
    constructor() {
        super();
        this.ajouterRoute('/', Pages.PageAccueil);
        this.ajouterRoute('/accueil', Pages.PageAccueil);
        this.ajouterRoute('/recherche', Pages.PageRecherche);
        this.ajouterRoute('/contact', Pages.PageContact);
        this.ajouterRoute('/connection', Pages.PageConnection);
        this.ajouterRoute('/prive/', Pages.PageAccueilConnecté);
        this.ajouterRouteParamétrée('/annonce/:id', Pages.PageVoirAnnonce, { id: 'id' });
    }
}
exports.AnnoncesRouteurClient = AnnoncesRouteurClient;
class AnnoncesApplicationClient extends bacasable_1.ApplicationClient {
    constructor() {
        super();
        this.init(new AnnoncesRouteurClient(), new services_1.AnnoncesRouteurServeur());
    }
}
exports.AnnoncesApplicationClient = AnnoncesApplicationClient;
// définition du lanceur pour intégration html
//<script src="/libs/bundle.js"></script>
//<script>bundle.lanceur.lancer()</script>
exports.lanceur = new bacasable_1.Lanceur(AnnoncesApplicationClient);
//# sourceMappingURL=application.js.map

/***/ })
/******/ ]);