const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Sisestage enda vanus: ', vanus => {
  readline.question('sisestage enda sugu (m või n)? ', sugu => {
    readline.question('sisestage treeningu tüüp (1, 2, või 3)? ', trenn => {
      let maxpulss
      if ( sugu == 'm' || sugu == 'm'){
        maxpulss = 220 - vanus
      }
      if (sugu == 'n' || sugu == 'n'){
        maxpulss = 206 - 0.88 * vanus
      }
      let min
      let max
      if ( trenn == '1'){
        min = 0.5 * maxpulss
        max = 0.7 * maxpulss
      } else if (trenn == '2'){
        min = 0.7 * maxpulss
        max = 0.8 * maxpulss
      } else if (trenn == '3'){
        min = 0.8 * maxpulss
        max = 0.87 * maxpulss
      }

      console.log('Pulsisagedus peaks olema vahemikus ' + Math.round(min) + ' kuni ' + Math.round(max) + '.');
      readline.close();    
    })
  })
});
