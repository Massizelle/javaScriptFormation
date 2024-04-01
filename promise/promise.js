let x=1 
const promise = new Promise( (resolve , reject)=>{
    if(x==0){
        resolve("ok") 
    }else{
        reject("failed")
    }
})
promise.then((value)=>{
    console.log(value)
}).then(()=>{
    console.log("c'est réussi")
})
//get users
const baseUrl = "https://jsonplaceholder.typicode.com " // from json placeholder website
const getusers=()=>{
    fetch(`${baseUrl}/users`)
    .then((result)=>{
        return result.json()
    })
    .then((data)=>{
        console.log(data)
    })
    // gestion d'exception
    .catch(
        (error)=>{
            console.log(error.message)
        })
}
getusers()
const url = "https://api.thecatapi.com/v1/images/search"
const apiKey = "live_2qTaXaGpNtVGPAdo5aNbvXNcIFIFY1HAZpbB8qQQ4vnr77mnRwyi1giNfMY2RNa8"
const getDogImg=()=>{
    fetch(`${url}`)
    .then((resultt)=>{
        // return resultt.json()
      if(!resultt.ok){
        throw new Error("http error")
      }
      return resultt.json()
    })
    .then((dataa)=>{
        console.log(dataa[0].url)
        document.write(dataa[0].url)
    })
}
    getDogImg()
