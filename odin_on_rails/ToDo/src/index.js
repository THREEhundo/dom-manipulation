import ToDoItem from './todoItem';
import Sidebar from './sidebar';
import Projects from './projects';

const startUp = () => {
  const todoArray = [];
  Sidebar(todoArray);
}
startUp();

export default startUp
