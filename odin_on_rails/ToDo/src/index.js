import ToDoItem from './todoItem';
import Sidebar from './sidebar';

const startUp = () => {
  const todoArray = [];
  Sidebar(todoArray);
}
startUp();

export default startUp
