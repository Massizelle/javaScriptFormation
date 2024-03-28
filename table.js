let t=["banane", "pomme" , "cerise" , "fraise", "poire" , 4 ]
console.log(typeof t);
console.log(t.toString())
console.log(t.join(", "));
 const cars = new Array ( "mercedes" , "dacia" , "hunday")
 let voiture = cars.pop()
 console.log(cars , voiture);
 let fruits = t.push("kiwi")
console.log(t)
t[0]= "pomme"
console.log(t)
const women =[ "massizelle" , "amina" , "tesnim"]
const men = [ " abdnour" , "tarek"]
const mutiple = women.concat(men)
console.log(mutiple);

// for ( let i= 0 ; i<mutiple.length; i++){
//     console.log("Bonjour" , mutiple[i])
// }

let result = mutiple.forEach(function(item , index){
console.log("bonjour" , item , index)
}) //fonction de callback est une fonction qui n'a pas de nom et qu'on declare comme parametre d'une autre fonction

let resultat = mutiple.map( function(item){
return "bonjour "+item
})
console.log(resultat)