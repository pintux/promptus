# Promptus

A simple library to build a simple interactive CLI.

[![NPM](https://nodei.co/npm/promptus.png)](https://nodei.co/npm/promptus/)

Quick start:

```javascript
const promptus = require('promptus');

// an async function to handle the user input
const scream = async (input) => {
   console.log(input.toUpperCase());
   return;
}

//run the CLI
promptus.runInteractive({handler: scream});
```

---

## API

`runInteractive( options )` - start a new CLI configured by the passed options.

`options` - an object with the following properties:

- `promptSymbol` - string, the CLI prompt to show to the user, default is: `>`;
- `startPrompt` - string, start message to how to the user, default is aìa Promptus welcome message;
- `handler` - async function returning a Promise, with the following signature `async (input): Promise`, it receives the trimmed user input and it should write the response to stdout. Inside this function write your application domain-related code.

To exit the CLI write `exit` or `quit` or `CTRL-C`.

---

License: "MIT License", see `LICENSE`.
