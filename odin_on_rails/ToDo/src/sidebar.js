import { compareAsc, format, formatDistance, formatRelative, subDays, set, max, min } from 'date-fns'
import ToDoItem from './todoItem';
import Projects from './projects'
import ShowAllTasks from './showAllTasks';


const Sidebar = (todoArray) => {
  const todoContainer = document.querySelector('#todo-container');
  const createTask = document.querySelector('#create-task');
  const allTasks = document.querySelector('#all-tasks-sidebar');
  const lists = document.querySelector('#lists');
  const calendar = document.querySelector('#calendar');
  let ticker = 0;
  const modalFeatures = {
    "item-container-0" :{
      type: 'input',
      for: 'list-name',
      innerHTML: 'Task: ',
      required: true,
    },
    "item-container-1":{
      type: 'input',
      for: 'project',
      innerHTML: 'Project: ',
      required: true,
    },
    "item-container-2": {
      type: 'textarea',
      for: 'notes',
      innerHTML: 'Notes: ',
      rows: 5,
      cols: 30
    },
    "item-container-3": {
      type: 'date',
      id: 'start',
      name: 'start-date',
      innerHTML: 'Due Date: ',
      value: minMax(min),
      min: minMax(min),
      max: minMax(max),
      required: true,
    },
    "item-container-4": {
      type: 'submit',
      value: 'Submit'
    }
  }

  // Calendar date minMax
  function minMax(el) {
    return format(el([
      new Date(),
      new Date(2030, 1, 11)
    ]), "MM-dd-yyyy")
  }

  const calendarFormat = format(new Date(), 'yyyy-MM-dd');

  // Create form
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
        if (item.innerHTML || item.type == 'date') {
          popupInputLabel = document.createElement('label');
          popupInputLabel.classList.add('label');
          popupInputLabel.innerHTML = item.innerHTML;
          popupInputLabel.setAttribute("for", item.for);
        }
        if (item.type == 'date') {
          popupInput = document.createElement('input');
          popupInput.setAttribute('type', item.type);
          popupInput.classList.add('input');
          popupInput.id = item.id;
          popupInput.name = item.name;
          popupInput.setAttribute('value', calendarFormat);
          popupInput.min = item.min;
          popupInput.max = item.max;
          popupInput.setAttribute("required", "");
        }
        if (item.type == 'input') {
          popupInput = document.createElement('input');
          popupInput.classList.add('input');
          popupInput.id = item.for;
          popupInput.setAttribute('type', "text");
          popupInput.setAttribute('name', item.for);

          // Adding required to Task Name
          if (item.required) {
            popupInput.setAttribute("required", "");
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

  // Exiting out of the form
  function escape(e) {
    if(e.key === "Escape") {
      const taskModalContainer = document.querySelector('#task-modal-container');
      taskModalContainer.style.display = 'none';
    }
  }

  // Create Form Container
  const createTaskModal = () => {
    const formContainer = document.createElement('div');
    formContainer.id = 'task-modal-container';
    const popup = document.createElement('form');
    popup.id = 'task-modal';

    todoContainer.appendChild(formContainer);
    formContainer.appendChild(popup);
    modalBuild(modalFeatures, popup);
    formContainer.addEventListener('keydown', escape);
  }

  createTask.addEventListener('click', () => {
    if (ticker > 0) {
      const taskModalContainer = document.querySelector('#task-modal-container');
      taskModalContainer.style.display = 'block';
    } else {
      createTaskModal();
      ticker++;
    }
    // Listener for submitting tasks
    // document.querySelector('#task-modal input[type="button"]').addEventListener('click', () => {
    //   e.preventDefault();
    //   const project = Projects();
    //   project.addToDo(todoArray);
    // });
  });

  // Listener for all tasks tab
  document.querySelector('.sidebar-item-heading-title > a').addEventListener('click', () => {
    if (document.querySelector('.task-container-display')) {
      return;
    }
    const taskMaster = ShowAllTasks();
    taskMaster.allTaskContainer();
  });

  return {

  }
}
export default Sidebar
