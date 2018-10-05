console.log("je suis dans le profil");

// Etape 1 : recuperation de l'id

var url = window.location.href;

//je recupere les parametres
var params = (new URL(document.location)).searchParams;

// Je récupere juste la clé qu'il me faut
var cardId = params.get("cardId"); // is the string "Jonathan"

console.log("Ma carte est la carte %s", cardId);

// Etape II. remonter la carte coorespondante - Interoger l'API, La DB,Etc

const req = new XMLHttpRequest();
var urlToGet = 'https://api.pokemontcg.io/v1/cards/' + cardId;
// alert(urlToGet);
req.open('GET', urlToGet , false);

req.send(null);

if (req.status === 200) {
    // console.log("Réponse reçue: %s", req.responseText --> string);
    // console.log(req);
    // console.log(typeof req.responseText);
    // transformer une chaine en json
    var response = JSON.parse(req.responseText);
    var monPokemon = response.card;

    console.log(monPokemon);

} else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
}


var cont = document.getElementById("container");

var titre = document.createElement("h1");
titre.innerHTML = monPokemon.name;
var img = document.createElement("img");
img.src= monPokemon.imageUrlHiRes;

cont.appendChild(titre);
cont.appendChild(img);
