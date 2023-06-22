// Get HTML elements
var taskInput = document.getElementById("taskInput");
var addTaskButton = document.getElementById("addTaskButton");
var taskList = document.querySelector("#taskList tbody");

// Add task when button is clicked
addTaskButton.addEventListener("click", function() {
  var task = taskInput.value;

  if (task !== "") {
    var newRow = taskList.insertRow();

    var taskCell = newRow.insertCell();
    taskCell.innerText = task;

    var actionsCell = newRow.insertCell();
    actionsCell.classList.add("actions");

    var editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", function() {
      var updatedTask = prompt("Enter updated task:", task);
      if (updatedTask !== null) {
        taskCell.innerText = updatedTask;
      }
    });
    actionsCell.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
      newRow.remove();
    });
    actionsCell.appendChild(deleteButton);

    // Clear input field
    taskInput.value = "";
  }
});

// Add task when Enter key is pressed
taskInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addTaskButton.click();
  }
});
