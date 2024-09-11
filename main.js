//Fonctions de manipulation de chaînes :
//Inverser une chaîne : Écrivez une fonction qui inverse une chaîne donnée.

const InverseString = (a) => {

    // diviser la chaine en un tableau de caractère
    var diviseCaractere = a.split('');
    
    // renverser les éléments du tableau
    var renverseCaractere = diviseCaractere.reverse();

    // joindre les éléments du tableau en une nouvelle chaine
    var motInverse = renverseCaractere.join('')

    // affiche le mot inversé
    console.log(motInverse);
}
/*
var a = prompt("Entrez un mot svp !");
InverseString(a); 
*/


//Compter les caractères : créez une fonction qui compte le nombre de caractères d’une chaîne.

const AfficheCaractere = (c) => {
    // transformons notre mot en un tableau de caracteres
    var motSepare = c.split('');
    
    // créeons une boucle pour parcourir et afficher le nombre de caractere
    
    for( let i=0; i <= motSepare.length ; i++) {

        console.log(motSepare[i] + " est à la position : "+ i ); 
        
    }
    //Affichons le nombre de caractère
    console.log(" le nombre de caractere est : " + motSepare.length);
}

//AfficheCaractere("eric")

//Mettre les mots en majuscule : Implémentez une fonction qui met en majuscule la première lettre de chaque mot d’une phrase.

const AffichePremiereLettreMajuscule = (p) => {
    // mot séparé en carctère
    var tabCaractere = p.split('');

    // parcouris le tableau de carctere avec for

    for (let i=0 ;i <= tabCaractere.length; i++){

        if( i === 0){
           var lettreMajuscule=  tabCaractere[i].toUpperCase(); 
           
        }
        var motColle= tabCaractere.join('');
        console.log(lettreMajuscule + motColle);
    }
}

//AffichePremiereLettreMajuscule("eric")

//Fonctions du tableau 
// Trouver le maximum et le minimum : Écrivez des fonctions pour trouver les valeurs maximum et minimum dans un tableau de nombres.


const MaxAndMin = (a,b) => {
    var max = Math.max( a, b);
    var min = Math.min( a, b);
    console.log("la valeur maximun est : "+ max);
    console.log("la valeur minimun est : "+ min)
}

//MaxAndMin(5,8);

// Somme du tableau : créez une fonction qui calcule la somme de tous les éléments d’un tableau.

function sommeTableau(tableau) {
    // Initialise la somme à 0
    let somme = 0;
    
    // Parcourt chaque élément du tableau et l'ajoute à la somme
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    
    return somme;
}

// Exemple d'utilisation
const tableau = [1, 2, 3, 4, 5];
const resultat = sommeTableau(tableau);
//console.log(`La somme des éléments du tableau est : ${resultat}`);

//

//Filter Array : implémentez une fonction qui filtre les éléments d’un tableau en fonction d’une condition donnée.

function factorielle(n) {
    // Vérifie si n est égal à 0 ou 1, car la factorielle de 0 ou 1 est 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Appel récursif pour calculer la factorielle
    return n * factorielle(n - 1);
}

// Exemple d'utilisation
const nombre = 5;
const resultat = factorielle(nombre);
//console.log(`La factorielle de ${nombre} est : ${resultat}`);

//Vérification des nombres premiers : Créez une fonction pour vérifier si un nombre est premier ou non.
function estPremier(n) {
    // Vérifie si n est inférieur ou égal à 1, car les nombres premiers sont supérieurs à 1
    if (n <= 1) {
        return false;
    }
    
    // Vérifie les diviseurs possibles de 2 à la racine carrée de n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        // Si n est divisible par i, alors n n'est pas premier
        if (n % i === 0) {
            return false;
        }
    }

    // Si aucun diviseur n'est trouvé, n est premier
    return true;
}

// Exemple d'utilisation
const nombre = 29;
const resultat = estPremier(nombre);
//console.log(`${nombre} est${resultat ? "" : " pas"} un nombre premier.`);


//Séquence de Fibonacci : Implémentez une fonction pour générer la suite de Fibonacci jusqu’à un nombre donné de termes. (recherche sur le net )
function generateFibonacci(n) {
    let a = 0, b = 1;
    console.log(a); // Affiche le premier terme
    for (let i = 1; i < n; i++) {
      console.log(b); // Affiche le terme suivant
      [a, b] = [b, a + b]; // Mise à jour des valeurs pour le prochain terme
    }
  }
  
 // generateFibonacci(10); // Génère les 10 premiers termes de la suite de Fibonacci
  