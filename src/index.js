import './style.css';
import { addTask, editTasks } from './Task.js';

const addBtn = document.getElementById('add-btn');
const todoListUL = document.querySelector('.todo-list');

addBtn.addEventListener('click', addTask);

todoListUL.addEventListener('focusout', (e) => editTasks(e));
