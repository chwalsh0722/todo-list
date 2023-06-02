class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }
  get title() { return this._title; }
  get dueDate() { return this._description; }

  set title(title) { this._title = title; }
  set dueDate(dueDate) { this._dueDate = dueDate; }
}

class Project {
  constructor(title, dueDate, description, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
  }
  get title() { return this._title; }
  get dueDate() { return this._description; }
  get description() { return this._description; }
  get priority() { return this._priority; }

  set title(title) { this._title = title; }
  set dueDate(dueDate) { this._dueDate = dueDate; }
  set description(description) { this._description = description; }
  set priority(priority) { this._priority = priority; }
}

const project = new Project('my', 'dad', 'is', 'gay');
console.log(project.description);

function addClasses(element, classes) {
  for (let i = 0; i < classes.length; i++) {
    element.classList.add(classes[i]);
  }
}

function divCreate(id, ...classes) {
  const div = document.createElement('div');
  div.id = id;
  addClasses(div, classes);
  return div;
}

function buttonCreate(id, onclick, ...classes) {
  const button = document.createElement('button');
  button.id = id;
  button.onclick(onclick);
  addClasses(button, classes);
  return button;
}

function ulCreate(...classes) {
  const ul = document.createElement('ul');
  addClasses(ul, classes);
  return ul;
}

function liCreate(id, ...classes) {
  const li = document.createElement('li');
  li.id = id;
  addClasses(li, classes);
  return li;
}

function formCreate(id, action = "#") {
  const form = document.createElement('form');
  form.id = id;
  form.action = action;
  return form;
}

function inputCreate(id, type) {
  const input = document.createElement('input');
  input.id = id;
  input.type = type;
  return type;
}

function labelCreate(id, labelFor) {
  const label = document.createElement('label');
  label.id = id;
  label.for = labelFor;
  return label;
}

// const pageElement = (type, id, src, url, ...classes) => {
//   const type = type;
//   const id = id;
//   const src = src;
//   const url = url;
//   const classes = [classes];
//   let numClasses = classes.length;

//   const getElementType = () => { return type; };
//   const getElementID = () => { return id; };
//   const getElementSrc = () => { return src; };
//   // TODO: function for returning all element's classes.

//   return {getElementType, getElementID, getElementSrc};
// }

// function pageLoad() {
//   // Create objects for all page elements.
//   const centerPage = pageElement('div', 'center-page', '', '', 'grid-display');

// }

// const divElements = [];