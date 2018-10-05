function showpokemon(event){
console.log(event.currentTarget);
window.location.href='./card.html?cardId='+ event.currentTarget.id;
}



const req = new XMLHttpRequest();
req.open('GET', 'https://api.pokemontcg.io/v1/cards?supertype=pokemon', false);
req.send(null);

var liste = JSON.parse(req.responseText); // transforme le json en text html




liste.cards.forEach(function(element, index){
    var tr = document.createElement("tr"); // je crée l'element tr
    var tdname = document.createElement('td');
    var tdtype = document.createElement('td');
    var tdnum = document.createElement('td');
    var tdimg = document.createElement('td');
    var img = document.createElement('img');
    tdname.setAttribute('class','name');

    img.setAttribute('src', element.imageUrl); // sert a mettre un attribut ( class,id,...)
    img.setAttribute('width',128);


    tdname.innerHTML = element.name; // remplis ce qu'il y a dans les balises
    tdtype.innerHTML = element.types.toString();
    tdnum.innerHTML = element.nationalPokedexNumber;

    tr.appendChild(tdname); //affiche td dans la balise Tr
    tr.appendChild(tdtype);
    tr.appendChild(tdnum);
    tr.appendChild(tdimg);
    tdimg.appendChild(img);
    tr.setAttribute('id', element.id);

    // click
    tr.addEventListener("click", showpokemon, false);


    var container_cards = document.getElementById('container_cards'); // va recupere id = "container_cards" et va mettre tr a l'interieur
    container_cards.appendChild(tr);
});

var monkeyList = new List('hacker-list', {
    valueNames: ['name'],
    page: 10,
    pagination: true
});



