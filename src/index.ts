import * as readline from 'readline';

export function runInteractive({ promptSymbol = '> ', startPrompt = "Hello, I'm Promptus :)", handler = async (input) => {console.log(input+'\n'); return;} }) {
  const prompt = () => {    
    promptus.prompt();
  };
  const promptus = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  promptus.setPrompt(`${promptSymbol}`);
  
  console.log(startPrompt);
  console.log('');
  
  promptus
    .on('line', input => {
      let trimmedInput = input.trim();
      if (!trimmedInput) {
        prompt();
        return;
      }
      if (trimmedInput === 'quit' || trimmedInput === 'exit') {
        promptus.close();
        return;
      }
      handler(trimmedInput).then(prompt);
    })
    .on('close', () => {
      console.log('');
      console.log('Exiting... BYE!');
      process.exit(0);
    });
  prompt();
}