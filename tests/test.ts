
import {TestRecherche} from '../src/tests/testRecherche';

import path = require("path");
import express = require("express");
import http = require("http");
import bodyParser = require("body-parser");

let app = express();
let server = http.createServer(app);
var io = require('socket.io')(server);

// Post data
app.use(bodyParser.urlencoded({
    extended: true
}));

// Fichiers
app.use(express.static(path.join(__dirname, "..", "..", "tests", "public")));
app.get('/', function(req, res){
    var file = path.join(__dirname, "..", "..", "tests", "public", "index.html")
    res.sendFile(file);
});

// Lancer un test
app.post('/lancer', function(req, res) {
    console.log(req.body);
    lancerTest();
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

server.listen(4000, function(){
  console.log('listening on *:4000');
});


async function lancerTest()
{
    var test = new TestRecherche();
    var bac = test.bacasable;
    bac.logSuivre = (url:string) => 
    {
        console.log('navigateur vers : ' + url);
        io.emit('chat message', 'navigateur vers : ' + url);
    };
    bac.logPage = (page:any) => 
    {
        console.log('navigateur change de page : ' + page.constructor.name);
        io.emit('chat message', 'navigateur change de page : ' + page.constructor.name);
    }

    bac.logAppel = (url, parameters) => 
    {
        console.log('appel vers : ' + url + JSON.stringify(parameters));
        io.emit('chat message', 'appel vers : ' + url + JSON.stringify(parameters));
    }

    bac.logReponse = (reponse, url, parameters) => 
    {
        console.log('reponse : ' + JSON.stringify(reponse));
        io.emit('chat message', 'réponse : ' + JSON.stringify(reponse));
    }
    await test.test();
}