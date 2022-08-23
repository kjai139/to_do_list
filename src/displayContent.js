import { homePage } from "./globalVar";
import { addTaskMenu, removeTask } from "./Tasks";
import { format } from "date-fns";
import { expandTaskModal } from "./modals";

const findProject = (projectName) => {
    let projID = projectName.target.id
    console.log('proj name id', projectName.target.id)

    

    homePage.projectList.forEach(element => {
        // console.log(element.getName(),projID )
        // console.log(element)
        let eleId
        if (document.querySelector(`#${element.id}`) != null){
            eleId = document.querySelector(`#${element.id}`)
            eleId.classList.remove('selected')

            console.log(eleId, 'removed')
        }
        

        
        
        // console.log(eleId)

        


        let eleName = element.getId()
        if (eleName.match(projID)){
            console.log('match')
            displayProject(element)
            projectName.target.classList.add('selected')
            return
        }
    });

    
}





const displayProject = (proj) => {

    

    const contentContainer = document.querySelector('.rightContentContainer')
    contentContainer.textContent =''



    const contentDiv = document.createElement('div')
    contentDiv.classList.add('contentDiv')

    const contentTitleDiv = document.createElement('div')
    

    const contentTitle = document.createElement('h2')
    contentTitle.setAttribute('id', 'contentTitle')
    contentTitle.textContent = `${proj.title}`

    contentTitleDiv.appendChild(contentTitle)
    contentDiv.appendChild(contentTitleDiv)

    contentContainer.appendChild(contentDiv)

    console.log(proj.tasks, proj.tasks.length)

    if (proj.tasks.length === 0) {
        displayAddTaskIcon()
    } else {
        //display tasks
        let taskCounter = 1
        proj.tasks.forEach(element => {
            // console.log(element)
            
            let taskContainer = document.createElement('div')
            taskContainer.classList.add('taskDiv')
            taskContainer.setAttribute('id', `td${element.id}div`)
            

            let leftTaskContainer = document.createElement('div')
            leftTaskContainer.classList.add('leftTaskContainer')

            let taskCheckInput = document.createElement('input')
            taskCheckInput.setAttribute('type', 'checkbox')
            taskCheckInput.setAttribute('name', `td${element.id}`)
            taskCheckInput.classList.add('checkbox')
            taskCheckInput.addEventListener('change', removeTask)

            leftTaskContainer.appendChild(taskCheckInput)

            let rightTaskContainer = document.createElement('div')
            rightTaskContainer.classList.add('rightTaskContainer')
            rightTaskContainer.setAttribute('id', `task${element.id}`)
            

            let taskTitle = document.createElement('p')
            taskTitle.classList.add('taskTitle')
            taskTitle.setAttribute('id', `td${element.id}`)
            taskTitle.textContent = `${element.title}`
            taskTitle.addEventListener('click', expandTaskModal)

            let taskDescription = document.createElement('p')
            taskDescription.classList.add('taskDescription')
            taskDescription.setAttribute('id', `td${element.id}d`)
            taskDescription.addEventListener('click', expandTaskModal)

            taskDescription.textContent = `${element.description}`

            let taskDateBtn = document.createElement('button')
            taskDateBtn.setAttribute('id', 'taskDateBtn')

            let taskDateSvg = document.createElement('img')
            taskDateSvg.setAttribute('src', './svgs/btn_svgs/due-date.svg')

            taskDateBtn.appendChild(taskDateSvg)

            let taskDateTxt = document.createElement('p')
            taskDateTxt.textContent =`${element.dueDate}`

            taskDateBtn.appendChild(taskDateTxt)

            rightTaskContainer.appendChild(taskTitle)
            rightTaskContainer.appendChild(taskDescription)
            rightTaskContainer.appendChild(taskDateBtn)

            taskContainer.appendChild(leftTaskContainer)
            taskContainer.appendChild(rightTaskContainer)

            contentDiv.appendChild(taskContainer)
            taskCounter += 1
        });


    }

    

}

const displayAddTaskIcon = () => {
    let contentDiv = document.querySelector('.contentDiv')
    let addTaskDiv = document.createElement('div')
        addTaskDiv.classList.add('addTaskDiv')

        let addTaskImg = document.createElement('img')
        addTaskImg.setAttribute('src', './svgs/btn_svgs/task-plus.svg')

        let addTaskMsg = document.createElement('p')
        addTaskMsg.textContent = 'Add task'

        addTaskDiv.appendChild(addTaskImg)
        addTaskDiv.appendChild(addTaskMsg)

        addTaskDiv.addEventListener('click', addTaskMenu )

        contentDiv.appendChild(addTaskDiv)
}

export {displayProject, findProject, displayAddTaskIcon}