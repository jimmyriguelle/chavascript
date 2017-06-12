// Exercice : PNJ

let character = {
    "name": "jim",
    "age": 16,
    "items": ["sword","shield","weapon"],
    /* "giveItem2": function(){
      for (let key in character) {
    console.log(key) // pour acceder au clé
    console.log(typeof key) // pour acceder au clé
    console.log(character[key]);   
     } */
    giveItem: function(){
                console.log(this.items[Math.round(Math.random() * 2)]);  
    }
   }; 
    
character.giveItem();


// Exercice : Shop

let ToSell = {
    "title": "titre",
    "physic": 50,
    "magic": 100,
    "minLevel": 200,
    "available": true,
    "show": function(){
        console.log(this);
    }
};

let epee = Object.create(ToSell);
epee.title = "epee";
epee.physic = 40;
epee.magic = 600;
epee.minLevel = 900;
epee.available = true;

let hache = Object.create(ToSell);
hache.title = "hache";
hache.physic = 10;
hache.magic = 600;
hache.minLevel = 10;
hache.available = false;

let septre = Object.create(ToSell);
septre.title = "septre";
septre.physic = 10;
septre.magic = 900;
septre.minLevel = 10;
septre.available = true;


let objectsToSale = [epee,hache,septre];

function objects(){
    for(let i = 0; i < objectsToSale.length; i++ ){
        objectsToSale[i].show();
    }
}

objects();

function availableObjects(){
    for(let i = 0; i < objectsToSale.length; i++ ){
        if(objectsToSale[i].available == true){
            objectsToSale[i].show();
        }
    }
}

availableObjects();



// Exercice : mainCharacter

let excalibur = {
        "name": "powerful",
        "damage": 500,
    }

let mainCharacter = {
    "name": "Master",
    "life": 1000,
    "weapon": excalibur,
    "attack": function totalDestroy(){
    console.log(master + " strike with " + weapon )
        (le nom du personnage) attaque avec l'arme (nom de l'arme)
        
    }
    
}

attack();

Appeler la fonction "attack" du personnage
la fonction doit retourner :  les dégâts sont (niveau du personnage multiplié par le damage de l'arme)



// Exercice : Adversaire

 

// demo teddy

let Dan = [17, "Femme", ["simple red","Kim","Lopez"]];

let couleur =  "roux";
let Danette = {
    "name" : "Danette",
    "age" : 17,
    "sexe" : "Femme",
    "musiques" : ["simple","Kim","Lopez"],
    "cheveux" : couleur,
    parle : function(){
        console.log("Bonjour je suis " + this.name );
    }
};

let jayce = Object.create(Danette);
    jayce.name = "Jayce";
    jayce.age = 10;

Danette.parle(); 
jayce.parle(); 

console.log( Danette );
console.log( jayce );*/