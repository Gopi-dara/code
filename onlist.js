// Get references to the input field and task list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add event listener for the "Enter" key press
taskInput.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

// Function to delete a task
function deleteTask(button) {
  const listItem = button.parentNode;
  taskList.removeChild(listItem);
}
