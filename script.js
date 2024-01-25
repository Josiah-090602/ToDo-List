const addTask = document.getElementById('addTask')
const tasksItem = document.getElementById('task-items')
const taskDate = document.getElementById('taskDate')
const taskPriority = document.getElementById('taskPriority')
const taskNote = document.getElementById('taskNote')



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
    }
    resetInputs()
})


//Reset Input
const resetInputs = () =>{
    taskDate.value = ''
    taskNote.value = ''
    taskPriority.value = ''
}