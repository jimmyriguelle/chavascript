// le juste prix
let tried = 0;
let min = 20;
let max = 80;

function random () {
    var number = Math.round(Math.random()*(max - min) + min);
    return number;
    }

let memo = random();
console.log(memo);

function test(){
    tried++;
    let tries = prompt('Enter a number between 20 and 80 : ');
    console.log(tries);
    
if (tries < memo) {
    window.alert("C'est plus!");
    test();
    }
    else if (tries > memo) {
    window.alert("C'est moins!");
    test();
    }
    else if (tries == memo) {
    window.alert("C'est juste! Tu as trouvé en " + tried + " coups.");
    }
}

test();



