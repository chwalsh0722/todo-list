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

function buttonCreate(id, type, onclick, buttonLabel, ...classes) {
  const button = document.createElement('button');
  button.id = id;
  button.type = type;
  button.innerHTML = buttonLabel;
  if (onclick != '') {
    button.onclick = onclick;
  }
  addClasses(button, classes);
  return button;
}

function ulCreate(id, ...classes) {
  const ul = document.createElement('ul');
  ul.id = id;
  addClasses(ul, classes);
  return ul;
}

function olCreate(id, type, ...classes) {
  const ol = document.createElement('ol');
  ol.id = id;
  ol.type = type;
  addClasses(ol, classes);
  return ol;
}

function liCreate(id, ...classes) {
  const li = document.createElement('li');
  if (id != '') {
    li.id = id;
  }
  addClasses(li, classes);
  return li;
}

function formCreate(id, action = "#", ...classes) {
  const form = document.createElement('form');
  form.id = id;
  form.action = action;
  addClasses(form, classes);
  return form;
}

function inputCreate(id, type, placeholder, size = 20) {
  const input = document.createElement('input');
  input.placeholder = placeholder;
  input.id = id;
  input.type = type;
  input.size = size;
  return input;
}

function textareaCreate(id, rows, cols, name, placeholder, ...classes) {
  const textarea = document.createElement('textarea');
  textarea.id = id;
  textarea.rows = rows;
  textarea.cols = cols;
  textarea.name = name;
  textarea.placeholder = placeholder;
  addClasses(textarea, classes);
  return textarea;
}

function labelCreate(id, labelFor, text, ...classes) {
  const label = document.createElement('label');
  if (id != '') {
    label.id = id;
  }
  addClasses(label, classes);
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

// Recursively remove children from parent node.
function removeChildren(parent, noMoreChildren) {
  while (parent.hasChildNodes) {
    let child = parent.firstChild;
    if (noMoreChildren === true) {
      parent.removeChild(child);
      noMorechildren = false;
    }

    // If parent's child has children, recurse.
    // Otherwise remove child.
    if (!noMoreChildren) {
      if (child != null) {
        noMoreChildren = removeChildren(child, noMoreChildren);
      } else {
        return true;
      }
    } else {
      return false;
    }

  }
}

function addTask() {
  numTasks++;
  const task = liCreate('task-' + numTasks, '');
  const input = inputCreate('task-input-' + numTasks, 'text', 'Task #' + numTasks, 25);
  input.style.display = 'list-item';
  const tasksList = document.getElementById('tasks-list');
  appendChildren(tasksList, task, input);
}

function loadUserData(projectTitle, projectDescription, projectDueDate, tasks) {
  const projectFormID = "project-" + numProjects + "-form";
  const projectInputID = "project-" + numProjects + "-input";
  const projectLabelID = "project-" + numProjects + "-label";
  const ul = ulCreate('project-' + numProjects, 'project');
  const projectForm = formCreate(projectFormID, '#', '');
  const projectInput = inputCreate(projectInputID, 'checkbox');
  const projectLabel = labelCreate(projectLabelID, projectInputID, projectTitle, '');

  appendChildren(pageBody, ul);
  appendChildren(ul, projectForm);
  appendChildren(projectForm, projectInput, projectLabel);

  for (let i = 0; i < tasks.length; i++) {
    taskNum = createNewTask(taskNum, ul);
  }
// const projectFormID = "project-" + numProjects + "-form";
// const projectInputID = "project-" + numProjects + "-input";
// const projectLabelID = "project-" + numProjects + "-label";
// const ul = ulCreate('project');
// const projectForm = formCreate(projectFormID, '#', '');
// const projectInput = inputCreate(projectInputID, 'checkbox');
// const projectLabel = labelCreate(projectLabelID, projectInputID, 'PROJECT');

// appendChildren(pageBody, ul);
// appendChildren(ul, projectForm);
// appendChildren(projectForm, projectInput, projectLabel);

// taskNum = createNewTask(taskNum, ul);
// taskNum = createNewTask(taskNum, ul);
  taskNum = 0;
}

function transferInputs() {
  // Store user inputs in variables.
  const projectTitle = document.getElementById('project-title-input');
  const projectDescription = document.getElementById('project-description-input');
  const projectDueDate = document.getElementById('project-due-date-input');
  const tasksList = document.getElementById('tasks-list');
  const tasks = [];
  let tasksnum = tasksList.getElementsByTagName('input');
  for (let i = 0; i < tasksnum; i++) {
    let taskPtr = i + 1;
    const currentTask = document.getElementById('task-input-' + taskPtr).value;
    tasks.push(currentTask);
  }
  const userData = [
    projectTitle.value,
    projectDescription.value,
    projectDueDate.value,
    tasks
  ];

  loadUserData(projectTitle.value, projectDescription.value, projectDueDate.value, tasks);
  closePopup();
}

function closePopup() {
  const popupWrapper = document.getElementById('popup-wrapper');
  const content = document.getElementById('content');
  let foo = removeChildren(popupWrapper, false);
  content.removeChild(popupWrapper);
}

function foo() {
  return;
}

function drawNewProjectPopup() {
  const popupWrapper = divCreate('popup-wrapper', '', 'flex-column');
  const popup = divCreate('popup', '', 'flex-column');
  const popupForm = formCreate('popup-form', '#', 'grid-display');
  const popupHeader = divCreate('popup-header', 'New Project', 'flex-row', 'font-andale');
  const list = ulCreate('popup-list', 'flex-column');
  const listItems = [
    liCreate('', 'project-form-item'),
    liCreate('', 'project-form-item'),
    liCreate('', 'project-form-item')
  ];
  const labels = [
    labelCreate('project-title-label', 'project-title-input', 'Project Title', 'font-andale'),
    labelCreate('project-description-label', 'project-description-input', 'Description', 'font-andale'),
    labelCreate('project-due-date-label', 'project-due-date-input', 'Due Date', 'font-andale')
  ];
  const inputs = [
    inputCreate('project-title-input', 'text', '', 51),
    textareaCreate('project-description-input', 5, 60, 'project-description-input', 'Description...'),
    inputCreate('project-due-date-input', 'date', '')
  ];
  const tasksWrapper = divCreate('tasks-wrapper', '', 'flex-column');
  const tasksList = olCreate('tasks-list', '1', '');
  const addTaskButton = buttonCreate('add-task-button', 'button', addTask, '+ Add Task', 'popup-form-button');
  const popupFooter = divCreate('popup-footer', '', 'flex-row');
  const submitButton = buttonCreate('submit-button', 'button', transferInputs, 'Submit', 'popup-form-button');
  const cancelButton = buttonCreate('cancel-button', 'button', closePopup, 'Cancel', 'popup-form-button');

  const content = document.getElementById('content');
  appendChildren(content, popupWrapper);
  appendChildren(popupWrapper, popup);
  appendChildren(popup, popupForm);
  appendChildren(popupForm, popupHeader, list, tasksWrapper, popupFooter);
  appendChildren(tasksWrapper, tasksList, addTaskButton);
  appendChildren(list, listItems[0], listItems[1], listItems[2]);
  appendChildren(listItems[0], labels[0], inputs[0]);
  appendChildren(listItems[1], labels[1], inputs[1]);
  appendChildren(listItems[2], labels[2], inputs[2]);
  appendChildren(popupFooter, submitButton, cancelButton);
}

function createNewProject() {
  drawNewProjectPopup();
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
const newProjectButton = buttonCreate('new-project-button', 'button', createNewProject, '+ New Project', 'font-andale');
const footer = divCreate('footer', '', '');
const popupWrapper = divCreate('popup-wrapper');
const backgroundDim = divCreate('background-dim', '', '');
const popup = divCreate('popup', '', 'flex-column')
appendChildren(content, centerPage, footer);
appendChildren(centerPage, pageHeader, pageBody);
appendChildren(pageHeader, headerText, newProjectButton);
centerPage.appendChild(pageHeader, pageBody);
pageHeader.appendChild(headerText, newProjectButton);

let numTasks = 0;