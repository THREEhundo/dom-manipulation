import ToDoItem from './todoItem';

const Projects = (arr) => {

  // Add Task to todoArray from CreateTask
  const addToDo = (arr) => {
    const title = document.querySelector('#list-name').value;
    const dueDate = document.querySelector('#start').value;
    const priority = 'low';
    const note = document.querySelector('#notes').value;
    const project = document.querySelector('#project').value;
    let task = ToDoItem(title, dueDate, priority, note, project);
    arr.push(task);

    document.querySelector('#task-modal').reset();
    document.querySelector('#task-modal-container').style.display = 'none';

    // Add to localStorage
    localStorage.setItem('TaskList', JSON.stringify(arr));
    console.log({dueDate,priority,note,project});
  }

  return {
    addToDo
  }
}

export default Projects
