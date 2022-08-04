class Task {
    constructor(
        title = 'Unknown', 
        description = 'Unknown', 
        dueDate ='Unknown',
        priority = 4,
        checklist = false,
        project = ''
        )
    {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.checklist = checklist
        this.project = project
    }

    
}

//add task
const addTaskMenu = () => {
    const addTaskContainer = document.createElement('div')
    addTaskContainer.classList.add('addTaskContainer')

    const addTaskForm = document.createElement('form')
    addTaskForm.setAttribute('method', 'post')
    addTaskForm.setAttribute('id', 'addTaskForm')
    addTaskContainer.appendChild(addTaskForm)


    const taskName = document.createElement('input')
    taskName.setAttribute('type', 'text')
    taskName.setAttribute('id', 'taskName')
    taskName.setAttribute('name', 'taskName')
    taskName.setAttribute('placeholder', 'Task Name')

    addTaskForm.appendChild(taskName)

    const taskDescription = document.createElement('input')
    taskDescription.setAttribute('type', 'text')
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

    dueDateBtn.appendChild(dueDateSvg)
    bottomTaskContainer.appendChild(dueDateBtn)
    addTaskForm.append(bottomTaskContainer)

    const projectBtn = document.createElement('button')



    const rightContentContainer = document.querySelector('.rightContentContainer')

    rightContentContainer.appendChild(addTaskContainer)



    taskName.select()


}

export {Task, addTaskMenu}