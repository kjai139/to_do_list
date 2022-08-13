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
    target.preventDefault()
    let addTaskContainer = document.querySelector('.addTaskContainer')
    let overlay = document.querySelector('.overlay')
    addTaskContainer.classList.add('phaseout')
            addTaskContainer.addEventListener('transitionend', function(){
                addTaskContainer.remove()
                overlay.remove()
            })
}


export {closeProjModal, closeTaskModal}