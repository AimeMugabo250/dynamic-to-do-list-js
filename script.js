document.addEventListener('DOMContentLoaded', function() {
            // Select DOM elements
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');

            // Load tasks from Local Storage when page loads
            loadTasks();

            // Function to load tasks from Local Storage
            function loadTasks() {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.forEach(task => {
                    createTaskElement(task, false);
                });
            }

            // Function to create a task element
            function createTaskElement(taskText, saveToStorage = true) {
                const li = document.createElement('li');
                li.classList.add('task-item');
                li.dataset.taskText = taskText;

                const taskSpan = document.createElement('span');
                taskSpan.classList.add('task-text');
                taskSpan.textContent = taskText;
                
                const removeBtn = document.createElement('button');
                removeBtn.classList.add('remove-btn');
                removeBtn.textContent = "Remove";
                
                removeBtn.onclick = function() {
                    removeTask(li, taskText);
                };
                
                li.appendChild(taskSpan);
                li.appendChild(removeBtn);
                taskList.appendChild(li);

                if (saveToStorage) {
                    saveTaskToStorage(taskText);
                }
            }

            // Function to save a task to Local Storage
            function saveTaskToStorage(taskText) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }

            // Function to remove a task from Local Storage
            function removeTaskFromStorage(taskText) {
                let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks = storedTasks.filter(task => task !== taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }

            // Function to handle task removal
            function removeTask(taskElement, taskText) {
                taskList.removeChild(taskElement);
                removeTaskFromStorage(taskText);
            }

            // Function to add a new task
            function addTask() {
                const taskText = taskInput.value.trim();
                
                if (taskText === "") {
                    alert("Please enter a task!");
                    return;
                }
                
                createTaskElement(taskText);
                taskInput.value = "";
            }

            // Event listeners
            addButton.addEventListener('click', addTask);
            
            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask();
                }
            });
        });
