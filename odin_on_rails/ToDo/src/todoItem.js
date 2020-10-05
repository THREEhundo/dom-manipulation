const ToDoItem = (data) => {
  let title = data.title;
  let description = data.description;
  let dueDate = data.dueDate;
  let priority = data.priority;
  let note = data.note;
  let checklist = data.checklist;
  let finished = false;

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getNote = () => note;
  const getChecklist = () => checklist;

  const editTitle = (newTitle) => title = newTitle;
  const editDescription = (newDescription) => description = newDescription;
  const editDueDate = (newDueDate) => dueDate = newDueDate;
  const editPriority = (newPriority) => priority = newPriority;
  const editNote = (newNote) => note = newNote;
  // const addChecklistItem => (newChecklistItem) => checklist.push(newChecklistItem);
  // const deleteChecklistItem => (checklistItemIndex) => checklist.splice(checklistItemIndex, 1);
  // const editChecklistItem => (checklistItemIndex, text) => checklist.splice(checklistItemIndex, 1 text);
  const toggleFinished = () => finished = !finished;
  const isFinished = () => finished;

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getNote,
    getChecklist,
    editTitle,
    editDescription,
    editDueDate,
    editPriority,
    editNote,
    // addChecklistItem,
    // deleteChecklistItem,
    // editChecklistItem,
    toggleFinished,
    isFinished,
    title,
    description,
    dueDate,
    priority,
    note,
    finished
  }
}

export default ToDoItem
