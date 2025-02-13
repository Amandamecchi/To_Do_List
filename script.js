document.getElementById("addButton").onclick = function(){
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    if (taskText == "") return;

    var li = document.createElement("li");
    li.textContent = taskText;

    var button = document.createElement("button");
    button.textContent = "Remover";
    button.className = "remove";
    button.onclick = function() {
        li.remove();
    };
    li.appendChild(button);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
};