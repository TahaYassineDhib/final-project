// setting up variables 
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTaskMessage = document.querySelector(".no-task-message");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");

// focus on Input Field 
window.onload = function(){
    theInput.focus();
};

// adding the task 
theAddButton.onclick = function(){
    if (theInput.value ===''){
        console.log("No Value");
    }else{
        noTaskMessage.remove();

        let mainSpan = document.createElement("span");
        let deletebutton = document.createElement("span");
        let text = document.createTextNode(theInput.value);
        let deletetext = document.createTextNode("Delete");
        mainSpan.appendChild(text);
        mainSpan.className = 'task-box';
        deletebutton.appendChild(deletetext);
        deletebutton.className = 'delete';
        mainSpan.appendChild(deletebutton);
        tasksContainer.appendChild(mainSpan);
        theInput.value = '';
        theInput.focus();
        calculateTask()





    }
}

document.addEventListener('click',function(e){

    if (e.target.className == 'delete'){
        e.target.parentNode.remove();
    }
    if (e.target.classList.contains('task-box')  ){
        e.target.classList.toggle("finished");
    }
    calculateTask();
})
if (tasksContainer.childElementCount  == 0 ){
    createNoTasks();
}




function createNoTasks(){
    let messageSpan = document.createElement('span');
    let messagetext = document.createTextNode('No tasks to show');
    messageSpan.appendChild(messagetext);
    messageSpan.className= 'no-task-message';
    tasksContainer.appendChild(messageSpan);
}

function calculateTask(){
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
    tasksCompleted.innerHTML= document.querySelectorAll('.tasks-content .finished').length;
}