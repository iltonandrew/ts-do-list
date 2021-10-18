const readline = require("readline");

enum Commands {
  Exit = 0,
  Add,
  Edit,
  Delete
}

function DisplayList(list: Array<string>) {
  list.map((item, index) => console.log(`${index}. ${item}`));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const util = require("util");
const question = util.promisify(rl.question).bind(rl);

const todoList: Array<string> = [];

async function Main() {
  const option = await question("Choose option:\n1- Add\n2- Edit\n3- Delete\n0- Exit\n");
  if (option == Commands.Exit) return rl.close();

  if (option == Commands.Add) {
    const itemToAdd = await question("Type the task to add: ");
    todoList.push(itemToAdd);
    console.log("Current list:");
    DisplayList(todoList);
  }

  if (option == Commands.Edit) {
    console.log("Current list:");
    DisplayList(todoList);
    const itemToEdit: number = await question(
      "Type the task number you want to edit: "
    );
    const newItemValue: string = await question(
      `Type the new value for the item ${itemToEdit}: `
    );
    todoList[itemToEdit] = newItemValue

    console.log("Current list:");
    DisplayList(todoList);
  }

  if (option == Commands.Delete){
    console.log("Current list:");
    DisplayList(todoList);
    const itemToRemove: number = await question(
      "Type the task number you want to remove: "
    );
    todoList.splice(itemToRemove, 1)
    console.log("Current list:");
    DisplayList(todoList);
  }

  Main();
}

Main();
