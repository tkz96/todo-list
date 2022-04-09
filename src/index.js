import './style.css';
import Task , { addTask } from './Task.js';
const addBtn = document.getElementById('add-btn')


addBtn.addEventListener('click', addTask)