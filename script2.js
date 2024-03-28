function test (){ //var is the scoope function
for(  var i =0  ; i <4 ;  i++) {
    console.log(i)
}
console.log(i)
}
test()
function test2 (){ //let , const are the scoope bloc
    for(  let i =0  ; i <4 ;  i++) {
        console.log(i)
    }
    console.log(i)
    }
    test2()
/*
creer une fonction format text qui a une chaine de car comme argument et effecue les opérations suivantes : 
1- remplace tous les espaces par des -
2- transorme toue la chaine en miniscule
3- supprime tous les car indésirables : exmp ( Hello,devs we are in 2024) => (hellodevs-we-are-in-)
indice : expréssions régulieres 
*/
