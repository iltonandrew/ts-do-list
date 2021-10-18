"use strict";
var readline = require("readline");
var Commands;
(function (Commands) {
    Commands[Commands["Exit"] = 0] = "Exit";
    Commands[Commands["Add"] = 1] = "Add";
})(Commands || (Commands = {}));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var todoList = [];
function Main() {
    rl.question('Type 1 to add, 0 to exit: ', function (answer) {
        if (answer == Commands.Exit)
            return rl.close();
        if (answer == Commands.Add) {
            rl.question('Type the task to add: ', function (todoItem) {
                todoList.push(todoItem);
                console.log('Current list:');
                todoList.map(function (item, index) { return console.log(index + ". " + item); });
                Main();
            });
        }
        Main();
    });
}
;
Main();
