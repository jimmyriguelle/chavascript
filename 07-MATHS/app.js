// Exercice : Minimum et maximum
var smallNumber = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
console.log(smallNumber);

var bigNumber = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(bigNumber);

var addition = smallNumber + bigNumber;
console.log(addition);

// Exercice : Aléatoire
var floatBoat = 10.4;
var downBoat = Math.floor(floatBoat);
var flyBoat = Math.ceil(floatBoat);

console.log(downBoat);
console.log(flyBoat);

// Exercice : Aléatoire 2

var first = Math.random() * 50 + 50;
var second = Math.round(Math.random());
var third = Math.round(Math.random() * 10);

console.log(first);
console.log(second);
console.log(third);