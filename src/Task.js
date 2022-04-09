let tasksArray = JSON.parse(localStorage.getItem('task')) || [];
const input = document.querySelector('.input')
const todoList = document.querySelector('.todo-list');


export default class Task {
    constructor(description) {
       this.index = tasksArray.length
       this.description = description
       this.completed = false
    }
}



const populateList = (tasksArray) => {
    todoList.innerHTML = ''
    for(let i=0 ; i< tasksArray.length ; i+=1){
    const li = document.createElement('li');
    li.id = `${tasksArray[i].index }`;
    li.innerHTML = `<input type="checkbox"><div class="task-text">${tasksArray[i].description}</div>
    <i class="fas fa-trash-alt delete" data_id='${i}'></i>`;
    todoList.appendChild(li);
    }
};


function clearData()
{
    input.value = ''
}

populateList(tasksArray);


function addToLocalStorage(tasksArray){
 localStorage.setItem('task' , JSON.stringify(tasksArray))
}

export function addTask(){
    if(input.value.trim() !== '')
    {
        let task = new Task(input.value);
        tasksArray.push(task)
        populateList(tasksArray);
        addToLocalStorage(tasksArray)
        clearData()
    }
}



todoList.addEventListener('click', (e) => {
 if(e.target.classList.contains('delete')){
    tasksArray = tasksArray.filter((task) => task.index != +(e.target.parentNode.id))
    addToLocalStorage(tasksArray)
     e.target.parentNode.remove();
 }
})