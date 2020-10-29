import TaskWindow from './taskWindow';
import datepicker from 'js-datepicker';
import { compareAsc, format, formatDistance, formatRelative, subDays, set, max, min } from 'date-fns';
import { Datepicker } from 'vanillajs-datepicker';

const ShowAllTasks = () => {
  const allTaskContainer = () => {
    // Get array of tasks & loop to create divs
    const oldTasks = JSON.parse(localStorage.getItem('TaskList'));
    console.log(oldTasks);

    const allTaskItemContainer = document.createElement('div');
    allTaskItemContainer.classList.add('task-container-display');

    // Heading
    const headingContainer = document.createElement('div');
    headingContainer.id = 'task-heading-container';

    const allTaskHeader = document.createElement('div');
    allTaskHeader.innerHTML = 'All Tasks';
    allTaskHeader.classList.add('task-header-title');

    const dateArrowContainer = document.createElement('div');
    dateArrowContainer.id = 'date-arrow-container';

    const allTaskDueDate = document.createElement('div');
    allTaskDueDate.innerHTML = 'Due Date';
    allTaskDueDate.classList.add('task-header-date');

    const sortingArrow = document.createElement('img');
    sortingArrow.src = '../css/images/caret-down.svg';
    sortingArrow.classList.add('caret');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    document.querySelector('#todo-container').appendChild(allTaskItemContainer);
    allTaskItemContainer.appendChild(headingContainer);
    headingContainer.appendChild(allTaskHeader);
    headingContainer.appendChild(dateArrowContainer)
    dateArrowContainer.appendChild(allTaskDueDate);
    dateArrowContainer.appendChild(sortingArrow);
    allTaskItemContainer.appendChild(taskContainer);

    if (oldTasks.length > 0) {
      for (let i = 0; i < oldTasks.length; i++) {
        // duedate, finished, notes, priority, project, title
        // Hide the project name
        // isFinished first
        const taskItem = document.createElement('li');
        taskItem.classList.add('user-task');
        taskItem.id = i;

        const checkboxTitleContainer = document.createElement('div');
        checkboxTitleContainer.classList.add('checkbox-title-container');

        const taskIsFinished = document.createElement('input');
        taskIsFinished.type = 'checkbox';
        taskIsFinished.id = 'is-finished';
        // taskIsFinished.addEventListener('click', () => {
        //   console.log('click');
        // })

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task-title');
        taskTitle.innerHTML = oldTasks[i].title;

        // Change date format ex. Oct 22nd
        const date = oldTasks[i].dueDate;
        const formatDate = date.match(/\d+/g);
        const taskDueDate = document.createElement('div');
        taskDueDate.classList.add('task-due-date');

        // CHANGE FORMAT OF DATE WITH DATEFNS
        if (date == '') {
          taskDueDate.innerHTML = '';
        } else {
          const time = format(new Date(parseInt(formatDate[0]), parseInt(formatDate[1]) - 1, parseInt(formatDate[2])), 'MMM dd');
          taskDueDate.innerHTML = time;
        }

        taskContainer.appendChild(taskItem);
        taskItem.appendChild(checkboxTitleContainer);
        checkboxTitleContainer.appendChild(taskIsFinished);
        checkboxTitleContainer.appendChild(taskTitle);
        taskItem.appendChild(taskDueDate);

        // Create Task Details Div
        const allTaskDetails = () => {
          const mainContainer = document.createElement('div');
          mainContainer.id = 'task-detail-window';

          // Header
          const eHeader = document.createElement('textarea');
          eHeader.value = oldTasks[i].title;
          eHeader.id = 'edit-title';
          eHeader.addEventListener('focusout', (e) => {
            e.stopPropagation();
            oldTasks[i].title = eHeader.value;
            localStorage.setItem('TaskList', JSON.stringify(oldTasks));
            taskTitle.innerHTML = eHeader.value;
          });

          // Notes
          const eNotes = document.createElement('textarea');
          if (oldTasks[i].note == "") {
            eNotes.placeholder = 'Ex. Notes for Task';
            eNotes.classList.add('placeholder-txt');
          } else {
            eNotes.value = oldTasks[i].note;
          }
          eNotes.id = 'edit-notes';
          eNotes.addEventListener('focusout', (e) => {
            e.stopPropagation();
            oldTasks[i].note = eNotes.value;
            localStorage.setItem('TaskList', JSON.stringify(oldTasks));
          });

          // Due Date
          const eDueDate = document.createElement('input');
          eDueDate.type = 'text';
          eDueDate.value = oldTasks[i].dueDate;
          console.log();
          console.log(eDueDate.value);
          eDueDate.id = 'edit-date';
          const datepicker = new Datepicker(eDueDate, {
            minDate: 'today',
            format: 'mm-dd-yyyy',
            todayHighlight: true,
          });
          eDueDate.addEventListener('focusout', (e) => {
            e.stopPropagation();
            oldTasks[i].dueDate = eDueDate.value;
            localStorage.setItem('TaskList', JSON.stringify(oldTasks));
            console.log(localStorage.getItem('TaskList'));
            const reformatNewDate = format(new Date(eDueDate.value), 'MMM dd');
            taskDueDate.innerHTML = reformatNewDate;
          });

          // Priority
          const priorityContainer = document.createElement('div');
          const priorityLabel = document.createElement('div');
          const low = document.createElement('div');
          const high = document.createElement('div');
          priorityLabel.innerHTML = 'Priority';
          low.innerHTML = 'Low';
          high.innerHTML = 'High';
          priorityContainer.id = 'priority-container';
          priorityLabel.id = 'priority-label';
          low.id = 'low-pr';
          high.id = 'high-pr';
          low.addEventListener('click', (e) => {
            e.stopPropagation();
            oldTasks[i].priority = 'low';
            localStorage.setItem('TaskList', JSON.stringify(oldTasks));
          });
          high.addEventListener('click', (e) => {
            e.stopPropagation();
            oldTasks[i].priority = 'high';
            localStorage.setItem('TaskList', JSON.stringify(oldTasks));
          });

          // Project Name
          const eProject = document.createElement('input');
          eProject.type = 'text';
          eProject.id = 'edit-project'
          if (oldTasks[i].project == "") {
            eProject.placeholder = 'Add to a Project';
            eProject.addClass('placeholder-txt');
          } else {
            eProject.value = oldTasks[i].project;
          }
          eProject.addEventListener('focusout', (e) => {
            e.stopPropagation();
            oldTasks[i].project = eProject.value;
            localStorage.setItem('TaskList', JSON.stringify(oldTasks));
            console.log(JSON.parse(localStorage.getItem('TaskList')));
          });

          document.querySelector('#todo-container').appendChild(mainContainer);
          mainContainer.appendChild(eHeader);
          mainContainer.appendChild(eNotes);
          mainContainer.appendChild(eDueDate);
          mainContainer.appendChild(priorityContainer);
          priorityContainer.appendChild(priorityLabel);
          priorityContainer.appendChild(low);
          priorityContainer.appendChild(high);
          mainContainer.appendChild(eProject);
        }

        taskTitle.addEventListener('click', () => {
          const mainContainer = document.querySelector('#task-detail-window');
          if (mainContainer) {
            mainContainer.remove();
          }
          allTaskDetails();
        });
      }
    }
  }

  const focusOut = () => {

  }

  return {
    allTaskContainer
  }
}

export default ShowAllTasks
