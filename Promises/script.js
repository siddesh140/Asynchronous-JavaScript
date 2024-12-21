const resolve = document.querySelector("#press")
const declined = document.querySelector("#press1")
const p = new Promise((resolved, reject) => {
    resolve.addEventListener("click", () => {
        resolved('Promise Resolved')
    });
    declined.addEventListener("click", () => {
        reject('Promise Rejected')
    });
})

p.
then(()=>{
    console.log("yes its done");
    
})
.catch(()=>{
    console.log("Its Rejected");
    
})


