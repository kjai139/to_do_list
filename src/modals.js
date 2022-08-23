import { homePage } from "./globalVar"

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
    expandContainer.remove()
    overlay.remove()
}


const expandTaskModal = (target) => {

    


    let projTitle = document.querySelector('#contentTitle').textContent
    let selectedProj


    //dom
    let expandContainer = document.createElement('div')
    expandContainer.classList.add('expandContainer')


    let expandTopDiv = document.createElement('div')
    expandTopDiv.classList.add('expandTopDiv')

    let expandTopLeft = document.createElement('div')
    expandTopLeft.classList.add('expandTopLeft')
    let projectImg = document.createElement('img')

    let projectTxt = document.createElement('p')


    homePage.projectList.forEach(element => {
        if (element.title == projTitle){
            projectImg.setAttribute('src', `${element.img}`)
            projectTxt.textContent = `${element.title}`
            return
        }
    });

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



    document.body.appendChild(expandContainer)




    //overlay

    let overlay = document.createElement('div')
    overlay.classList.add('overlayG')
    document.body.appendChild(overlay)
    overlay.addEventListener('click', closeExpandModal)

}



export {closeProjModal, closeTaskModal, expandTaskModal}