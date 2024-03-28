var chaine = "bonjour"
// reverse chaine
function inverse (){
    return (chaine.split("").reverse().join(""))
    // split convertir une chaine de car en un tab
    //  reverse c pour inverser un tab 
    // join c pour convertir un tab en une chaine de car
}
console.log(inverse())
function supp (str){
    let result = ""
    for(var i=0 ; i<=str.length-1 ; i++ ){
        if ( str[i] !== " "){
            result+= str[i] // result = result + str[i]
        }
    }
    return result 
}
console.log( supp("mass iz elle"))
var myString = "java c# ruby"
console.table( myString )
console.log("2"== 2)
console.log("2" === 2 )
console.log(myString.charAt(2)) // il recupere l'élément a l'index n+1 dans ce cas 3 
console.log(myString.slice(2))// couper à partir de l'index n+1 
console.log(myString.slice(2, 6))// il affiche les car entre 2 et 6
console.log(myString.slice(-2))// quand l'index est negatif il coupe à partir de l'index n ( il commence de -1  X 0 comme le cas pditif )
var hello = "     hello      world      "
console.log(hello.trim())// supp les vides début + fin 
// ES6 Ecma script 6 ( 2015)
function test(){ // var is the scoope function
    for(var i=0 ; i<4 ; i++){
        console.log(i)
    }
    console.log(i)
}
test()
function test1(){  // let is the scoope bloc
    for(let i=0 ; i<4 ; i++){
        console.log(i)
    }
    console.log(i)
}
test1()
