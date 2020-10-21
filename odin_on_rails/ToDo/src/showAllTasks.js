import TaskWindow from './taskWindow';

const ShowAllTasks = () => {
  const allTaskContainer = () => {
    // Get array of tasks & loop to create divs
    const oldTasks = JSON.parse(localStorage.getItem('TaskList'));

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

        // taskTitle.addEventListener('click', )

        const taskDueDate = document.createElement('div');
        taskDueDate.classList.add('task-due-date');
        taskDueDate.innerHTML = oldTasks[i].dueDate;

        taskContainer.appendChild(taskItem);
        taskItem.appendChild(checkboxTitleContainer);
        checkboxTitleContainer.appendChild(taskIsFinished);
        checkboxTitleContainer.appendChild(taskTitle);
        taskItem.appendChild(taskDueDate);
      }
    }
  }

  return {
    allTaskContainer
  }
}

export default ShowAllTasks
