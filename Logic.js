// The reference to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        alert('Opsie! please enter a task.'); 
        return
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click' , function(e){
        e.stopPropagation(); // Prevent triggering the li click event
        li.remove();
    });

    li.appendChild(deleteBtn); // Add the delete button to the list item

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li); // Add the new task to the list

    taskInput.value = ''; // Clear the input field

    taskInput.focus(); // Focus back to the input field
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

const existingTasks = document.querySelectorAll('#taskList li');
existingTasks.forEach(function(li) {

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering the li click event
        li.remove();
    });

    li.appendChild(deleteBtn); // Add the delete button to the list item

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
});
    