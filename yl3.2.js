const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Sisestage ringide arv:", circle=> {
 let sumofCarrots = 0
 for (let c=1; c<= circle; c++){
  if (c%2==0){
    sumofCarrots=sumofCarrots+c
   }
  }

console.log("Porgandite koguarv on "+ sumofCarrots)
  readline.close(); 
})
