// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim input
        const taskText = taskInput.value.trim();

        // Check for empty string
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove Button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Assign onclick to remove li
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append removeBtn to li, and li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
