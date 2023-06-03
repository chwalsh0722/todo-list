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
    this.tasks = [];
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

function addClasses(element, classes) {
  if (classes[0] === '') {
    return;
  }
  for (let i = 0; i < classes.length; i++) {
    element.classList.add(classes[i]);
  }
}

function divCreate(id, text, ...classes) {
  const div = document.createElement('div');
  div.id = id;
  if (text != '') {
    div.innerHTML = text;
  }
  addClasses(div, classes);
  return div;
}

function buttonCreate(id, onclick, buttonLabel, ...classes) {
  const button = document.createElement('button');
  button.id = id;
  button.innerHTML = buttonLabel;
  if (onclick != '') {
    button.onclick = onclick;
  }
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

function formCreate(id, action = "#", ...classes) {
  const form = document.createElement('form');
  form.id = id;
  form.action = action;
  return form;
}

function inputCreate(id, type) {
  const input = document.createElement('input');
  input.id = id;
  input.type = type;
  return input;
}

function labelCreate(id, labelFor, text) {
  const label = document.createElement('label');
  label.id = id;
  label.for = labelFor;
  label.innerHTML = text;
  return label;
}

function appendChildren(parent, ...children) {
  for (let i = 0; i < children.length; i++) {
    parent.appendChild(children[i]);
  }
}

function vertResize() {
  const heightElems = document.getElementById('center-page').clientHeight + document.getElementById('footer').clientHeight;
  const heightContent = document.getElementById('content').clientHeight;

  if (heightElems > heightContent) {
    const heightBody = document.body.clientHeight;
    const heightChange = heightElems - heightContent;
    document.body.style.height = heightBody + (heightChange) + 120 + 'px';
    console.log(document.body.clientHeight + 'px');
  }
}

function createNewProject() {
  var taskNum = 0;

  const projectFormID = "project-" + numProjects + "-form";
  const projectInputID = "project-" + numProjects + "-input";
  const projectLabelID = "project-" + numProjects + "-label";
  const ul = ulCreate('project');
  const projectForm = formCreate(projectFormID, '#', '');
  const projectInput = inputCreate(projectInputID, 'checkbox');
  const projectLabel = labelCreate(projectLabelID, projectInputID, 'PROJECT');

  appendChildren(pageBody, ul);
  appendChildren(ul, projectForm);
  appendChildren(projectForm, projectInput, projectLabel);
  
  taskNum = createNewTask(taskNum, ul);
  taskNum = createNewTask(taskNum, ul);
  
  numProjects++;
  vertResize();
}

function createNewTask(taskNum, project) {
  const taskFormID = "task-" + taskNum + "-form";
  const taskInputID = "task-" + taskNum + "-input";
  const taskLabelID = "task-" + taskNum + "-label";
  const li = liCreate('task-' + taskNum, '');
  const taskForm = formCreate(taskFormID, '#', '');
  const taskInput = inputCreate(taskInputID, 'checkbox');
  const taskLabel = labelCreate(taskLabelID, taskInputID, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac. Dolor purus non enim praesent elementum facilisis. Vitae purus faucibus ornare suspendisse sed. Libero nunc consequat interdum varius sit amet. Nam aliquam sem et tortor consequat id porta nibh. Urna et pharetra pharetra massa massa ultricies. Sollicitudin nibh sit amet commodo nulla facilisi. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Tincidunt praesent semper feugiat nibh.');

  appendChildren(project, li);
  appendChildren(li, taskForm);
  appendChildren(taskForm, taskInput, taskLabel);

  taskNum++;
  return taskNum;
}

let numProjects = 0;

const content = document.getElementById("content");
const centerPage = divCreate('center-page', '', 'grid-display');
const pageHeader = divCreate('page-header', '', 'font-andale', 'grid-display');
const headerText = divCreate('header-text', 'My TODO List', '', '');
const pageBody = divCreate('page-body', '', 'font-andale');
const newProjectButton = buttonCreate('new-project-button', createNewProject, '+ New Project', 'font-andale');
const footer = divCreate('footer', '', '');
const popupWrapper = divCreate('popup-wrapper');
const backgroundDim = divCreate('background-dim', '', '');
const popup = divCreate('popup', '', 'flex-column')
appendChildren(content, centerPage, footer);
appendChildren(centerPage, pageHeader, pageBody);
appendChildren(pageHeader, headerText, newProjectButton);
centerPage.appendChild(pageHeader, pageBody);
pageHeader.appendChild(headerText, newProjectButton);