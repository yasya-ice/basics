const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Sisestage mitu korda aratada: " , times =>{
  for (let time = 1; time <= times; time++){
    console.log("Touse ja sara!")
  }
  readline.close();
})
