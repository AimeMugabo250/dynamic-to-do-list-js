// document.addEventListener('DOMContentLoaded', function() {
//     // Select DOM elements
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // Load tasks from Local Storage when page loads
//     loadTasks();

//     // Function to load tasks from Local Storage
//     function loadTasks() {
//         const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//         storedTasks.forEach(task => {
//             createTaskElement(task, false); // false means don't save to Local Storage again
//         });
//     }

//     // Function to create a task element (separated from addTask for reusability)
//     function createTaskElement(taskText, saveToStorage = true) {
//         // Create new list item
//         const li = document.createElement('li');
//         li.dataset.taskText = taskText; // Store task text in data attribute for easier removal
        
//         // Create task text span
//         const taskSpan = document.createElement('span');
//         taskSpan.textContent = taskText;
        
//         // Create remove button
//         const removeBtn = document.createElement('button');
//         removeBtn.textContent = "Remove";
//         removeBtn.className = "remove-btn";
        
//         // Add click event to remove button
//         removeBtn.onclick = function() {
//             removeTask(li, taskText);
//         };
        
//         // Append elements to the list item
//         li.appendChild(taskSpan);
//         li.appendChild(removeBtn);
        
//         // Add list item to the task list
//         taskList.appendChild(li);

//         // Save to Local Storage if needed
//         if (saveToStorage) {
//             saveTaskToStorage(taskText);
//         }
//     }

//     // Function to save a task to Local Storage
//     function saveTaskToStorage(taskText) {
//         const storedTasks = JSON.parse(localStorage.getItem('tasks') || [];
//         storedTasks.push(taskText);
//         localStorage.setItem('tasks', JSON.stringify(storedTasks));
//     }

//     // Function to remove a task from Local Storage
//     function removeTaskFromStorage(taskText) {
//         let storedTasks = JSON.parse(localStorage.getItem('tasks') || []);
//         storedTasks = storedTasks.filter(task => task !== taskText);
//         localStorage.setItem('tasks', JSON.stringify(storedTasks));
//     }

//     // Function to handle task removal (both from DOM and Local Storage)
//     function removeTask(taskElement, taskText) {
//         taskList.removeChild(taskElement);
//         removeTaskFromStorage(taskText);
//     }

//     // Function to add a new task
//     function addTask() {
//         // Get and trim the task text
//         const taskText = taskInput.value.trim();
        
//         // Check if the input is not empty
//         if (taskText === "") {
//             alert("Please enter a task!");
//             return;
//         }
        
//         // Create and add the task element
//         createTaskElement(taskText);
        
//         // Clear the input field
//         taskInput.value = "";
//     }

//     // Add task when button is clicked
//     addButton.addEventListener('click', addTask);
    
//     // Add task when Enter key is pressed
//     taskInput.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//             addTask();
//         }
//     });
// });
