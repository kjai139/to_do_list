import {homePage} from './globalVar'
import {createProjDropBtn, displayProjDrop } from './buttons'
import { closeTaskModal } from './modals'
import { displayProject, displayAddTaskIcon } from './displayContent'
import {displayDueDateDrop} from './buttons.js'

class Task {
    constructor(
        title = 'Unknown', 
        description = 'Unknown', 
        dueDate = '',
        priority = '4',
        checklist = false,
        projectName = ''
        )
    {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.checklist = checklist
        this.projectName = projectName
    }
}    




    
    //add task
    const addTaskMenu = () => {
    
        
        


    

        const addTaskContainer = document.createElement('div')
        addTaskContainer.classList.add('addTaskContainer')

        

        const addTaskForm = document.createElement('form')
        addTaskForm.setAttribute('method', 'post')
        addTaskForm.setAttribute('id', 'addTaskForm')
        addTaskForm.setAttribute('name', 'addTaskForm')
        addTaskContainer.appendChild(addTaskForm)


        const taskName = document.createElement('textarea')
        // taskName.setAttribute('type', 'textarea')
        taskName.classList.add('txtAreas')
        taskName.setAttribute('id', 'taskName')
        taskName.setAttribute('name', 'taskName')
        taskName.setAttribute('rows', '1')
        taskName.setAttribute('placeholder', 'Task Name')
        taskName.setAttribute('required', 'yes')

        addTaskForm.appendChild(taskName)

        const taskDescription = document.createElement('textarea')
        
        taskDescription.classList.add('txtAreas')
        taskDescription.setAttribute('rows', '1')
        taskDescription.setAttribute('id', 'taskDescription')
        taskDescription.setAttribute('name', 'taskDescription')
        taskDescription.setAttribute('placeholder', 'Description')

        addTaskForm.appendChild(taskDescription)

        const bottomTaskContainer = document.createElement('div')
        bottomTaskContainer.classList.add('bottomTaskContainer')


        const dueDateBtn = document.createElement('button')
        const dueDateSvg = document.createElement('img')
        dueDateSvg.setAttribute('src', './svgs/btn_svgs/due-date.svg')

        const dueDateTxt = document.createElement('p')
        dueDateTxt.setAttribute('id', 'ddTxt')
        dueDateTxt.textContent = 'Due Date'
        dueDateBtn.setAttribute('id', 'dueDateBtn')
        dueDateBtn.setAttribute('name', 'dueDate')
        dueDateBtn.addEventListener('click', displayDueDateDrop)

        

        dueDateBtn.appendChild(dueDateSvg)
        dueDateBtn.appendChild(dueDateTxt)
        bottomTaskContainer.appendChild(dueDateBtn)
        addTaskForm.appendChild(bottomTaskContainer)


        //proj button

        requestAnimationFrame(createProjDropBtn)

        

        
        
        
        



        

        const submitBtnContainer = document.createElement('div')
        submitBtnContainer.classList.add('submitBtnContainer')

        const submitBtn = document.createElement('button')
        submitBtn.setAttribute('id', 'submitBtn')
        submitBtn.textContent = 'Add Task'
        submitBtn.addEventListener('click', addTask)

        const cancelBtn = document.createElement('button')
        cancelBtn.setAttribute('id', 'cancelBtn')
        cancelBtn.textContent = 'Cancel'
        cancelBtn.addEventListener('click', function(event){
            
            event.preventDefault()
            closeTaskModal()
           
        })


        submitBtnContainer.appendChild(cancelBtn)
        submitBtnContainer.appendChild(submitBtn)

        addTaskForm.appendChild(submitBtnContainer)

        

        document.body.appendChild(addTaskContainer)

        //function visible

        let turnVisible = () => {
            addTaskContainer.classList.add('visible')
            requestAnimationFrame(turnVisible)
        }
        
        


        taskName.select()

        //textarea overflow funct

        document.querySelectorAll('.txtAreas').forEach(item => {
            item.addEventListener('input', function () {
                // console.log(this.scrollHeight, this.clientHeight)
                this.style.height = 'auto'
                if (this.scrollHeight > this.clientHeight){
                    // console.log('true')
                    this.style.height = `${this.scrollHeight}px`
                } 
            })

        })

        //remove hidden
        requestAnimationFrame(turnVisible)
        
        //funct to cancel

        const overlay = document.createElement('div')
        overlay.classList.add('overlay')

        

        document.body.appendChild(overlay)
        

        overlay.addEventListener('click', closeTaskModal)



    }

    

    const addTask = (element) => {
        let addT = document.querySelector('#addTaskForm')
        
        let projLocation = document.querySelector('#dropBtnTxt').textContent

        if (addT.checkValidity()){
            element.preventDefault()

            let nTask = new FormData(document.querySelector('#addTaskForm'))

            let addTask = new Task
            addTask.title = nTask.get('taskName')
            addTask.description = nTask.get('taskDescription')
            addTask.dueDate = document.querySelector('#dueDateBtn').value
            

            homePage.projectList.forEach(element => {
                if (element.title == projLocation) {
                    element.tasks.push(addTask)
                    closeTaskModal()

                    let selection = document.querySelector('.selected') !=null

                    let selectedProj 

                    if (selection == false){
                        selectedProj = document.querySelector('#contentTitle').textContent
                        
                    } else {
                        selectedProj = document.querySelector('.selected').id
                    }

                    
                    if (selectedProj == element.id || selectedProj == element.title){
                        displayProject(element)
                        return

                    }
                    
                }
            });


        }

    }

    const removeTask = (target) => {
        let selectedProj = document.querySelector('#contentTitle').textContent

        let selectedTask = target.target.name

        let selectedTaskTitle = document.querySelector(`#${selectedTask}`).textContent

        let selectedDescription = document.querySelector(`#${selectedTask}d`).textContent

        console.log(selectedTask, selectedDescription)

        homePage.projectList.forEach(element => {
            if (element.title == selectedProj) {
                console.log('eletitle match selected proj')
                element.tasks.forEach(ele => {
                    console.log(ele)
                    if (selectedTaskTitle == ele.title && selectedDescription == ele.description ){
                        console.log('tasks matched for removal')
                        element.removeTask(ele)
                        let selectedDiv = document.querySelector(`#${selectedTask}div`)

                        selectedDiv.remove()
                        if (element.tasks.length == 0) {
                            displayAddTaskIcon()
                        }
                    }
                });
            }
        });
    }


export {Task, addTaskMenu, removeTask}

    


