import {homePage} from './globalVar'

class Task {
    constructor(
        title = 'Unknown', 
        description = 'Unknown', 
        dueDate ='Unknown',
        priority = 4,
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
    const addTaskMenu = (selected) => {
    
        
        console.log(selected.project)


    

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
        dueDateBtn.textContent = 'Due Date'
        dueDateBtn.setAttribute('id', 'dueDateBtn')

        dueDateBtn.appendChild(dueDateSvg)
        bottomTaskContainer.appendChild(dueDateBtn)
        addTaskForm.appendChild(bottomTaskContainer)


        //proj button

        //working
        
        const dropDownMenu = document.createElement('select')
        dropDownMenu.setAttribute('id', 'dropDownList')


        homePage.projectList.forEach(element => {
            
            let option = document.createElement('option')
            let optionDiv = document.createElement('div')
            let optionImg = document.createElement('img')
            let optionText = document.createElement('p')

            optionImg.setAttribute('src', `${element.img}`)
            optionText.textContent = `${element.title}`

            optionDiv.appendChild(optionImg)
            optionDiv.appendChild(optionText)

            option.appendChild(optionDiv)
            dropDownMenu.appendChild(option)
        });

    

        



        

        const submitBtnContainer = document.createElement('div')
        submitBtnContainer.classList.add('submitBtnContainer')

        const submitBtn = document.createElement('button')
        submitBtn.setAttribute('id', 'submitBtn')
        submitBtn.textContent = 'Add Task'

        const cancelBtn = document.createElement('button')
        cancelBtn.setAttribute('id', 'cancelBtn')
        cancelBtn.textContent = 'Cancel'


        submitBtnContainer.appendChild(cancelBtn)
        submitBtnContainer.appendChild(submitBtn)

        addTaskForm.appendChild(submitBtnContainer)

        // const rightContentContainer = document.querySelector('.rightContentContainer')

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

        const body = document.querySelector('body')

        body.appendChild(overlay)
        

        overlay.addEventListener('click', function() {
            addTaskContainer.classList.add('phaseout')
            addTaskContainer.addEventListener('transitionend', function(){
                addTaskContainer.remove()
                overlay.remove()
            })
            
        })



    }


export {Task, addTaskMenu}

    

