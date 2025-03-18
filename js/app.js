const formTaskEl = document.querySelector('.grid__form');
const addTaskButton = document.querySelector('#add-task');

const addTaskInput = document.querySelector('#input-title');
const addTaskPriorityOption = document.querySelector('#priority');
const addTaskStartedAt = document.querySelector('#started-at');
const addTaskStatus = document.querySelector('#status');
const addTaskTracker = document.querySelector('#tracker');

//Кнопка изменения элемента
const taskEditButton = document.createElement('button');
taskEditButton.className = 'button button--edit';
taskEditButton.textContent = 'edit';

//Кнопка удаления элемента
const taskRemoveButton = document.createElement('button');
taskEditButton.className = 'button button--remove';
taskEditButton.textContent = 'remove';

//Объект таски
const taskObject = {
    title: 'aboba',
    priority: '',
    status: '',
    startAt: '',
    status: '',
    tracker: ''
}

function storeData() {
    addTaskInput.value = '123';
    taskObject.title = addTaskInput.value;
    taskObject.priority = addTaskPriorityOption.value;
    taskObject.startAt = addTaskStartedAt.value; //Функция для расчет времени начала
    taskObject.status = addTaskStatus.value;
    taskObject.tracker = addTaskTracker.value;
    console.log(taskObject);
}

addTaskButton.addEventListener('click', storeData());

