const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Taringute arv: " , numbers=>{
  for(let n=1;  n<=numbers; n++){
    console.log(Math.ceil(Math.random()*6))
  }
  readline.close();
})
