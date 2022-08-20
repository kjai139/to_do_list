import { homePage } from "./globalVar";
import { addTaskMenu } from "./Tasks";
import { format } from "date-fns";

const findProject = (projectName) => {
    let projID = projectName.target.id
    //  console.log(projectName.target)

    

    homePage.projectList.forEach(element => {
        // console.log(element.getName(),projID )
        // console.log(element)
        let eleId
        if (document.querySelector(`#${element.title}`) != null){
            eleId = document.querySelector(`#${element.title}`)
            eleId.classList.remove('selected')
        }
        

        
        
        // console.log(eleId)

        


        let eleName = element.getName()
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

    // console.log(proj.tasks)

    if (proj.tasks.length === 0) {
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
    } else {
        //display tasks

        proj.tasks.forEach(element => {
            console.log(element)
            let taskContainer = document.createElement('div')
            taskContainer.classList.add('taskDiv')

            let leftTaskContainer = document.createElement('div')
            leftTaskContainer.classList.add('leftTaskContainer')

            let taskCheckInput = document.createElement('input')
            taskCheckInput.setAttribute('type', 'checkbox')
            taskCheckInput.classList.add('checkbox')

            leftTaskContainer.appendChild(taskCheckInput)

            let rightTaskContainer = document.createElement('div')
            rightTaskContainer.classList.add('rightTaskContainer')

            let taskTitle = document.createElement('p')
            taskTitle.classList.add('taskTitle')
            taskTitle.textContent = `${element.title}`

            let taskDescription = document.createElement('p')
            taskDescription.classList.add('taskDescription')

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
        });


    }

    

}

export {displayProject, findProject}