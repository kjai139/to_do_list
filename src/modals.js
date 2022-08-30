import { isThisHour } from "date-fns"
import { homePage } from "./globalVar"
import { removeTask } from "./Tasks"

const closeProjModal = (target) => {
    
    let addProjContainer = document.querySelector('.addProjContainer')
    let overlay = document.querySelector('.overlay')
    addProjContainer.classList.add('phaseout')
            addProjContainer.addEventListener('transitionend', function(){
                addProjContainer.remove()
                overlay.remove()
            })
}


const closeTaskModal =(target) => {
    
    let addTaskContainer = document.querySelector('.addTaskContainer')
    let overlay = document.querySelector('.overlay')
    addTaskContainer.classList.add('phaseout')
            addTaskContainer.addEventListener('transitionend', function(){
                addTaskContainer.remove()
                overlay.remove()
            })
}

const closeExpandModal = (target) => {
    let expandContainer = document.querySelector('.expandContainer')
    let overlay = document.querySelector('.overlayG')
    expandContainer.classList.add('phaseout2')
    expandContainer.addEventListener('transitionend', function() {
        expandContainer.remove()
        overlay.remove()
    } )
    
}


const expandTaskModal = (target) => {

    


    // let projTitle = document.querySelector('.contentTitle').title
    let selectedSplit = target.target.id.split('-')
    let selectedProj = selectedSplit[0]
    let selectedIndex = selectedSplit[1]
    

    console.log(selectedIndex)


    //dom
    let expandContainer = document.createElement('div')
    expandContainer.classList.add('expandContainer')


    let expandTopDiv = document.createElement('div')
    expandTopDiv.classList.add('expandTopDiv')

    let expandTopLeft = document.createElement('div')
    expandTopLeft.classList.add('expandTopLeft')
    let projectImg = document.createElement('img')

    let projectTxt = document.createElement('p')


    

    expandTopLeft.appendChild(projectImg)
    expandTopLeft.appendChild(projectTxt)

    let expandTopRight = document.createElement('div')
    expandTopRight.classList.add('expandTopRight')

    let nextTaskArrowBtn = document.createElement('button')
    let nextTaskArrowImg = document.createElement('img')
    nextTaskArrowImg.setAttribute('src', './svgs/btn_svgs/down-arrow.svg')

    nextTaskArrowBtn.appendChild(nextTaskArrowImg)

    let prevTaskArrowBtn = document.createElement('button')
    let prevTaskArrowImg = document.createElement('img')

    prevTaskArrowImg.setAttribute('src', './svgs/btn_svgs/up-arrow.svg')
    prevTaskArrowBtn.appendChild(prevTaskArrowImg)

    expandTopRight.appendChild(prevTaskArrowBtn)
    expandTopRight.appendChild(nextTaskArrowBtn)

    let closeModalBtn = document.createElement('button')
    let closeModalImg = document.createElement('img')
    closeModalImg.setAttribute('src', './svgs/btn_svgs/close.svg')

    closeModalBtn.appendChild(closeModalImg)

    expandTopRight.appendChild(closeModalBtn)

    expandTopDiv.appendChild(expandTopLeft)
    expandTopDiv.appendChild(expandTopRight)

    expandContainer.appendChild(expandTopDiv)


    //mid sect

    let expandContentDiv = document.createElement('div')
    expandContentDiv.classList.add('expandContentDiv')

    let expandBotLeftContainer = document.createElement('div')
    expandBotLeftContainer.classList.add('expandBotLeftContainer')

    let expandBotRightContainer = document.createElement('div')

    expandContainer.appendChild(expandContentDiv)

    expandContentDiv.appendChild(expandBotLeftContainer)
    expandContentDiv.appendChild(expandBotRightContainer)

    let taskCont = document.createElement('div')

    let leftPartDiv = document.createElement('div')

    let rightPartDiv = document.createElement('div')

    let taskCheckInput = document.createElement('input')
    taskCheckInput.setAttribute('type', 'checkbox')
    taskCheckInput.setAttribute('name', `${selectedProj}-${selectedIndex}`)
    taskCheckInput.classList.add('checkbox')
    taskCheckInput.addEventListener('change', function(target) {
        removeTask(target)
        closeExpandModal()
    })

    leftPartDiv.appendChild(taskCheckInput)

    taskCont.appendChild(leftPartDiv)

    let taskN = document.createElement('p')
    taskN.classList.add('modalTaskName')

    let taskD = document.createElement('p')
    taskD.classList.add('modalTaskDescription')

    rightPartDiv.appendChild(taskN)
    rightPartDiv.appendChild(taskD)


    taskCont.appendChild(rightPartDiv)

    expandBotLeftContainer.appendChild(taskCont)

    let projectNameDiv = document.createElement('div')
    projectNameDiv.classList.add('labelDiv')

    projectNameDiv.textContent = 'Project'

    expandBotRightContainer.appendChild(projectNameDiv)

    expandBotRightContainer.classList.add('expandBotRightCont')

    //projbtn
    let projBtnDiv = document.createElement('div')
    projBtnDiv.classList.add('modalDiv')
    let projBtn = document.createElement('button')
    let projBtnImg = document.createElement('img')
    let projBtnTxt = document.createElement('p')

    projBtnImg.classList.add('modalImg')
    projBtn.classList.add('modalBtn')

    projBtn.appendChild(projBtnImg)
    projBtn.appendChild(projBtnTxt)

    projBtnDiv.appendChild(projBtn)

    expandBotRightContainer.appendChild(projBtnDiv)

    //due date btn

    let ddLabel = document.createElement('div')
    ddLabel.textContent = 'Due date'
    ddLabel.classList.add('labelDiv')

    expandBotRightContainer.appendChild(ddLabel)

    let ddBtnDiv = document.createElement('div')
    ddBtnDiv.classList.add('modalDiv')


    let ddBtn = document.createElement('button')
    ddBtn.classList.add('modalBtn')

    let ddBtnImg = document.createElement('img')
    ddBtnImg.classList.add('modalImg')
    let ddBtnTxt = document.createElement('p')
    ddBtnTxt.textContent = 'None'

    ddBtn.appendChild(ddBtnImg)
    ddBtn.appendChild(ddBtnTxt)
    ddBtnDiv.appendChild(ddBtn)

    expandBotRightContainer.appendChild(ddBtnDiv)

    //prior btn

    let pLabel = document.createElement('div')
    pLabel.textContent = 'Priority'
    pLabel.classList.add('labelDiv')

    expandBotRightContainer.appendChild(pLabel)

    let pBtnDiv = document.createElement('div')
    pBtnDiv.classList.add('modalDiv')


    let pBtn = document.createElement('button')
    pBtn.classList.add('modalBtn')

    let pBtnImg = document.createElement('img')
    pBtnImg.classList.add('modalImg')
    let pBtnTxt = document.createElement('p')
    pBtnTxt.textContent = ''

    

    pBtn.appendChild(pBtnImg)
    pBtn.appendChild(pBtnTxt)
    pBtnDiv.appendChild(pBtn)

    expandBotRightContainer.appendChild(pBtn)

    //





    homePage.projectList.forEach(element => {
        if (element.id == selectedProj){
            projectImg.setAttribute('src', `${element.img}`)
            projectTxt.textContent = `${element.title}`

            projBtnImg.setAttribute('src', `${element.img}`)
            projBtnTxt.textContent = `${element.title}`

            element.tasks.forEach(element => {
                if (element.id == selectedIndex){
                    taskN.textContent = `${element.title}`
                    taskD.textContent = `${element.description}`
                    pBtnImg.setAttribute('src', `./svgs/btn_svgs/pflag${element.priority}.svg`)
                    pBtnTxt.textContent = `P${element.priority}`
                    if (element.dueDate.length > 0) {
                        ddBtnTxt.textContent = `${element.dueDate}`
                    }
                }
            });
        }
    });




    document.body.appendChild(expandContainer)




    //overlay

    let overlay = document.createElement('div')
    overlay.classList.add('overlayG')
    document.body.appendChild(overlay)
    overlay.addEventListener('click', closeExpandModal)

}



export {closeProjModal, closeTaskModal, expandTaskModal}