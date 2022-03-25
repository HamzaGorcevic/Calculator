newTask = document.getElementById('newtask')
push = document.getElementById('push')
tasks = document.getElementById('tasks')
input = document.getElementById('input')

push.addEventListener('click',()=>{
    if(input.value.length < 1){
        alert('Unesite vrednost! ')
    }else{
    console.log('kliknuo pushs')
    tasks.classList.add('tasksStyle')
    tasks.innerHTML+=`<div id = 'divTasks'> <h1 id='naslovTasks'>${input.value}</h1> <button id='delete1'> Delete </button></div>`
    delete1 = document.querySelectorAll('#delete1')
    divTasks = document.querySelectorAll('#divTasks')
    input.value = ''
    tekstNaslov = document.getElementById('naslovTasks')
    tekstNaslov.style.marginLeft = '10px'
    for(i=0; i < delete1.length; i++){
        delete1[i].onclick = function(){
            this.parentNode.remove()
            console.log('hi')
        }
    }
    divTask = document.getElementById('divTasks')
    divTask.addEventListener('click',()=>{
        tekstNaslov.style.textDecoration = 'line-through'
        tekstNaslov.style.textDecorationColor = 'black'
    })
    }
})


console.log(push)