// Real life example of Promise

const p = new Promise((resolved,reject)=>{
    setTimeout(()=>{
     const success = Math.random() > 0.5 ;
     if (success) {
         resolved("it is less than 0.5")
     }else{
         reject("it is unsuccessful")
     }
    });
 })
 p.then(()=>{
 console.log('it is resolved');
 })
 .catch(()=>{
     console.log("it is rejected");
     
 })
 