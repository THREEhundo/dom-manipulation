import { compareAsc, format, formatDistance, formatRelative, subDays, set, max, min } from 'date-fns'
import ToDoItem from './todoItem';
import Projects from './projects';
import ShowAllTasks from './showAllTasks';
import ListLink from './listLink';
import PriorityLink from './priorityLink'

const Sidebar = (todoArray) => {
  const todoContainer = document.querySelector('#todo-container');
  const createTask = document.querySelector('#create-task');
  const allTasks = document.querySelector('#all-tasks-sidebar');
  const lists = document.querySelector('#lists');
  const calendar = document.querySelector('#calendar');
  const prioritySidebar = document.querySelector('#priority');
  const prioritySubmenu = document.querySelector('#priority-submenu');
  let ticker = 0;

  // Return Unique Values
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

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
      for: 'cal',
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

  const calendarFormat = format(new Date(), 'MM-dd-yyyy');

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
          if (item.type == 'date') {
            popupInputLabel.removeAttribute("for", item.for);
          }
        }
        if (item.type == 'date') {
          popupInput = document.createElement('input');
          popupInput.setAttribute('type', item.type);
          popupInput.classList.add('input');
          popupInput.setAttribute('value', calendarFormat);
          popupInput.min = item.min;
          popupInput.max = item.max;
          popupInput.id = item.for;
          popupInput.name = item.name;
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
    document.querySelector('#task-modal input[type="submit"]').addEventListener('click', () => {
      const project = Projects(todoArray);

    });
  });

  // Listener for all tasks tab
  document.querySelector('#all-tasks-link').addEventListener('click', () => {
    const allTasksWindow = document.querySelector('.task-container-display');
    const detailContainer = document.querySelector('#task-detail-window');
    const prioritySubmenuContainer = document.querySelector('#priority-submenu-container');
    const listSubmenuContainer = document.querySelector('#link-submenu-container');

    if (allTasksWindow) {
      allTasksWindow.remove();
    }
    if (detailContainer) {
      detailContainer.remove();
    }
    if (prioritySubmenuContainer) {
      prioritySubmenuContainer.remove();
    }
    if (listSubmenuContainer) {
      listSubmenuContainer.remove();
    }
    const taskMaster = ShowAllTasks();
    taskMaster.allTaskContainer();
  });

  // Listener for List Dropdown Menu
  lists.addEventListener('click', (e) => {
    const prioritySubmenuContainer = document.querySelector('#priority-submenu-container');
    if (document.querySelector('#link-submenu-container')) {
      document.querySelector('#link-submenu-container').remove();
    } else {
      if (prioritySubmenuContainer) {
        prioritySubmenuContainer.remove();
      }
      const dropDown = ListLink(lists);
      dropDown.showProjectsSidebar();
    }
    // lists.classList.add('slide-bottom');
  });

  // Listener for Priority Dropdown Menu
  prioritySidebar.addEventListener('click', (e) => {
    const prioritySubmenuContainer = document.querySelector('#priority-submenu-container');
    const listSubmenuContainer = document.querySelector('#link-submenu-container');

    if (prioritySubmenuContainer) {
      prioritySubmenuContainer.remove();
    } else {
      if (listSubmenuContainer) {
        listSubmenuContainer.remove();
      }
      const pLevel = PriorityLink();
      pLevel.showPrioritySidebar();
    }
  });


  return {  }
}
export default Sidebar
