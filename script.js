const addTask = document.getElementById('addTask')
const tasksItem = document.getElementById('task-items')
const taskDate = document.getElementById('taskDate')
const taskPriority = document.getElementById('taskPriority')
const taskNote = document.getElementById('taskNote')
const tasksTitle = document.getElementById('tasksTitle')



//Add Tasks Function
addTask.addEventListener("click", () => {
    if (taskNote.value === '' || 
        taskDate.value === '' || 
        taskPriority.value === '') {
            alert("Fill the Input Fields for your task!")
    } else {
        let listTask = document.createElement("li")
        listTask.textContent = taskNote.value
        tasksItem.appendChild(listTask)
        addDate(listTask)
        resetInputs()
        saveTasks();
    }
    
})


//Reset Input
const resetInputs = () =>{
    taskDate.value = ''
    taskNote.value = ''
    taskPriority.value = ''
}


//Remove Task
tasksItem.addEventListener("click", (clicked) => {
    if (clicked.target.tagName === "LI") {
        clicked.target.style.backgroundColor = "#C1F2B0"
        saveTasks()
    } else if (clicked.target.tagName === "IMG") {
        clicked.target.parentElement.remove()
        saveTasks()
    }
})



//add Date and Priority
const addDate = (addedList) => {
        let dateValue = document.createElement('span')
        dateValue.textContent = taskDate.value
        addedList.appendChild(dateValue)

        let priority = document.createElement('div')
        if (taskPriority.value === 'high') {
            priority.style.backgroundColor = "var(--red)"
        } else if (taskPriority.value === 'medium') {
            priority.style.backgroundColor = "var(--yellow)"
        } else {
            priority.style.backgroundColor = "var(--green)"
        }
        addedList.appendChild(priority)

        let deleteIcon = document.createElement('img')
        deleteIcon.src = "/img/trash.svg"
        addedList.appendChild(deleteIcon)
}

//save to local storage
const saveTasks = () =>{
        localStorage.setItem("task", tasksItem.innerHTML)
}

//show local Storage
const showSaveTasks = () => {
        tasksItem.innerHTML =  localStorage.getItem("task")
}


//Onload

window.onload = () => {
    showSaveTasks();
}
