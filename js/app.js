import { getActualDate } from "./getActualDate.js";

const formTaskEl = document.querySelector('.grid__form');
const createTaskButton = document.querySelector('#add-task');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

console.log(tasks);
//Элементы таски
const titleTask = document.querySelector('#input-title');
const priorityTask = document.querySelector('#priority');
const startedatTask = document.querySelector('#started-at');
const statusTask = document.querySelector('#status');
const trackerTask = document.querySelector('#tracker');

//Кнопка изменения элемента
const taskEditButton = document.createElement('button');
taskEditButton.className = 'button button--edit';
taskEditButton.textContent = 'edit';

//Кнопка удаления элемента
const taskRemoveButton = document.createElement('button');
taskEditButton.className = 'button button--remove';
taskEditButton.textContent = 'remove';

//сброс инпутов
function resetInputs() {
    titleTask.value = '';
    priorityTask.value = 'low';
    startedatTask.textContent = '00:00:00';
    statusTask.value = 'waiting-for';
    trackerTask.textContent = '00:00:00';
}

//Добавление таски в локал
function addData() {
    
    const taskObject = {
        title: titleTask.value,
        priority: priorityTask.value,
        startedAt: getActualDate(),
        status: statusTask.value,
        tracker: '00:00:00',
        isActive: 'true'
    };

    tasks.push(taskObject);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

createTaskButton.addEventListener('click', () => {
    addData();
    resetInputs();
});

//Рендер
function renderTasks() {


    const trEl = document.createElement('tr');
    trEl.className = 'grid__row';

    const spanTitleEl = document.createElement('span'); 

    const tdPriorityEl = document.createElement('td');
    const selectPriorityEl = document.createElement('select');
    const optionPriorityEl1 = document.createElement('option');
    optionStatusEl1.value = 'low';
    optionStatusEl1.textContent = 'Low';
    const optionPriorityEl2 = document.createElement('option');
    optionStatusEl2.value = 'mid';
    optionStatusEl2.textContent = 'Mid';
    const optionPriorityEl3 = document.createElement('option');
    optionStatusEl3.value = 'high';
    optionStatusEl3.textContent = 'High';

    const tdStartedAtEl = document.createElement('td');
    const spanStartedAtEl = document.createElement('span');
    spanStartedAtEl.textContent = '00:00:00';

    const tdStatusEl = document.createElement('td');
    const selectStatusEl = document.createElement('select');
    const optionStatusEl1 = document.createElement('option');
    optionStatusEl1.value = 'status-waiting';
    optionStatusEl1.textContent = 'Waiting-for';
    const optionStatusEl2 = document.createElement('option');
    optionStatusEl2.value = 'status-inprogress';
    optionStatusEl2.textContent = 'In-progress';
    const optionStatusEl3 = document.createElement('option');
    optionStatusEl3.value = 'status-finished';
    optionStatusEl3.textContent = 'Finished';

    const tdTrackerEl = document.createElement('td');
    const spanTrackerEl = document.createElement('span');
    spanTrackerEl.id = 'task-tracker';



    for (let i = 0; i < tasks.length; i++) {
        
    }
}


