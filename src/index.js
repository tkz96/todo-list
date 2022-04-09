import './style.css';
// eslint-disable-next-line object-curly-newline
import { addTask, editTasks, check, clear } from './Task.js';

const addBtn = document.getElementById('add-btn');
const todoListUL = document.querySelector('.todo-list');
const clearBtn = document.getElementById('clear-btn');

window.addEventListener('DOMContentLoaded', () => {
  addBtn.addEventListener('click', addTask);

  todoListUL.addEventListener('focusout', (e) => editTasks(e));
  todoListUL.addEventListener('change', (e) => check(e));

  clearBtn.addEventListener('click', clear);
});