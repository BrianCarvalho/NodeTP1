var express = require('express');
var listeeleves = require('./liste.json');
var myExport = require('./data/Liste.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Eleves = require('./models/schema_eleves');
var app = express();

// mongodb
mongoose.connect('mongodb://localhost:27017/nodeTP1', { useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('db connected !');

});

/*listeeleves.forEach(function(item){
    console.log(item);
    var nvEleve = new Eleves(item);
    nvEleve.save().then(() => console.log('eleve ajouté!'));
});*/

// je déclare mes fichiers statiques
app.use('/js', express.static('./Client/js'));
app.use('/css', express.static('./Client/css'));

// je configure mon body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes


app.get('/', function (req, res) {
   res.sendFile(__dirname + '/Client/index.html')
});

app.get('/card.html', function (req, res) {
    res.sendFile(__dirname + '/Client/card.html')
});

app.get('/eleves', function (req, res) {
    res.sendFile(__dirname + '/Client/eleves.html')
});

app.get('/dbeleves', function (req, res) {
   Eleves.find({},function (err, docs)
    {
        if (err)
            return console.log('error');
            res.send(docs);
    })
});

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/Client/login.html')
});

app.post('/api/login', function (req, res) {
    res.sendStatus(200);
    console.log(req.body);
    console.log('OK');
});

app.get('/api/export', function (req, res) {
	res.json(myExport);
});

app.get('/profil.html', function (req, res) {
	res.sendFile(__dirname + '/Client/profil.html')
});

app.get('/ajouter', function(req, res){
    res.sendFile(__dirname + '/Client/ajouter.html')
});

app.post('/ajouter', function (req , res) {

    var neweleve = new Eleves (req.body);
    neweleve.save();
    res.redirect('/eleves');

});

app.listen(8080, function () {
	console.log('serveur lancé');
});



