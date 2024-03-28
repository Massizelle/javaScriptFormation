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