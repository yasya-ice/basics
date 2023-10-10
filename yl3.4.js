const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let apples=14

readline.question("Mitu poialpoissi tahab ounu?", gnomes=>{
 for(let g=1;  g<=gnomes; g++){
  let applesForGnomes = (Math.ceil(Math.random()*2))
  console.log(applesForGnomes);
  apples=apples-applesForGnomes
 }
 console.log("Lumivalgekesele jai " + apples)
 readline.close()
})
