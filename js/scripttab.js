const ages=[20 , 32  , 105 , 3 , 56 , 2]
let result = ages.filter( function(item){
    return item>18
})
console.log(result);
document.writeln(result)
let somme = ages.reduce(function(total , value){
return total + value
})
document.writeln(somme)
 let majeur = ages.every(function(value , index , array){
    return value>1
 })
 console.log(majeur);
 let names = [ "amina" , "massizelle"]
 let names2 = [ ...names] //destructuring
 names2.push("tesnim")
 console.log(names , "names" )
 console.log(names2 , "names2" )