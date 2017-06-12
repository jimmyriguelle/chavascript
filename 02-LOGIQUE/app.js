var age = 29;
var birthday = 1988;
if(age < birthday){
    console.log("age plus petit")
}


// Exercice : Langues
var langFr = "fr";
var langEs = "es";
var langEn = "en";
var message = "";

if(langFr == "fr"){
    console.log("Bonjour tout le monde");
}
else if{ 
    console.log("Hello world");
}
else if{
    console.log("Hola, Mundo");
}

// Exercice : Affichage des scores dois etre verifié

var score = 65;
var result = "";

if(score >= 90){
    result = "A";
}
else if(score < 90){
    result = "B";
}
else if(score <= 50){
    result = "C";
}

console.log(result);


// Exercice : Mettre au pluriel

var word = "femme";
var number = 2;
var text = "";


if(number === 1){
    text = "je posséde " + number + " " + word;
}
else{
    text = "je posséde " + number + " " + word + "s";
}

console.log(text);

