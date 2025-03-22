import { getActualDate } from "./getActualDate.js";


const createTaskButton = document.querySelector('#add-task');
const tbodyEl = document.querySelector('#grid__tbody');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


//Элементы таски
const titleTask = document.querySelector('#input-title');
const priorityTask = document.querySelector('#priority');
const startedAtTask = document.querySelector('#started-at');
const statusTask = document.querySelector('#status');
const trackerTask = document.querySelector('#tracker');


//Сброс инпутов
function resetInputs() {
    titleTask.value = '';
    priorityTask.value = 'low';
    startedAtTask.textContent = '00:00:00';
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
    renderTasks();
}


//Рендер
function renderTasks() {
    let tasksToRender = JSON.parse(localStorage.getItem('tasks')) || [];

    tbodyEl.innerHTML = '';
    
    for (let i = 0; i < tasksToRender.length; i++) {
        const trRowEl = document.createElement('tr');
        trRowEl.className = 'grid__row';

        //----------------COUNT
        const tdCount = document.createElement('td');
        const spanCount = document.createElement('span');
        spanCount.textContent = `${i}.`;
        
        trRowEl.prepend(tdCount);
        tdCount.prepend(spanCount);
        
        //----------------STATUS-INDICATOR
        const tdIndicator = document.createElement('td');
        const spanIndicator = document.createElement('span');
        spanIndicator.style.padding = '2px';
        tdIndicator.style.display = 'flex';
        tdIndicator.style.alignItems = 'center';
        tdIndicator.style.justifyContent = 'center';
        spanIndicator.style.width = '30px';
        spanIndicator.style.height = '30px';
        spanIndicator.style.borderRadius = '100%';
        
        trRowEl.append(tdIndicator);
        tdIndicator.append(spanIndicator);
        
        //----------------TITLE
        const tdTitleEl = document.createElement('td');
        const spanTitleEl = document.createElement('span');
        spanTitleEl.className = 'title';
        spanTitleEl.textContent = tasksToRender[i].title;

        tbodyEl.append(trRowEl);
        trRowEl.append(tdTitleEl);
        tdTitleEl.append(spanTitleEl);

        //----------------PRIORITY
        const tdPriorityEl = document.createElement('td');
        
        const selectPriorityEl = document.createElement('select');
        
        const optionPriorityEl1 = document.createElement('option');
        optionPriorityEl1.value = 'low';
        optionPriorityEl1.textContent = 'low';
        
        const optionPriorityEl2 = document.createElement('option');
        optionPriorityEl2.value = 'mid';
        optionPriorityEl2.textContent = 'mid';

        const optionPriorityEl3 = document.createElement('option');
        optionPriorityEl3.value = 'high';
        optionPriorityEl3.textContent = 'high';
        
        if (tasksToRender[i].priority === optionPriorityEl1.value) {
            optionPriorityEl1.selected = true;
        } else if (tasksToRender[i].priority === optionPriorityEl2.value) {
            optionPriorityEl2.selected = true;
        } else if (tasksToRender[i].priority === optionPriorityEl3.value) {
            optionPriorityEl3.selected = true;
        } else {
            optionPriorityEl1.selected = true;
        }

        trRowEl.append(tdPriorityEl);
        tdPriorityEl.append(selectPriorityEl);
        selectPriorityEl.append(optionPriorityEl1);
        selectPriorityEl.append(optionPriorityEl2);
        selectPriorityEl.append(optionPriorityEl3);


        //----------------STARTED AT
        const tdStartedAt = document.createElement('td');
        const spanStartedAtEl = document.createElement('span');
        spanStartedAtEl.textContent = tasksToRender[i].startedAt;

        trRowEl.append(tdStartedAt);
        tdStartedAt.append(spanStartedAtEl);


        //----------------STATUS
        const tdStatusEl = document.createElement('td');

        const selectStatusEl = document.createElement('select');

        const optionStatusEl1 = document.createElement('option');
        optionStatusEl1.value = 'waiting-for';
        optionStatusEl1.textContent = 'Waiting-for';

        const optionStatusEl2 = document.createElement('option');
        optionStatusEl2.value = 'in-progress';
        optionStatusEl2.textContent = 'In-progress';

        const optionStatusEl3 = document.createElement('option');
        optionStatusEl3.value = 'finished';
        optionStatusEl3.textContent = 'Finished';

        //Логика селекта статус
        if (tasksToRender[i].status === optionStatusEl1.value) {
            optionStatusEl1.selected = true;
            spanIndicator.style.background = 'red';
        } else if (tasksToRender[i].status === optionStatusEl2.value) {
            optionStatusEl2.selected = true;
            spanIndicator.style.background = 'yellow';
        } else if (tasksToRender[i].status === optionStatusEl3.value) {
            optionStatusEl3.selected = true;
            spanIndicator.style.background = 'green';
        } else {
            optionStatusEl1.selected = true;
        }

        trRowEl.append(tdStatusEl);
        tdStatusEl.append(selectStatusEl);
        selectStatusEl.append(optionStatusEl1);
        selectStatusEl.append(optionStatusEl2);
        selectStatusEl.append(optionStatusEl3);


        //----------------TRACKER
        const tdTrackerEl = document.createElement('td');
        const spanTrackerEl = document.createElement('span');
        spanTrackerEl.textContent = tasksToRender[i].tracker;
        
        trRowEl.append(tdTrackerEl);
        tdTrackerEl.append(spanTrackerEl);

        
        //----------------ACTION
        const tdActionEl = document.createElement('td');
        tdActionEl.className = 'td-action';
        tdActionEl.style.display = 'flex';
        tdActionEl.style.gap = '10px';
        
        const buttonActionEdit = document.createElement('button');
        buttonActionEdit.type = 'button';
        buttonActionEdit.className = 'button button--edit';
        buttonActionEdit.textContent = 'edit';
        
        buttonActionEdit.addEventListener('click', () => {
            //////////сделать изменение
        })
        
        const buttonActionRemove = document.createElement('button');
        buttonActionRemove.type = 'button';
        buttonActionRemove.className = 'button button--remove';
        buttonActionRemove.textContent = 'remove';
        
        console.log(tasksToRender[i]);
        
        buttonActionRemove.addEventListener('click', function () {
            deleteTask(i);
        });

        trRowEl.append(tdActionEl);
        tdActionEl.append(buttonActionEdit);
        tdActionEl.append(buttonActionRemove);
    }
}

function deleteTask(task) {
    tasks.splice(task, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

renderTasks();

createTaskButton.addEventListener('click', () => {
    addData();
    resetInputs();
});



