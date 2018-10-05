console.log("login.html");

var monClic = function() {
    console.log('je clic sur le bouton');

    var input = document.getElementById("com");
    var monCommentaire = input.value;

    console.log(monCommentaire);

    var monComm = {};
    monComm.commentaire = monCommentaire;

    var xhr = new XMLHttpRequest();

    xhr.open("POST", '/api/login', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/json");

    console.log(monComm);

    xhr.onreadystatechange = function() { //Call a function when the state changes.
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            // Request finished. Do processing here.
            console.log("la requête est bien passée");
            input.value = "";
        }
    };

    xhr.send(JSON.stringify(monComm));

};