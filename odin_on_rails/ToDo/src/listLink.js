import ShowAllTasks from './showAllTasks';

const ListLink = (lists) => {
  // Create links sorted by list name in A-Z order
  const oldTasks = JSON.parse(localStorage.getItem('TaskList'));

  // const sortByProject = oldTasks.sort(function(a, b) {
  //   const projectA = a.project.toUpperCase(); // Ignore upper & lower case
  //   const projectB = b.project.toUpperCase();
  //   if (projectA < projectB) {
  //     return -1;
  //   }
  //   if (projectA > projectB) {
  //     return 1;
  //   }
  //   // Name must be equal
  //   return 0;
  // });

  const showProjectsSidebar = () => {
    const dropdownContainer = document.createElement('div');
    let projectArr = [];

    for (let task in oldTasks) {
      projectArr.push(oldTasks[task].project);
    }

    let uniqueProjects = [...new Set(projectArr)];
    console.log(uniqueProjects);

    const ul = document.createElement('ul');
    ul.id = 'projects';

    uniqueProjects.forEach((item, i) => {
      const li = document.createElement('li');
      li.id = `project-${i}`;

      const link = document.createElement('a');
      link.id = `project-link-${i}`;
      link.innerHTML = item;
      link.addEventListener('click', (e) => {
        const allTasksWindow = document.querySelector('.task-container-display');
        const detailContainer = document.querySelector('#task-detail-window');
        if (allTasksWindow) {
          allTasksWindow.remove();
        }
        if (detailContainer) {
          detailContainer.remove();
        }
        e.stopPropagation();
        const showList = ShowAllTasks();
        showList.sortByList(link);
      });

      lists.appendChild(dropdownContainer);
      dropdownContainer.appendChild(ul);
      ul.appendChild(li);
      li.appendChild(link);
    });
  }

  return {
    showProjectsSidebar,
  }
}

export default ListLink
