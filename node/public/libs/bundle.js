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
/******/ 	return __webpack_require__(__webpack_require__.s = 310);
/******/ })
/************************************************************************/
/******/ ({

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var kernel_1 = __webpack_require__(61);
var Pages = __webpack_require__(48);

var PageAccueil = function () {
    function PageAccueil() {
        _classCallCheck(this, PageAccueil);

        this.auteur = null;
        this.contenu = null;
        this.categorie = null;
        this.lieu = null;
        this.lienSeConnecter = kernel_1.LienVers(Pages.PageConnection);
    }

    _createClass(PageAccueil, [{
        key: "chercher",
        value: function chercher() {
            var parametres = {
                auteur: this.auteur,
                contenu: this.contenu,
                categorie: this.categorie,
                lieu: this.lieu
            };
            return kernel_1.RedirigerVers(Pages.PageRecherche); //, parametres);
        }
    }, {
        key: "test",
        value: function test() {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('a');
                                _context.next = 3;
                                return this.appeler('/libs/bundle.js');

                            case 3:
                                console.log('b');

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "appeler",
        value: function appeler(url) {
            console.log('appelerWebServiceAsync');
            return new Promise(function (_resolve, _reject) {
                var req = new XMLHttpRequest();
                req.open('GET', url, true);
                req.onreadystatechange = function (aEvt) {
                    if (req.readyState == 4) {
                        if (req.status == 200) {
                            console.log('resolve');
                            _resolve(req.responseText);
                        } else {
                            console.log('reject');
                            _reject("Erreur pendant le chargement de la page.\n");
                        }
                    }
                };
                req.send(null);
            });
        }
    }]);

    return PageAccueil;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageAccueil;

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageAccueilConnecté = function () {
    function PageAccueilConnecté() {
        _classCallCheck(this, PageAccueilConnecté);
    }

    _createClass(PageAccueilConnecté, [{
        key: "init",
        value: function init() {
            this.requete.executer();
        }
    }, {
        key: "ajouterAnnonce",
        value: function ajouterAnnonce() {}
    }]);

    return PageAccueilConnecté;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageAccueilConnecté;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var kernel_1 = __webpack_require__(61);
var Pages = __webpack_require__(48);
var Services = __webpack_require__(49);

var PageConnection = function () {
    function PageConnection() {
        _classCallCheck(this, PageConnection);

        this.utilisateur = null;
        this.motDePasse = null;
        this.message = null;
    }

    _createClass(PageConnection, [{
        key: "seConnecter",
        value: function seConnecter() {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var resultat;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return kernel_1.AppelerWebServiceAsync(Services.SeConnecterService, {
                                    utilisateur: this.utilisateur,
                                    motDePasse: this.motDePasse
                                });

                            case 2:
                                resultat = _context.sent;

                                if (!resultat.ok) {
                                    _context.next = 7;
                                    break;
                                }

                                return _context.abrupt("return", kernel_1.RedirigerVers(Pages.PageAccueilConnecté));

                            case 7:
                                this.message = "Erreur de connection";

                            case 8:
                                return _context.abrupt("return", this);

                            case 9:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return PageConnection;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageConnection;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageContact = function () {
    function PageContact() {
        _classCallCheck(this, PageContact);
    }

    _createClass(PageContact, [{
        key: "envoyer",
        value: function envoyer() {}
    }]);

    return PageContact;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageContact;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var kernel_1 = __webpack_require__(61);
var Pages = __webpack_require__(48);
var Services = __webpack_require__(49);

var PageRechercheQuery = function PageRechercheQuery() {
    _classCallCheck(this, PageRechercheQuery);
};

exports.PageRechercheQuery = PageRechercheQuery;

var PageRecherche = function () {
    function PageRecherche() {
        _classCallCheck(this, PageRecherche);
    }

    _createClass(PageRecherche, [{
        key: "construire",
        value: function construire(query) {
            this.lieu = query.lieu;
            this.categorie = query.categorie;
            this.contenu = query.contenu;
            this.auteur = query.auteur;
        }
    }, {
        key: "chercher",
        value: function chercher() {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var _this = this;

                var resultatRecherche;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.resultats = [];
                                _context.next = 3;
                                return kernel_1.AppelerWebServiceAsync(Services.RechercheService, {
                                    auteur: this.auteur,
                                    contenu: this.contenu,
                                    categorie: this.categorie,
                                    lieu: this.lieu
                                });

                            case 3:
                                resultatRecherche = _context.sent;

                                resultatRecherche.annonces.forEach(function (a) {
                                    var composant = new ComposantResultatRecherche();
                                    composant.SetAnnonce(a);
                                    _this.resultats.push(composant);
                                });

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return PageRecherche;
}();

exports.PageRecherche = PageRecherche;

var ComposantResultatRecherche = function () {
    function ComposantResultatRecherche() {
        _classCallCheck(this, ComposantResultatRecherche);
    }

    _createClass(ComposantResultatRecherche, [{
        key: "SetAnnonce",
        value: function SetAnnonce(annonce) {
            this.lien = kernel_1.LienVers(Pages.PageVoirAnnonce); //, {id: annonce.id});
        }
    }]);

    return ComposantResultatRecherche;
}();

exports.ComposantResultatRecherche = ComposantResultatRecherche;

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageVoirAnnonce // implements IRoutable<string>
= function () {
   function PageVoirAnnonce() {
      _classCallCheck(this, PageVoirAnnonce);
   }

   _createClass(PageVoirAnnonce, [{
      key: "construire",
      value: function construire(id) {}
   }]);

   return PageVoirAnnonce;
}();

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageVoirAnnonce;

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bacasable_1 = __webpack_require__(88);
var routage_1 = __webpack_require__(89);
var services_1 = __webpack_require__(49);
var Pages = __webpack_require__(48);

var AnnoncesRouteurClient = function (_routage_1$Routeur) {
    _inherits(AnnoncesRouteurClient, _routage_1$Routeur);

    function AnnoncesRouteurClient() {
        _classCallCheck(this, AnnoncesRouteurClient);

        var _this = _possibleConstructorReturn(this, (AnnoncesRouteurClient.__proto__ || Object.getPrototypeOf(AnnoncesRouteurClient)).call(this));

        _this.ajouterRoute('/', Pages.PageAccueil);
        _this.ajouterRoute('/accueil', Pages.PageAccueil);
        _this.ajouterRoute('/recherche', Pages.PageRecherche);
        _this.ajouterRoute('/contact', Pages.PageContact);
        _this.ajouterRoute('/connection', Pages.PageConnection);
        _this.ajouterRoute('/prive/', Pages.PageAccueilConnecté);
        _this.ajouterRouteParamétrée('/annonce/:id', Pages.PageVoirAnnonce, { id: 'id' });
        return _this;
    }

    return AnnoncesRouteurClient;
}(routage_1.Routeur);

exports.AnnoncesRouteurClient = AnnoncesRouteurClient;

var AnnoncesApplicationClient = function (_bacasable_1$Applicat) {
    _inherits(AnnoncesApplicationClient, _bacasable_1$Applicat);

    function AnnoncesApplicationClient() {
        _classCallCheck(this, AnnoncesApplicationClient);

        var _this2 = _possibleConstructorReturn(this, (AnnoncesApplicationClient.__proto__ || Object.getPrototypeOf(AnnoncesApplicationClient)).call(this));

        _this2.init(new AnnoncesRouteurClient(), new services_1.AnnoncesRouteurServeur());
        return _this2;
    }

    return AnnoncesApplicationClient;
}(bacasable_1.ApplicationClient);

exports.AnnoncesApplicationClient = AnnoncesApplicationClient;
// définition du lanceur pour intégration html
//<script src="/libs/bundle.js"></script>
//<script>bundle.lanceur.lancer()</script>
exports.lanceur = new bacasable_1.Lanceur(AnnoncesApplicationClient);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pageAccueil_1 = __webpack_require__(303);
exports.PageAccueil = pageAccueil_1.default;
var pageAccueilConnect_1 = __webpack_require__(304);
exports.PageAccueilConnecté = pageAccueilConnect_1.default;
var pageConnection_1 = __webpack_require__(305);
exports.PageConnection = pageConnection_1.default;
var pageContact_1 = __webpack_require__(306);
exports.PageContact = pageContact_1.default;
var pageRecherche_1 = __webpack_require__(307);
exports.PageRecherche = pageRecherche_1.PageRecherche;
exports.PageRechercheQuery = pageRecherche_1.PageRechercheQuery;
exports.ComposantResultatRecherche = pageRecherche_1.ComposantResultatRecherche;
var pageVoirAnnonce_1 = __webpack_require__(308);
exports.PageVoirAnnonce = pageVoirAnnonce_1.default;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bacasable_1 = __webpack_require__(88);
var routage_1 = __webpack_require__(89);
var Services = __webpack_require__(49);

var AnnoncesRouteurServeur = function (_routage_1$Routeur) {
    _inherits(AnnoncesRouteurServeur, _routage_1$Routeur);

    function AnnoncesRouteurServeur() {
        _classCallCheck(this, AnnoncesRouteurServeur);

        var _this = _possibleConstructorReturn(this, (AnnoncesRouteurServeur.__proto__ || Object.getPrototypeOf(AnnoncesRouteurServeur)).call(this));

        _this.ajouterRoute('/api/recherche', Services.RechercheService);
        return _this;
    }

    return AnnoncesRouteurServeur;
}(routage_1.Routeur);

exports.AnnoncesRouteurServeur = AnnoncesRouteurServeur;

var RechercheServiceIn = function RechercheServiceIn() {
    _classCallCheck(this, RechercheServiceIn);
};

exports.RechercheServiceIn = RechercheServiceIn;

var RechercheServiceOut = function RechercheServiceOut() {
    _classCallCheck(this, RechercheServiceOut);
};

exports.RechercheServiceOut = RechercheServiceOut;

var RechercheService = function (_bacasable_1$WebServi) {
    _inherits(RechercheService, _bacasable_1$WebServi);

    function RechercheService() {
        _classCallCheck(this, RechercheService);

        return _possibleConstructorReturn(this, (RechercheService.__proto__ || Object.getPrototypeOf(RechercheService)).apply(this, arguments));
    }

    return RechercheService;
}(bacasable_1.WebService);

exports.RechercheService = RechercheService;

var Annonce = function Annonce() {
    _classCallCheck(this, Annonce);
};

exports.Annonce = Annonce;

var SEnregistrerServiceIn = function SEnregistrerServiceIn() {
    _classCallCheck(this, SEnregistrerServiceIn);
};

exports.SEnregistrerServiceIn = SEnregistrerServiceIn;

var SEnregistrerServiceOut = function SEnregistrerServiceOut() {
    _classCallCheck(this, SEnregistrerServiceOut);
};

exports.SEnregistrerServiceOut = SEnregistrerServiceOut;

var SEnregistrerService = function (_bacasable_1$WebServi2) {
    _inherits(SEnregistrerService, _bacasable_1$WebServi2);

    function SEnregistrerService() {
        _classCallCheck(this, SEnregistrerService);

        return _possibleConstructorReturn(this, (SEnregistrerService.__proto__ || Object.getPrototypeOf(SEnregistrerService)).apply(this, arguments));
    }

    return SEnregistrerService;
}(bacasable_1.WebService);

exports.SEnregistrerService = SEnregistrerService;

var SeConnecterServiceIn = function SeConnecterServiceIn() {
    _classCallCheck(this, SeConnecterServiceIn);
};

exports.SeConnecterServiceIn = SeConnecterServiceIn;

var SeConnecterServiceOut = function SeConnecterServiceOut() {
    _classCallCheck(this, SeConnecterServiceOut);
};

exports.SeConnecterServiceOut = SeConnecterServiceOut;

var SeConnecterService = function (_bacasable_1$WebServi3) {
    _inherits(SeConnecterService, _bacasable_1$WebServi3);

    function SeConnecterService() {
        _classCallCheck(this, SeConnecterService);

        return _possibleConstructorReturn(this, (SeConnecterService.__proto__ || Object.getPrototypeOf(SeConnecterService)).apply(this, arguments));
    }

    return SeConnecterService;
}(bacasable_1.WebService);

exports.SeConnecterService = SeConnecterService;

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};

var Kernel = function Kernel() {
    _classCallCheck(this, Kernel);
};

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
function AppelerWebServiceAsync(w, t) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt("return", Kernel.applicationClient.AppelerWebServiceAsync(w, t));

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
}
exports.AppelerWebServiceAsync = AppelerWebServiceAsync;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var kernel_1 = __webpack_require__(61);

var NavigateurBacASable = function () {
    function NavigateurBacASable() {
        _classCallCheck(this, NavigateurBacASable);
    }

    _createClass(NavigateurBacASable, [{
        key: "setInternet",
        value: function setInternet(internet) {
            this.internet = internet;
        }
    }, {
        key: "charger",
        value: function charger(applicationClient) {
            this.applicationClient = applicationClient;
            this.applicationClient.onload(this);
        }
    }, {
        key: "suivreLien",
        value: function suivreLien(lien) {
            this._location = lien.url;
            var page = new lien.create();
            return page;
        }
    }, {
        key: "suivre",
        value: function suivre(redirection) {
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

    }, {
        key: "changerAdresse",
        value: function changerAdresse(_url) {
            this._location = _url;
        }
    }, {
        key: "location",
        value: function location() {
            return this._location;
        }
    }, {
        key: "setlocation",
        value: function setlocation(location) {
            this._location = location;
        }
    }, {
        key: "appelerWebService",
        value: function appelerWebService(url, parameters, succes) {
            return this.internet.envoyer(url, parameters, succes);
        }
    }, {
        key: "appelerWebServiceAsync",
        value: function appelerWebServiceAsync(url, parameters) {
            return this.internet.envoyerAsync(url, parameters);
        }
    }]);

    return NavigateurBacASable;
}();

exports.NavigateurBacASable = NavigateurBacASable;

var ServeurBacASable = function () {
    function ServeurBacASable() {
        _classCallCheck(this, ServeurBacASable);
    }

    _createClass(ServeurBacASable, [{
        key: "setInternet",
        value: function setInternet(internet) {
            this.internet = internet;
        }
    }, {
        key: "charger",
        value: function charger(applicationServeur) {
            this.applicationServeur = applicationServeur;
        }
    }, {
        key: "recevoir",
        value: function recevoir(url, parameters) {
            return this.applicationServeur.recevoir(url, parameters);
        }
    }, {
        key: "recevoirAsync",
        value: function recevoirAsync(url, parameters) {
            return this.applicationServeur.recevoir(url, parameters);
        }
    }]);

    return ServeurBacASable;
}();

var ApplicationServeur = function () {
    function ApplicationServeur() {
        _classCallCheck(this, ApplicationServeur);
    }

    _createClass(ApplicationServeur, [{
        key: "init",
        value: function init(routeurServeur, injectionServeur) {
            this.routeurServeur = routeurServeur;
            this.injectionServeur = injectionServeur;
        }
    }, {
        key: "recevoir",
        value: function recevoir(url, parameters) {
            // identifier le webservice en fonction de l'url
            var typeService = this.routeurServeur.trouverType(url);
            var instanceConcrete = this.injectionServeur.instancier(typeService);
            return instanceConcrete.executer(parameters);
        }
    }]);

    return ApplicationServeur;
}();

exports.ApplicationServeur = ApplicationServeur;

var Implementations = function () {
    function Implementations() {
        _classCallCheck(this, Implementations);

        this.items = [];
    }

    _createClass(Implementations, [{
        key: "ajouterImplementation",
        value: function ajouterImplementation(u, t) {
            this.items.push({
                typeBase: u,
                typeConcret: t
            });
        }
    }, {
        key: "instancier",
        value: function instancier(typeBase) {
            var found = this.items.find(function (i) {
                return i.typeBase == typeBase;
            });
            return new found.typeConcret();
        }
    }, {
        key: "instancier2",
        value: function instancier2(u) {
            var found = this.items.find(function (i) {
                return i.typeBase == u;
            });
            return new found.typeConcret();
        }
    }]);

    return Implementations;
}();

exports.Implementations = Implementations;

var ItemImplementations = function ItemImplementations() {
    _classCallCheck(this, ItemImplementations);
};

exports.ItemImplementations = ItemImplementations;

var InternetBacASable = function () {
    function InternetBacASable() {
        _classCallCheck(this, InternetBacASable);
    }

    _createClass(InternetBacASable, [{
        key: "setServeur",
        value: function setServeur(serveur) {
            this.serveur = serveur;
        }
    }, {
        key: "envoyer",
        value: function envoyer(url, parameters, succes) {
            var reponse = this.serveur.recevoir(url, parameters);
            if (succes != null) succes(reponse);
        }
    }, {
        key: "envoyerAsync",
        value: function envoyerAsync(url, parameters) {
            return this.serveur.recevoirAsync(url, parameters);
        }
    }]);

    return InternetBacASable;
}();

var BacASable = function () {
    function BacASable() {
        _classCallCheck(this, BacASable);
    }

    _createClass(BacASable, [{
        key: "creer",
        value: function creer(applicationClient, applicationServeur) {
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
    }]);

    return BacASable;
}();

exports.BacASable = BacASable;

var WebService = function () {
    function WebService() {
        _classCallCheck(this, WebService);
    }

    _createClass(WebService, [{
        key: "executer",
        value: function executer(t) {
            throw '_';
        }
    }]);

    return WebService;
}();

exports.WebService = WebService;

var ApplicationClient = function () {
    function ApplicationClient() {
        _classCallCheck(this, ApplicationClient);
    }

    _createClass(ApplicationClient, [{
        key: "init",
        value: function init(routeurClient, routeurServeur) {
            this.routeurClient = routeurClient;
            this.routeurServeur = routeurServeur;
        }
    }, {
        key: "onload",
        value: function onload(navigateur) {
            this.navigateur = navigateur;
            var location = navigateur.location();
            if (location != undefined) this.page = this.routeurClient.instancier(location);
        }
    }, {
        key: "LienVers",
        value: function LienVers(c) {
            return this.routeurClient.obtenirLien(c);
        }
    }, {
        key: "RedirigerVers",
        value: function RedirigerVers(c) {
            var lien = this.routeurClient.obtenirRedirection(c);
            this.navigateur.setlocation(lien.url);
            return lien;
        }
    }, {
        key: "RedirigerVers2",
        value: function RedirigerVers2(c, parametres) {
            var lien = this.routeurClient.obtenirLien(c);
            this.navigateur.setlocation(lien.url);
            return lien;
        }
    }, {
        key: "AppelerWebService",
        value: function AppelerWebService(w, t, succes) {
            var lien = this.routeurServeur.obtenirLien(w);
            this.navigateur.appelerWebService(lien.url, t, succes);
        }
    }, {
        key: "AppelerWebServiceAsync",
        value: function AppelerWebServiceAsync(w, t) {
            var lien = this.routeurServeur.obtenirLien(w);
            return this.navigateur.appelerWebServiceAsync(lien.url, t);
        }
    }]);

    return ApplicationClient;
}();

exports.ApplicationClient = ApplicationClient;

var Lanceur = function () {
    function Lanceur(classe) {
        _classCallCheck(this, Lanceur);

        this.classe = classe;
    }

    _createClass(Lanceur, [{
        key: "lancer",
        value: function lancer() {
            this.navigateur = new NavigateurReel();
            this.applicationClient = new this.classe();
            kernel_1.Kernel.navigateur = this.navigateur;
            kernel_1.Kernel.applicationClient = this.applicationClient;
            this.applicationClient.onload(this.navigateur);
        }
    }]);

    return Lanceur;
}();

exports.Lanceur = Lanceur;
function timeout(ms) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
    });
}

var NavigateurReel = function () {
    function NavigateurReel() {
        _classCallCheck(this, NavigateurReel);
    }

    _createClass(NavigateurReel, [{
        key: "location",
        value: function location() {
            return window.location.pathname;
        }
    }, {
        key: "setlocation",
        value: function setlocation(_url) {
            window.location.pathname = _url;
        }
    }, {
        key: "appelerWebService",
        value: function appelerWebService(url, parameters, succes) {
            var req = new XMLHttpRequest();
            req.open('GET', 'http://www.mozilla.org/', true);
            req.onreadystatechange = function (aEvt) {
                if (req.readyState == 4) {
                    if (req.status == 200) succes(req.responseText);else alert("Erreur pendant le chargement de la page.\n");
                }
            };
            req.send(null);
        }
    }, {
        key: "appelerWebServiceAsync",
        value: function appelerWebServiceAsync(url, parameters) {
            console.log('appelerWebServiceAsync');
            return new Promise(function (_resolve, _reject) {
                var req = new XMLHttpRequest();
                req.open('POST', 'http://www.mozilla.org/', true);
                req.onreadystatechange = function (aEvt) {
                    if (req.readyState == 4) {
                        if (req.status == 200) {
                            console.log('resolve');
                            _resolve(req.responseText);
                        } else {
                            console.log('reject');
                            _reject("Erreur pendant le chargement de la page.\n");
                        }
                    }
                };
                req.send(null);
            });
        }
    }]);

    return NavigateurReel;
}();

exports.NavigateurReel = NavigateurReel;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Lien = function Lien() {
    _classCallCheck(this, Lien);
};

exports.Lien = Lien;

var Redirection = function Redirection() {
    _classCallCheck(this, Redirection);
};

exports.Redirection = Redirection;

var Routeur = function () {
    function Routeur() {
        _classCallCheck(this, Routeur);

        //ajouterRouteParamétrée<T extends IRoutable<U>, U>(route:string, c: new ()=>T, mapping:any)
        this.routes = [];
    }

    _createClass(Routeur, [{
        key: "ajouterRouteParam\xE9tr\xE9e",
        value: function ajouterRouteParamTrE(route, c, mapping) {
            this.routes.push(new RouteParamétrée(route, c, mapping));
        }
    }, {
        key: "ajouterRoute",
        value: function ajouterRoute(route, c) {
            this.routes.push(new RouteParamétrée(route, c, null));
        }
    }, {
        key: "obtenirLien",
        value: function obtenirLien(c) {
            var found = this.routes.find(function (r) {
                return r.pageConstructor == c;
            });
            if (found == null) throw "Exception Obtenir Lien : " + c + " non trouvé";
            var lien = new Lien();
            lien.create = c;
            lien.url = found.url;
            return lien;
        }
    }, {
        key: "obtenirRedirection",
        value: function obtenirRedirection(c) {
            var found = this.routes.find(function (r) {
                return r.pageConstructor == c;
            });
            if (found == null) throw "Exception Obtenir Redirection : " + c + " non trouvé";
            var lien = new Redirection();
            lien.create = c;
            lien.url = found.url;
            return lien;
        }
    }, {
        key: "instancier",
        value: function instancier(_url) {
            var found = this.routes.find(function (r) {
                return r.url == _url;
            });
            if (found == null) throw "Exception Route non trouvée : " + _url;
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
    }, {
        key: "trouverType",
        value: function trouverType(_url) {
            var found = this.routes.find(function (r) {
                return r.url == _url;
            });
            return found.pageConstructor;
        }
    }]);

    return Routeur;
}();

exports.Routeur = Routeur;

var RouteParamétrée = function RouteParamétrée(url, pageConstructor, query) {
    _classCallCheck(this, RouteParamétrée);

    this.url = url;
    this.pageConstructor = pageConstructor;
    this.query = query;
};

exports.RouteParamétrée = RouteParamétrée;

/***/ })

/******/ });