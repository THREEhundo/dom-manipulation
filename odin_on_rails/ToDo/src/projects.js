import ToDoItem from './todoItem';

const Projects = (arr) => {
  // Add Task to todoArray from CreateTask
  const addToDo = (arr) => {
    const title = document.querySelector('#list-name').value;
    const dueDate = document.querySelector('#start').value;
    const priority = 'low';
    const note = document.querySelector('#notes').value;
    const project = document.querySelector('#project').value;
    let newTask = ToDoItem(title, dueDate, priority, note, project);
    arr.push(newTask);

    document.querySelector('#task-modal').reset();
    document.querySelector('#task-modal-container').style.display = 'none';

    // If nothing is stored create new array
    if (localStorage.getItem('TaskList') == null) {
      localStorage.setItem('TaskList', '[]');
    }

    // Get old data and add it to new data
    const oldTasks = JSON.parse(localStorage.getItem('TaskList'));
    oldTasks.push(newTask);

    // Add to localStorage
    localStorage.setItem('TaskList', JSON.stringify(arr));
  }

  return {
    addToDo
  }
}

export default Projects
