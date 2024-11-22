const taskList = document.getElementById('TaskList');
const buttonAdd = document.getElementById('Add Button');
const input = document.getElementById('Input');

buttonAdd.addEventListener('click', function () {
    const taskValue = input.value.trim(); // Trim to avoid empty spaces
    if (taskValue) {
        // Create a new div for the task
        const taskDiv = document.createElement('div');
        taskDiv.className = 'd-flex justify-content-between align-items-center mb-2';

        // Create an element for the task text
        const taskText = document.createElement('span');
        taskText.textContent = taskValue;
        taskText.className = 'text-dark';

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-outline-danger btn-sm';

        deleteButton.addEventListener('click', function () {
            taskList.removeChild(taskDiv); // Remove the task div from the list
        });

        // Create the done button
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.className = 'btn btn-outline-success btn-sm';

        doneButton.addEventListener('click', function () {
            taskText.style.textDecoration = 'line-through'; // Strike-through the task
            taskText.style.color = 'gray'; // Change the color to gray
            doneButton.disabled = true; // Disable the Done button
        });

        // Append the text, delete button, and done button to the task div
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(doneButton);
        taskDiv.appendChild(deleteButton);

        // Add the task div to the task list
        taskList.appendChild(taskDiv);

        // Clear the input field
        input.value = '';
    } else if (input.value === '') {
        alert('Please enter a task before adding!');
    }
});

