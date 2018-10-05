const req = new XMLHttpRequest();
req.open('GET', '/dbeleves', false);

req.send(null);

if (req.status === 200) {
    // console.log("Réponse reçue: %s", req.responseText --> string);
    console.log(req);
    console.log(typeof req.responseText);
    // transformer une chaine en json
    var eleves = JSON.parse(req.responseText);
    console.log(eleves);
    console.log(typeof eleves);
    // transformer un json en chaine
    var elevesTxt = JSON.stringify(eleves);
    console.log(elevesTxt);
    console.log(typeof elevesTxt)

} else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
}
var url = window.location.href;

var params = (new URL(document.location)).searchParams;

var info = params.get("id"); // is the string "Jonathan"

console.log(eleves[info]);

var goodEleve = eleves[info];
var nom = document.createElement("h3");
var age = document.createElement("h3");
var javascript = document.createElement("h3");
var fav_web = document.createElement("h3");
var fav_web_why = document.createElement("h3");
var fav_app = document.createElement("h3");
var fav_app_why = document.createElement("h3");
var before_ifa = document.createElement("h3");
var why_ifa = document.createElement("h3");
var contact_mail = document.createElement("h3");

nom.innerHTML = goodEleve.nom + ' ' + goodEleve.prenom;
age.innerHTML = goodEleve.age;
javascript.innerHTML = goodEleve.javascript;
fav_web.innerHTML = goodEleve.fav_web;
fav_web_why.innerHTML = goodEleve.fav_web_why;
fav_app.innerHTML = goodEleve.fav_app;
fav_app_why.innerHTML = goodEleve.fav_app_why;
before_ifa.innerHTML = goodEleve.before_ifa;
why_ifa.innerHTML = goodEleve.why_ifa;
contact_mail.innerHTML = goodEleve.contact_mail;

var cont = document.getElementById("container");
cont.appendChild(nom);
cont.appendChild(age);
cont.appendChild(javascript);
cont.appendChild(fav_web);
cont.appendChild(fav_web_why);
cont.appendChild(fav_app);
cont.appendChild(fav_app_why);
cont.appendChild(before_ifa);
cont.appendChild(why_ifa);
cont.appendChild(contact_mail);
