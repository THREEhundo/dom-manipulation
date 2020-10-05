const Sidebar = () => {
  const todoContainer = document.querySelector('#todo-container');
  const createTask = document.querySelector('#create-task');
  const allTasks = document.querySelector('#all-tasks');
  const lists = document.querySelector('#lists');
  const calendar = document.querySelector('#calendar');
  const taskModal = document.querySelector('#task-modal');

  const modalFeatures = {
    "item-container-0" :{
      for: 'list-name',
      innerHTML: 'Task: ',
      id: 'list-name',
      required: true
    },
    // "item-container-1": {
    //
    // }
  }

function modalBuild(obj, form) {
  for (let item in obj) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('popup-item-container');

    const popupTitleLabel = document.createElement('label');
    const popupTitleInput = document.createElement('input');

    for (let [key, value] of Object.entries(obj[item])) {
      if (key == 'for') {
        popupTitleLabel.setAttribute("for", value);
      } else if (key == 'innerHTML') {
        popupTitleLabel.innerHTML = value;
      } else if (key == 'id') {
        popupTitleInput.id = value;
        popupTitleInput.required = value;
      }
    }
    form.appendChild(itemContainer);
    itemContainer.appendChild(popupTitleLabel);
    itemContainer.appendChild(popupTitleInput);
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
