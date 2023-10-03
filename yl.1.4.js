const readline=require('readline').createInterface({
	input: process.stdin,
	output: process.stdin,
});

readline.question('Sisestage oma nimi:' nimi =>{
	readline.question('Sisestage lubatud kiirus (km/h)', lubatudkiir =>{
		readline.question('Sisestage tegelik kiirus (km/h)', tegelikkiir =>{
			let trahv=(Number(tegelikkiir)-Number(lubatudkiir))*3;
			let tegelikTrahv=Math.min(190, trahv);
			console.log(nimi+',kiiruse ülatamine eest on teie trahv'+ tegelikTrahv+'eurot.')
			readline.close();
		})
	});
});
