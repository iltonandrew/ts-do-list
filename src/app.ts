const readline = require("readline");

enum Commands {
  Exit = 0,
  Add,
  Edit
}

function DisplayList(list:Array<string>){
  list.map((item, index)=>console.log(`${index}. ${item}`))
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const util = require('util');
const question = util.promisify(rl.question).bind(rl);

const todoList: Array<string> = []

async function Main() {
  const option = await question('Type 1 to add, 0 to exit: ')  
  if (option == Commands.Exit) return rl.close();

  if (option == Commands.Add) {
    const itemToAdd = await question('Type the task to add: ')
      todoList.push(itemToAdd)
      console.log('Current list:')
      DisplayList(todoList)
    }
  Main();
};

Main();