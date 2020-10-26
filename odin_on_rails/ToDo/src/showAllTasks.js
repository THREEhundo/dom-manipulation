import TaskWindow from './taskWindow';
import datepicker from 'js-datepicker';
import { compareAsc, format, formatDistance, formatRelative, subDays, set, max, min } from 'date-fns';

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

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task-title');
        taskTitle.innerHTML = oldTasks[i].title;

        // Change date format ex. Oct 22nd
        const date = oldTasks[i].dueDate;
        const formatDate = date.match(/\d+/g);
        const taskDueDate = document.createElement('div');
        taskDueDate.classList.add('task-due-date');

        // CHANGE FORMAT OF DATE WITH DATEFNS
        const time = format(new Date(parseInt(formatDate[0]), parseInt(formatDate[1]) - 1, parseInt(formatDate[2])), 'MMM dd');
        taskDueDate.innerHTML = time;

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

          // Notes
          const eNotes = document.createElement('textarea');
          if (oldTasks[i].note == "") {
            eNotes.placeholder = 'Ex. Notes for Task';
            eNotes.classList.add('placeholder-txt');
          } else {
            eNotes.value = oldTasks[i].note;
          }
          eNotes.id = 'edit-notes';

          // Due Date
          const eDueDate = document.createElement('input');
          eDueDate.type = 'text';
          eDueDate.value = format(new Date(parseInt(formatDate[0]), parseInt(formatDate[1]) - 1, parseInt(formatDate[2])), 'MM/dd/yyyy');
          oldTasks[i].dueDate;
          eDueDate.id = 'edit-date';

          // Priority
          const priorityContainer = document.createElement('div');
          const priorityLabel = document.createElement('div');
          const low = document.createElement('div');
          const high = document.createElement('div');
          priorityLabel.innerHTML = 'Priority';
          low.innerHTML = 'Low';
          high.innerHTML = 'High';

          // Project Name
          const projectName = document.createElement('input');
          projectName.type = 'text';
          if (oldTasks[i].project == "") {
            projectName.placeholder = 'Add to a Project';
            projectName.addClass('placeholder-txt');
          } else {
            projectName.value = oldTasks[i].project;
          }

          document.querySelector('#todo-container').appendChild(mainContainer);
          mainContainer.appendChild(eHeader);
          mainContainer.appendChild(eNotes);
          mainContainer.appendChild(eDueDate);
          mainContainer.appendChild(priorityContainer);
          priorityContainer.appendChild(priorityLabel);
          priorityContainer.appendChild(low);
          priorityContainer.appendChild(high);
          mainContainer.appendChild(projectName);
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

  return {
    allTaskContainer
  }
}

export default ShowAllTasks
