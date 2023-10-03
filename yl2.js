const readline=require('readline').createInterface({
	input: process.stdin,
	output: process.stdin,
});
readline.question('Sisestage õhutemperatuur:',õhutemperatuur=>{
	let temperatuur=parseFloat(õhutemperatuur);
    
    if (temperatuur <= 4.0) {
       console.log("On jäätumise oht");
    } else {
       console.log("Ei ole jäätumise ohtu");
    }

    readline.close();
 
});
