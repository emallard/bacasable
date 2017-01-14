import express = require("express");
import path = require("path");
import favicon = require('serve-favicon');
import logger = require("morgan");
import bodyParser = require("body-parser");
import cookieParser = require('cookie-parser');
import exphbs  = require('express-handlebars');
import session = require('express-session');

import {AnnoncesApplicationServeur} from '../src/serveur/application'
import {AnnoncesApplicationClient} from '../src/client/application'

let app = express();

let appServeur = new AnnoncesApplicationServeur();
let appClient = new AnnoncesApplicationClient();

// enregistrement des routes client
appClient.routeurClient.routes.forEach(r => {
    app.get(r.url, function (req, res) {
        res.render('home.hbs');
    });
})

// enregistrement des routes serveur
appServeur.routeurServeur.routes.forEach(r => {
    app.post(r.url, function (req, res) {
        var service = new r.pageConstructor();
        res.send(service.executer(req.body));
    });
})

// view engine setup

app.engine('handlebars', exphbs({})); //defaultLayout: 'main'
app.set('view engine', 'handlebars');
app.set("views", path.join(__dirname, "..", "..", "node", "views"));

/*
app.set("view engine", "hbs");
*/
if (app.get("env") === "development") {
    app.use(logger("dev"));
}

app.use(session({
  secret: 'lkdsnkvjdnsbkjbsvdqkvbkjbkjbpo',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, "..", "..", "node", "public")));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Routes
app.get('/', function (req, res) {
    res.render('home.hbs');
});
//
// --------------------------------
//
// error handlers

app.use(function(req, res, next) {
    let err = <any>new Error("Not Found");
    err["status"] = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        //console.log(err.stack);

        console.log(err.message);
        console.log(err);
        
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        res.status(err.status || 500);
        res.render("error.hbs", {
            message: err.message,
            error: err
        });
        
    });
}


// production error handler
// no stacktraces leaked to user
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.render("error.hbs", {
        message: err.message,
        error: {}
    });
});

export = app;