const doWorkPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
        reject('Thigs went wrong')
        resolve([1,7,4])
    },2000)
})

doWorkPromise.then((result)=>{
    console.log("Success", result)
}).catch((error)=>{
    console.log(error)
})