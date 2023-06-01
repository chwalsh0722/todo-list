//
const Project = (projectTitle, projectDescription, projectDueDate, projectPriority) => {
  let title = title;
  let description = description;
  let dueDate = dueDate;
  let priority = priority;

  const setTitle = (newTitle) => { title = newTitle; };
  const getTitle = () => { return title; };
  const setDescription = (newDescription) => { description = newDescription };
  const getDescription = () => { return description; };
  const setDueDate = (newDueDate) => { dueDate = newDueDate; };
  const getDueDate = () => { return dueDate; };
  const setPriority = (newPriority) => { priority = newPriority; };
  const getPriority = () => { return priority; };

  return {setTitle, getTitle, setDescription, getDescription, setDueDate, getDueDate, setPriority, getPriority};
}

const Task = (title, dueDate) => {
  let title = title;
  let dueDate = dueDate;

  const setTitle = (newTitle) => { title = newTitle; };
  const getTitle = () => { return title; };
  const setDueDate = (newDueDate) => { dueDate = newDueDate; };
  const getDueDate = () => { return dueDate; };

  return {setTitle, getTitle, setDueDate, getDueDate};
}

const Element = (type, id, src, url, ...classes) => {
  const type = type;
  const id = id;
  const src = src;
  const url = url;
  const classes = [classes];
  let numClasses = classes.length;

  const getElementType = () => { return type; };
  const getElementID = () => { return id; };
  const getElementSrc = () => { return src; };
  // TODO: function for returning all element's classes.
}

function pageLoad() {
  
}