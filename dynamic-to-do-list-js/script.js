document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // don't save again
    }

    // Function to save tasks array back to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a task
    function addTask(taskText, save = true) {
        if (!taskText || !taskText.trim()) return;

        const li = document.createElement('li');
        li.className = 'task-item';

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';

        removeBtn.addEventListener('click', () => {
            li.remove();
            // Update tasks array after removal
            const updatedTasks = Array.from(taskList.querySelectorAll('.task-text')).map(el => el.textContent);
            saveTasks(updatedTasks);
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            saveTasks(storedTasks);
        }
    }

    // Form submission handler
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = taskInput.value;
        if (value.trim() !== '') {
            addTask(value);
            taskInput.value = '';
        }
    });

    // Initial load
    loadTasks();
});
