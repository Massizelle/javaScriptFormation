// let t=["banane", "pomme" , "cerise" , "fraise", "poire" , 4 ]
// console.log(typeof t);
// console.log(t.toString())
// console.log(t.join(", "));
//  const cars = new Array ( "mercedes" , "dacia" , "hunday")
//  let voiture = cars.pop()
//  console.log(cars , voiture);
//  let fruits = t.push("kiwi")
// console.log(t)
// t[0]= "pomme"
// console.log(t)
// const women =[ "massizelle" , "amina" , "tesnim"]
// const men = [ " abdnour" , "tarek"]
// const mutiple = women.concat(men)
// console.log(mutiple);

// // for ( let i= 0 ; i<mutiple.length; i++){
// //     console.log("Bonjour" , mutiple[i])
// // }

// let result = mutiple.forEach(function(item , index){
// console.log("bonjour" , item , index)
// }) //fonction de callback est une fonction qui n'a pas de nom et qu'on declare comme parametre d'une autre fonction

// let resultat = mutiple.map( function(item){
// return "bonjour "+item
// })
// console.log(resultat)
/* fonction qui prend en param un tab de nmbr entier et qui retourne uniquement les nombres paires */
let nombre = [ 21, 11 , 2003 , 2024 , 3 , 28]
let rslt = nombre.map( function(item){
    if ( item % 2 == 0 ){
        return item
    }
    return
})
console.log(rslt)
let tab=[35, "bonjour" , "nom"  , 456666]
tab.splice(2,2,"gateau","plat") 
//1er para : à partir de quel index , 2eme para : combien d'elem a supp 3,4 : élem a ajouter
console.log(tab)
// tab.toSpliced() pour garder la tab originale et de manipuler une copie
console.log(tab.slice(2))
console.log(tab.slice(1,3))