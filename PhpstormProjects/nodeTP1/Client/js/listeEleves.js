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

console.log(eleves);
console.log(elevesTxt);



var ul = document.createElement("ul");

function showProfile(event){
    console.log(event.target.textContent);
    console.log(event.target.id);
    window.location.href = './profil.html?id=' + event.target.id;
}

eleves.forEach(function(element, index){
    console.log(element);
    var li = document.createElement("li");
    li.innerHTML = element.nom.toUpperCase() + ' ' + element.prenom;
    li.setAttribute("id", index);

    // li.setAttribute("mabalise", element.nom.toUpperCase() + ' ' + element.prenom);

    li.addEventListener("click", showProfile, false);
    ul.appendChild(li);

});

document.getElementById("Container").appendChild(ul);