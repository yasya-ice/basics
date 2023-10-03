const readline=require('readline').createInterface({
	input: process.stdin,
	output: process.stdin,
});

readline.question('Sisestage oma nimi:' nimi =>{
	readline.question('Sisestage lubatud kiirus (km/h)', lubatudkiir =>{
		readline.question('Sisestage tegelik kiirus (km/h)', tegelikkiir =>{
			let yletatud=parseInt(tegelikkiir)- parseInt(lubatudkiir);
			let arvTrahv=yletatud*3.0;
			let tegelikTrahv=Math.min(180, arvTrahv);
			console.log(nimi+',kiiruse ülatamine eest on teie trahv'+ tegelikTrahv+'eurot.')
			readline.close();
		})
	});
});
