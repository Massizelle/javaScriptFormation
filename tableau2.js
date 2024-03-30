// function test (){ //var is the scoope function
// for(  var i =0  ; i <4 ;  i++) {
//     console.log(i)
// }
// console.log(i)
// }
// test()
// function test2 (){ //let , const are the scoope bloc
//     for(  let i =0  ; i <4 ;  i++) {
//         console.log(i)
//     }
//     console.log(i)
//     }
//     test2()
/*
creer une fonction format text qui a une chaine de car comme argument et effecue les opérations suivantes : 
1- remplace tous les espaces par des -
2- transorme toue la chaine en miniscule
3- supprime tous les car indésirables : exmp ( Hello,devs we are in 2024) => (hellodevs-we-are-in-)
indice : expréssions régulieres 
*/
function remplacee (chaine){
    chaine = chaine.replace(/ /g, '-');
    chaine = chaine.toLowerCase();
    chaine = chaine.replace(/[^a-z-]/g, '');
    return chaine;
}
let texte = "Hello, devs we are in 2024";
let resultat = remplacee(texte);
console.log(resultat);

let fruits = ["Bannane","Fraises","Cerises","Poires"]
const quelFruit = prompt("Vous desirez acheter quel fruit?");
let existe = false
let t=0
for ( let i in fruits){
    if ( quelFruit== fruits[i]){
        fruits[t]=""
        alert("il existe")
        existe = true
    }
} 
if ( existe == false){
document.writeln( " le fruit que vous avez choisi n'existe pas")
}
let i =0  
for ( i in fruits){
    document.write(fruits[i]+ "<br/>")
}


