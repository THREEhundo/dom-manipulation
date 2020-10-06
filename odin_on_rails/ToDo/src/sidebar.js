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
    "item-container-1": {
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
    }

  }

function modalBuild(obj, form) {
  let popupTitleInput;
  let notes;
  for (let item in obj) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('popup-item-container');

    const popupTitleLabel = document.createElement('label');

    for (let [key, value] of Object.entries(obj[item])) {
      if (value == 'input') {
        popupTitleInput = document.createElement('input');
      } else if (key == 'for') {
        popupTitleLabel.setAttribute("for", value);
        popupTitleInput.id = value;
      } else if (key == 'innerHTML') {
        popupTitleLabel.innerHTML = value;
      } else if (key == 'required') {
        popupTitleInput.required = value;
      } else if (key == 'rows') {
        notes = document.createElement('textarea');
        notes.id = 'create-task-notes';
        notes.setAttribute('rows', value);
        notes.setAttribute('cols', value);
      }
    }
    form.appendChild(itemContainer);
    itemContainer.appendChild(popupTitleLabel);
    itemContainer.appendChild(popupTitleInput);
    // itemContainer.appendChild(notes);
  }
}

  // Create Task Modal
  const createTaskModal = () => {
    const popup = document.createElement('form');
    popup.id = 'task-modal';

    todoContainer.appendChild(popup);
    modalBuild(modalFeatures, popup);
    // popup.appendChild(popupTitle);
    // popupTitle.appendChild(popupTitleLabel);
    // popupTitle.appendChild(popupTitleInput);
  }
  // console.log(popupTitleLabel.for);

  const createTaskEventListener = createTask.addEventListener('click', createTaskModal)

  return {
    createTaskEventListener
  }
}

export default Sidebar
