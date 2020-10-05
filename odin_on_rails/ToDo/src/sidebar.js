const Sidebar = () => {
  const createTask = document.querySelector('#create-task');
  const allTasks = document.querySelector('#all-tasks');
  const lists = document.querySelector('#lists');
  const calendar = document.querySelector('#calendar');

  // Create Task Modal
  const taskModal = () => {
    const popUp = document.createElement('div');
    popUp.id = 'task-modal';
  }

  const createTaskEventListener = createTask.addEventListener('click', taskModal)

  return {
    createTaskEventListener
  }
}

export default Sidebar
