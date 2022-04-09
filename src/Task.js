const taskArray = [];

export default class Task {
  constructor() {
    if (localStorage.getItem('tasks') === null) {
      this.tasksInLS = localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      this.tasksInLS = JSON.parse(localStorage.getItem('tasks'));
    }
  }

  updateLS() {
    localStorage.setItem('tasks', JSON.stringify(this.tasksInLS));
  }

  // eslint-disable-next-line class-methods-use-this
  add(description) {
    taskArray.push({
      taskDescription: description,
      id: taskArray.length + 1,
      completed: false,
    });

    this.updateLS();
  }

  remove(taskIdx) {
    this.tasksInLS.splice(taskIdx, 1);
    this.updateLS();
  }
}