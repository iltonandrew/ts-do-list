"use strict";
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
while (1) {
  rl.question("What do you think of Node.js? ", function (answer) {
    // TODO: Log the answer in a database
    console.log("Thank you for your valuable feedback: " + answer);
    rl.close();
  });
}
