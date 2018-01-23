const promptus = require('../../dist/index');

const scream = async (input) => {
   console.log(input.toUpperCase());
   return;    
}

promptus.runInteractive({handler: scream});
