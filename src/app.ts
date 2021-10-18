const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Todo-list ", (answer: string) => {
  console.log(`Item to Add: ${answer}`);
  rl.close();
});
