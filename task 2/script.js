
function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("task-list");

    var taskItem = document.createElement("div");
    taskItem.className = "task";

    var taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    var taskDateTime = document.createElement("span");
    taskDateTime.className = "task-datetime";
    taskDateTime.textContent = getFormattedDateTime();

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function () {
        taskItem.classList.toggle("completed");
    };

    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskDateTime);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
}

function getFormattedDateTime() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return now.toLocaleDateString('en-US', options);
}
