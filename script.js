// function addTask(){
//     const taskInput = document.getElementById("taskInput");
//     let text = taskInput.value
//     if (taskInput.value === "" || taskInput.value.empty) {
//         alert("Please add a task");
//         return;
//     }
    

//     const taskList = document.getElementById("taskList");
//     // const task = document.createElement("li")

//     // const div = document.createElement('div');
//     // const input = document.createElement("input");
//     // input.setAttribute("type", "checkbox")


//     // const span = document.createElement("span");
//     // span.innerText=text

//     // div.appendChild(input)
//     // div.appendChild(span)

//     // task.appendChild(div)

//     // const deleteBtn = document.createElement("button");
//     // deleteBtn.id = "deleteBtn"
//     // deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    
    
//     // task.appendChild(deleteBtn)

//     // taskList.appendChild(task)





//     taskInput.value = "";

//     taskList.innerHTML += `<li>
//                 <div>
//                   <input type="checkbox"> 
//                   <span>${text}</span>
//                 </div>
//                 <div class="t">
//                   <button id="editBtn"><i class="fa-solid fa-edit"></i></button>
//                   <button id="deleteBtn"><i class="fa-solid fa-trash"></i></button>
//                 </div>
//               </li> `
//     deleteBtn.addEventListener('click', deleteTask);
//     input.addEventListener('click', strikethrough);
// }

// function strikethrough(e){
    
//     taskItem.classList.toggle("line-through")
// }

// function deleteTask(e){
//     const taskItem = e.target.closest('li');
//     taskItem.remove()
// }

// const addBtn = document.getElementById("addTaskBtn");
// addBtn.addEventListener("click", addTask) 
    
// const taskInput = document.getElementById("taskInput");
// taskInput.addEventListener("keydown",function(e){
//     if(e.key === "Enter"){
//         addTask()
//     }
// })  
// 





const addTask = () => {
    const taskInput = document.querySelector("#taskInput")
    const extractText = taskInput.value
    const text = extractText.trim()
    if (text == ""){
        return
    }
    
    let task = new Array()
    task.push(text)

    createTask(text)
}

const deleteTask = (e) => {
    e.target.closest('li').remove()
}


const editTask = (e) => {
    const taskItem = e.target.closest('li').firstChild
    const tasktext = taskItem.querySelector('span').innerText
    console.log(taskItem)
    // taskItem.innerHTML = `<div><input type = "text" id="editForm" value="${tasktext}">
    // </div>`
    const task = e.target.closest('li')
    task.innerHTML = `<div><input type = "text" id="editForm" value="${tasktext}"></div>
                <div class="taskBtns">
                  <button id="confirmBtn"><i class="fa-solid fa-check"></i></button>
                  `

    document.querySelectorAll('#confirmBtn').forEach(button=>{
        button.addEventListener('click',confirmEdit)
    })
}


const createTask = (text) => {
    const taskList = document.querySelector("#taskList")
    const listItem = document.createElement("li")
    listItem.innerHTML = `<div>
                  <input type="checkbox"> 
                  <span>${text}</span>
                </div>
                <div class="taskBtns">
                  <button id="editBtn"><i class="fa-solid fa-edit"></i></button>
                  <button id="deleteBtn"><i class="fa-solid fa-trash"></i></button>
                </div>`
    taskList.appendChild(listItem)

    document.querySelectorAll('#deleteBtn').forEach(button=>{
        button.addEventListener('click',deleteTask)
    })

    document.querySelectorAll('#editBtn').forEach(button=>{
        button.addEventListener('click',editTask)
    })

    taskInput.value = ""
}
const confirmEdit = (e) => {
    const newValue = e.target.closest('li').querySelector('#editForm').value
    if (newValue == "") {
        alert("Please add a task")
        return newValue
    }
    createTask(newValue)
    deleteTask(e)
    

}

const addBtn = document.querySelector("#addTaskBtn");

addBtn.addEventListener("click", addTask);

addBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();  
        console.log("Enter key pressed");
    }
})