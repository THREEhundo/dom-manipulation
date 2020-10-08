const Sidebar = () => {
  const todoContainer = document.querySelector('#todo-container');
  const createTask = document.querySelector('#create-task');
  const allTasks = document.querySelector('#all-tasks');
  const lists = document.querySelector('#lists');
  const calendar = document.querySelector('#calendar');
  const taskModal = document.querySelector('#task-modal');
  // const createTaskNotes = document.querySelector('#create-task-notes');

  const modalFeatures = {
    "item-container-0" :{
      type: 'input',
      for: 'list-name',
      innerHTML: 'Task: ',
      required: true,
    },
    "item-container-1":{
      type: 'input',
      for: 'description',
      innerHTML: 'Description: ',
    },
    "item-container-2": {
      type: 'textarea',
      for: 'notes',
      innerHTML: 'Notes: ',
      rows: 5,
      cols: 30
    },
    "item-container-3": {
      type: 'submit',
      value: 'Submit'
    }
  }

function modalBuild(obj, form) {
  const mods = Object.entries(obj);
  for (let mod of mods) {
    let popupInput;
    let popupInputLabel;
    let popupNotepad;
    mod.shift();

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('popup-item-container');
    itemContainer.id = `popup-item-container${mods.indexOf(mod)}`;

    for (let item of mod) {
      if (item.innerHTML) {
        popupInputLabel = document.createElement('label');
        popupInputLabel.classList.add('label');
        popupInputLabel.innerHTML = item.innerHTML;
        popupInputLabel.setAttribute("for", item.for);
      }
      if (item.type == 'input') {
        popupInput = document.createElement('input');
        popupInput.classList.add('input');
        popupInput.id = item.for;
        popupInput.setAttribute('name', item.for);
        // Adding required to Task Name
        if (item.required) {
          popupInput.setAttribute('required', true);
        }
      } else if (item.type == 'textarea') {
        popupNotepad = document.createElement('textarea');
        popupNotepad.id = item.for;
        popupNotepad.setAttribute('name', item.for);
        popupNotepad.setAttribute('rows', item.rows);
        popupNotepad.setAttribute('cols', item.cols);
      } else if (item.type == 'submit') {
        popupInput = document.createElement('input');
        popupInput.value = item.value;
        popupInput.setAttribute('type', item.type)
      }
    }

    form.appendChild(itemContainer);
    if (popupInputLabel) {
      itemContainer.appendChild(popupInputLabel);
    }
    if (popupInput) {
      itemContainer.appendChild(popupInput);
    } else if (popupNotepad) {
      itemContainer.appendChild(popupNotepad);
    }
  }

}

  // Create Task Modal
  const createTaskModal = () => {
    const popup = document.createElement('form');
    popup.id = 'task-modal';

    todoContainer.appendChild(popup);
    modalBuild(modalFeatures, popup);
    // popup.appendChild(popupTitle);
    // popupTitle.appendChild(popupInputLabel);
    // popupTitle.appendChild(popupInput);
  }
  // console.log(popupInputLabel.for);

  const createTaskEventListener = createTask.addEventListener('click', createTaskModal);

  return {
    createTaskEventListener
  }
}
export default Sidebar
