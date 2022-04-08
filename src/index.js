import './style.css';

const tasks = [
  {
    description: 'do laundry',
    completed: false,
    index: 0,
  },
  {
    description: 'do dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'eat pizza',
    completed: false,
    index: 2,
  },
];

const todoList = document.querySelector('.todo-list');

const populateList = () => {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"><div class="task-text">${task.description}</div><i class="fas fa-ellipsis-v"></i>`;
    todoList.appendChild(li);
  });
};

populateList();
