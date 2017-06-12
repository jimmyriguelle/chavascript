var list = ["poires","pommes","fraises"];
console.log(list);
console.log(list[1]);
console.log(list.length);
console.log(list[list.length - 1]);

for(var i = 0; i < list.length; i++){
    console.log(list[i]);
}
list.pop // reitire le dernier element
list.push // ajoute un ellemetn a la fin
list.shift // retire le premeier element
list.unshift // ajoute un element au debut



// Exercice : addition

var listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var addition = 0;
for(var i = 0; i < listOfNumbers.length; i++){
    addition = addition + listOfNumbers[i];

}
console.log(addition);

// Exercice : Vos meilleurs choix
var text = ["premier ","deuxieme ", "troisieme "]
var listActor = ["stallon", "cruis", "Ford"];
for(var i = 0; i < listActor.length; i++){
    console.log("le " text[i] + " acteur est " listActor[i]);
    
}


// Exercice : clone
var myHero = ["Mario", "Luigi", "Peach"];
var myHero2 = myHero.slice();
myHero2.push("Bowser")
console.log(myHero2);

// OR

var marioArray = ['Mario', 'Luigi', 'Peach'];
var newBowserArray = [];

for (var i = 0; i < marioArray.length; i++) {
        newBowserArray.push(marioArray[i]);


}


bowserArray.push('Bowser');
console.log( marioArray );
console.log( newBowserArray );




