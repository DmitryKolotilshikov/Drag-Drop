const taskListElement = document.querySelector(`.tasks__list`);
const taskElements = taskListElement.querySelectorAll(`.tasks__item`);

for(const task of taskElements) {
    task.draggable = true;
}

taskListElement.addEventListener(`dragstart`, (evt)=> {
    evt.target.classList.add(`selected`);
})

taskListElement.addEventListener(`dragend`, (evt)=> {
    evt.target.classList.remove(`selected`);
})

taskListElement.addEventListener(`dragover`, (evt)=> {
    evt.preventDefault();

    const activeElement = taskListElement.querySelector(`.selected`);

    const currentElement = evt.target;

    const isMoveble = activeElement !== currentElement && currentElement.classList.contains(`tasks__item`);

    if(!isMoveble) {
        return;
    }
    const nextElement = getNextElement(evt.clientY, currentElement);
    // const nextElement = (currentElement === activeElement.nextElementSibling) ? currentElement.nextElementSibling : currentElement;

    if(
        nextElement && activeElement === nextElement.previousElementSibling || activeElement === nextElement
    ) {
        return;
    }

    taskListElement.insertBefore(activeElement, nextElement);
})


const getNextElement = (currentCursor, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();

    const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

    const nextElement = (currentCursor < currentElementCenter) ? currentElement : currentElement.nextElementSibling;

    return nextElement;
}


const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, ()=> {
    
            let liElement = document.createElement(`li`);
            let liElementText = document.createTextNode(`Hello NEO`);
            liElement.appendChild(liElementText);
            liElement.classList.add(`tasks__item`);
            liElement.setAttribute(`draggable`, true);
            taskListElement.appendChild(liElement);       
   
})