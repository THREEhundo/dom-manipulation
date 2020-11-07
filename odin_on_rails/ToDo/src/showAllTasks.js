import TaskWindow from './taskWindow';
import datepicker from 'js-datepicker';
import { compareAsc, format, formatDistance, formatRelative, subDays, set, max, min } from 'date-fns';
import { Datepicker } from 'vanillajs-datepicker';

const ShowAllTasks = (self) => {
  const oldTasks = JSON.parse(localStorage.getItem('TaskList'));

  // Heading for List of Tasks
  const createHeading = () => {
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
    allTaskDueDate.id = 'sort-heading';
    allTaskDueDate.addEventListener('click', () => {
      for (let i = 0; i < sortByDate.length; i++) {
        tC(i, sortByDate);
      }
    });

    const sortingArrow = document.createElement('img');
    sortingArrow.src = '../css/images/caret-down.svg';
    sortingArrow.classList.add('caret');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.id = 'task-container';

    document.querySelector('#todo-container').appendChild(allTaskItemContainer);
    allTaskItemContainer.appendChild(headingContainer);
    headingContainer.appendChild(allTaskHeader);
    headingContainer.appendChild(dateArrowContainer)
    dateArrowContainer.appendChild(allTaskDueDate);
    dateArrowContainer.appendChild(sortingArrow);
    allTaskItemContainer.appendChild(taskContainer);
  }

  // Create Content List
  const tC = (i, oldTasks) => {
    // duedate, finished, notes, priority, project, title
    const taskItem = document.createElement('li');
    taskItem.classList.add('user-task');
    taskItem.id = `user-task-${i}`;

    const checkboxTitleContainer = document.createElement('div');
    checkboxTitleContainer.classList.add('checkbox-title-container');

    const taskIsFinished = document.createElement('input');
    taskIsFinished.type = 'checkbox';
    taskIsFinished.id = 'is-finished';
    taskIsFinished.addEventListener('change', () => {
      if (taskIsFinished.checked) {
        taskTitle.classList.add('strikethrough');
        taskDueDate.classList.add('strikethrough');

        setTimeout(() => {
          console.log(document.querySelector(`#user-task-${i}`));
          document.querySelector(`#user-task-${i}`).classList.add('fade-out');
        }, 2000);

        setTimeout(() => {
          document.querySelector(`#user-task-${i}`).remove();
        }, 3000);

        oldTasks.splice(i, 1);
        localStorage.setItem('TaskList', JSON.stringify(oldTasks));
      } else {
        taskTitle.classList.remove('strikethrough');
        taskDueDate.classList.remove('strikethrough');
      }
    })

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.id = `task-title-${i}`;
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
      const time = format(new Date(parseInt(formatDate[2]), parseInt(formatDate[0]) - 1, parseInt(formatDate[1])), 'MMM dd');
      taskDueDate.innerHTML = time;
      console.log(`Formatted Date: ${time}
        1st int: ${parseInt(formatDate[0])}
        2nd int: ${parseInt(formatDate[1]) - 1}
        3rd int: ${parseInt(formatDate[2])}`);
    }
    console.log(taskDueDate);

    document.querySelector('.task-container').appendChild(taskItem);
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
      eDueDate.id = 'edit-date';
      const datepicker = new Datepicker(eDueDate, {
        minDate: 'today',
        format: 'mm-dd-yyyy',
        todayHighlight: true,
      });
      eDueDate.addEventListener('focusout', (e) => {
        e.stopPropagation();
        oldTasks[i].dueDate = eDueDate.value;
        console.log(oldTasks[i].dueDate);
        localStorage.setItem('TaskList', JSON.stringify(oldTasks));
        // console.log(localStorage.getItem('TaskList'));
        const reformatNewDate = format(new Date(eDueDate.value), 'MMM dd');
        taskDueDate.innerHTML = reformatNewDate;
        console.log(taskDueDate, reformatNewDate);
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

  // Show All Tasks From a Particular Project
  const sortByList = (self) => {
    let projectArr = [];
    for (let task in oldTasks) {
      if (oldTasks[task].project == self.innerHTML) {
        projectArr.push(oldTasks[task]);
      }
    }
    createHeading();
    projectArr.forEach((item, i) => {
      tC(i, projectArr);
    });
  }

  // Show All Tasks from a Particular Priority Level
  const sortByPriority = (level) => {

    function highLow(level) {
      let priorityArr = [];
      if (level == 'low') {
        const sortedLow = oldTasks.forEach((item) => {
          if (item.priority == 'low') {
            priorityArr.push(item);
          }
        });
      } else {
        const sortedHigh = oldTasks.forEach((item) => {
          if (item.priority == 'high') {
            priorityArr.push(item);
          }
        });
      }
      return priorityArr;
    }

    createHeading();
    const output = highLow(level);
    console.log(output);
    output.forEach((item, i) => {
      console.log(item);
      tC(i, output);
    });
  }

  // Show All Tasks
  const allTaskContainer = () => {
    createHeading();

    if (oldTasks.length > 0) {
      for (let i = 0; i < oldTasks.length; i++) {
        const allTaskList = tC(i, oldTasks);
      }
    }
  }

  // Sort By Date
  const sortByDate = oldTasks.sort((a, b) => {
    const aDate = a.dueDate;
    const bDate = b.dueDate;
    // Sort
    if (aDate < bDate) {
      return -1;
    }
    if (aDate > bDate) {
      return 1;
    }
    // Equal Date
    return 0;
    // Create divs
  });

  return {
    allTaskContainer,
    tC,
    sortByList,
    sortByPriority,
    sortByDate
  }
}

export default ShowAllTasks
