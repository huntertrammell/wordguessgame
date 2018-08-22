var trivArray = [
        "dogmeat", 
        "ghoul", 
        "pipboy", 
        "raider", 
        "jet", 
        "atom", 
        "vault", 
        "deathclaw", 
        "sanctuaryhills", 
        "prestongarvey"
    ];



document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);
}

var currentWord = trivArray[Math.floor(Math.random() * trivArray.length)];

    console.log(currentWord);

var tracker = ("<p>Word to Guess: </p>" + currentWord + "<p>Letters Guessed: </p>" + userGuess + "<p>lives Left: </p>");

document.getElementById = 

