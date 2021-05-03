//  lieux
class Lieux{
    constructor(nom, contenu, ingédients){
        this.nom = nom,
        this.contenu = [],
        this.ingredients = []
    }
}

let maison = new Lieux("maison", [], null);
let epicerie = new Lieux("epicerie", [], []);
let cuisine = new Lieux("cuisine", [], []);

console.log(maison);
console.log(epicerie, cuisine);


// ingrédients
class Ingredients{
    constructor(nom, etat, prix){
        this.nom = nom,
        this.etat = etat,
        this.prix = prix
    }
}

let poivron = new Ingredients("poivron", "entier", 1);
let oignon = new Ingredients("oignon", "entier", 2);
let oeuf = new Ingredients("oeuf", "entier", 4);
let epice = new Ingredients("epice", "moulu", 3.25);
let paprika = new Ingredients("paprika", "moulu", 1.5);
let fromage = new Ingredients("fromage", "coupé", 1.6);

console.log(poivron);
console.log(oignon, oeuf, epice, paprika, fromage);


//  personne
class Personne{
    constructor(nom, lieu, argent, panier){
        this.nom = nom,
        this.lieu = lieu,
        this.argent = argent,
        this.panier = panier
        this.se_deplacer = (x) => {
        },
        this.payer = (x) => {
        },
        this.couper = (x,y) => {
        }
    }
}

let maxime = new Personne("Maxime", "néant", 100, "");
console.log(maxime);