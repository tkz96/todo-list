/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import './style.css';
import Task from './Task.js';

const form = document.querySelector('form');
const taskObj = new Task();

const populateList = (tasks) => {
  const items = [];
  for (const task in tasks.entries()) {
    items.push(`<li><input type="checkbox"><div class="task-text">${task.taskDescription}</div><i class="fas fa-ellipsis-v"></i></li>`);
  }
  return items.join('');
};

const showTasks = () => {
  const todolistUL = document.getElementById('todo-list');
  todolistUL.innerHTML = `${populateList(taskObj.tasksInLS)}`;

  // const btns = document.getElementsByClassName('fas fa-ellipsis-v');

  // for (const btn of btns) { //eslint-disable-line
  //   btn.addEventListener('click', removeTask); //eslint-disable-line
  // }
};

const addTask = () => {
  const taskTitle = document.getElementById('input');
  taskObj.add(taskTitle.value);

  showTasks();
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask();
});

// const removeTask = (event) => {
//   const bookId = event.target.dataset['bookidx'];
//   taskObj.remove(bookId);
//   showTasks();
// }

window.onload = showTasks();