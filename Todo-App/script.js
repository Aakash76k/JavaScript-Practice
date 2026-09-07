let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
    let task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    // Create li
    let li = document.createElement("li");

    // Task text
    let taskText = document.createElement("span");
    taskText.textContent = task;

    li.appendChild(taskText);

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    li.appendChild(editBtn);

    editBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        // Task ko input mein show karo
        taskInput.value = taskText.textContent;

        // Input par focus
        taskInput.focus();

        // Add button ko Update banao
        addBtn.textContent = "Update";

        // Update button click
        addBtn.onclick = function () {
            let updatedTask = taskInput.value.trim();

            if (updatedTask === "") {
                return;
            }

            taskText.textContent = updatedTask;

            taskInput.value = "";
            addBtn.textContent = "Add";

            // Normal Add functionality wapas
            addBtn.onclick = null;
        };
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation();

        li.remove();
    });

    // Complete / Uncomplete
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Add task
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});