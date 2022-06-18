
    let promise1 = new Promise((resolved,rejected) => {
        let x = 0;
        setTimeout(() => {
            x = 0;
            
        }, 4000)
    
        setTimeout(() => {
            if (x === 0) {
                console.log(x);
                rejected();
            } else {
                resolved();
            }
        },3000)
        
    }) 


promise1.then(() => {
    console.log("resolved");
})

promise1.catch(() => {
    console.log("rejected");
})