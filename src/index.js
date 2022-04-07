import './style.css';

let tasks = [
  {
    description: "do laundry",
    completed: false,
    index: 0
  },
  {
    description: "do dishes",
    completed: false,
    index: 1
  },
  {
    description: "eat pizza",
    completed: false,
    index: 2
  }
];

const todoList = document.querySelector('.todo-list');

const populateList = () => {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerText = task.description;

    todoList.appendChild(li);
  });
}

populateList();
