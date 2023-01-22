const readline = require('readline');
const util = require('util');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

enum Commands {
  Exit = 0,
  Add,
  Edit,
  Delete,
}

function DisplayList(list: Array<string>) {
  console.log('Current list:');
  list.map((item, index) => console.log(`${index}. ${item}`));
}

async function AddToDoItem() {
  const itemToAdd = await question('Type the task to add: ');
  todoList.push(itemToAdd);
  console.log('Current list:');
  DisplayList(todoList);
}

async function EditToDoItem() {
  const itemToEdit: number = await question(
    'Type the task number you want to edit: '
  );
  const newItemValue: string = await question(
    `Type the value for this item ${itemToEdit}: `
  );
  todoList[itemToEdit] = newItemValue;
  DisplayList(todoList);
}

async function DeleteToDoItem() {
  const itemToRemove: number = await question(
    'Type the task number you want to remove: '
  );
  todoList.splice(itemToRemove, 1);
  DisplayList(todoList);
}

const todoList: Array<string> = [];

async function Main() {
  const option = await question(
    `Choose an option:\n${Commands.Add}- Add\n${Commands.Edit}- Edit\n${Commands.Delete}- Delete\n${Commands.Exit}- Exit\n`
  );
  if (option == Commands.Exit) return rl.close();

  DisplayList(todoList);

  if (option == Commands.Add) {
    await AddToDoItem();
  }

  if (option == Commands.Edit) {
    await EditToDoItem();
  }

  if (option == Commands.Delete) {
    await DeleteToDoItem();
  }

  Main();
}

Main();
