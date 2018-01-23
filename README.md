# Promptus

A simple library to build a simple interactive CLI.

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
- `handler` - async function returning a Promise, with the following signature `async (input) => doSomething();...`, it receives the trimmed user input. Use it to write your application domain-related code.

---

License: "MIT License", see `LICENSE`.
