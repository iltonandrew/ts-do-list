const readline = require("readline");

enum Commands {
  Exit = 0,
  Add,

}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todoList: Array<string> = []

function Main() {
  rl.question('Type 1 to add, 0 to exit: ', (answer:Commands) => {
    if (answer == Commands.Exit) return rl.close();

    if (answer == Commands.Add) {
      rl.question('Type the task to add: ', (todoItem:string)=>{
        todoList.push(todoItem)
        console.log(todoList)
        Main();
      })
    }
    Main();  
  });  
};

Main()