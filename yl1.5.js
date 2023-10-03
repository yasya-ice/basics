const.readline=require('readline').createInterface({
	input: process.stdin,
	output: process.stdin,
});
readline.question('Sisestage ainepunktide arv:',aineArv =>{
	readline.question('Sisestage nädalate arv:', nädalArv =>{
		let.nädalAjakulu=parseInt( (aineArv*26)/ nädalArv);
		let.ümardatudAjakulu=Math.round(nädalAjakulu);
		console.log('Ühe nädala eeldatav ajakulu:'+ ümardatudAjakulu);
	})
})
