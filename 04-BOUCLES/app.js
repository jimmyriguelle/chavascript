// Exercice : Pair et impair
     for (var i = 0; i <= 20; i++) {

            if (i === 0) {
                    console.log(i + " est un nombre paire");
            }
            else if (i % 2 === 0) {
                    console.log(i + " est un nombre paire");   
            }
            else {
                    console.log(i + " est un nombre impaire");
            }
        }
       




// Exercice : Multiplication Tables

    for(var i =0; i <= 10; i++){
        console.log(i + " fois 9 = " + i * 9);
    }
        

// Exercice : assigner des grades


function level(score){
    if(score > 90){
        console.log("Pour " + score + " points vous avez le grade A");
    }else if(score > 80){
        console.log("Pour " + score + " points vous avez le grade B");
    }else if(score > 70){
        console.log("Pour " + score + " points vous avez le grade C");
    }else if(score > 65){
        console.log("Pour " + score + " points vous avez le grade D");
    }else{
        console.log("Pour " + score + " points vous avez le grade F");
    }
}

for(var i = 0; i <= 100; i++){
    level(i);
}

// Exercice : pyramide
var result = "";
for(var i = 1; i < 6; i++){
    for(var j = 0; j < i; j++){
        result += "*";
    }
    console.log(result);
    result = "";
}
  

  