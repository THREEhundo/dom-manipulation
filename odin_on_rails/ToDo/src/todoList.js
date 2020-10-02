const Lists = (list) => {
  // Create Lists Object
  let title = list.title;

  const getTitle = () => title;
  // Add List
  // Edit List Name
  const editTitle = (newTitle) => title = newTitle;
  // Delete List
  const deleteList = (list) => delete list;
  // Repopulate Lists
s
  // Add To Do Item to List

  return {
    getTitle,
    editTitle,
    deleteList
  }
}

export {
  Lists
}
