import ToDoItem from './todoItem';

const Projects = (arr) => {
  // Add Task to todoArray from CreateTask
  // const addToDo = (arr) => {
    const title = document.querySelector('#list-name').value;
    const priority = 'low';
    const note = document.querySelector('#notes').value;
    const project = document.querySelector('#project').value;
    let dueDate = document.querySelector('input[type="date"]').value;
    if (dueDate == "") {
      dueDate = "N/A";
    }
    let newTask = ToDoItem(title, dueDate, priority, note, project);
    arr.push(newTask);

    // If nothing is stored create new array
    if (localStorage.getItem('TaskList') == null) {
      localStorage.setItem('TaskList', '[]');
    }

    // Get old data and add it to new data
    const oldTasks = JSON.parse(localStorage.getItem('TaskList'));
    oldTasks.push(newTask);

    // Add to localStorage
    localStorage.setItem('TaskList', JSON.stringify(arr));

    document.querySelector('#task-modal').reset();
    document.querySelector('#task-modal-container').style.display = 'none';
  // }

  return {
    // addToDo
  }
}

export default Projects
