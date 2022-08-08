import {Task} from './Tasks.js'
import Project from './Projects.js'

const displayProject = (proj) => {

    console.log(this)

    const contentContainer = document.querySelector('.rightContentContainer')

    const contentDiv = document.createElement('div')
    contentDiv.classList.add('contentDiv')

    const contentTitleDiv = document.createElement('div')
    

    const contentTitle = document.createElement('h2')
    contentTitle.textContent = `${proj.title}`

    contentTitleDiv.appendChild(contentTitle)
    contentDiv.appendChild(contentTitleDiv)

    contentContainer.appendChild(contentDiv)

    console.log(proj.tasks)

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

        rightTaskContainer.appendChild(taskTitle)
        rightTaskContainer.appendChild(taskDescription)
        rightTaskContainer.appendChild(taskDateBtn)

        taskContainer.appendChild(leftTaskContainer)
        taskContainer.appendChild(rightTaskContainer)

        contentDiv.appendChild(taskContainer)
    });


}

export {displayProject}