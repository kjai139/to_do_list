import { homePage } from "./globalVar"
import { closeProjModal } from "./modals"
import {findProject} from "./displayContent"

class Project {
    constructor(name){
        this.tasks =[]
        this.title = name
        this.img = './svgs/circle-p1.svg'
        this.priority = '1'
        this.selected = false
        this.id = 'Inbox'
    }

    getName = () => {
        return this.title
    }

    getId = () => {
        return this.id
    }
    
    addTask = (task) => {
        if (this.tasks.includes(task)){
            console.log('obj alrdy exist')
        } else {
            this.tasks.push(task)
        }
    }

    removeTask = (task) => {
        if (this.tasks.includes(task)){

            let taskIndex = this.tasks.indexOf(task)
            this.tasks.splice(taskIndex, 1)

            console.log(this.tasks)
        }
    }
   
}

const addProjectMenu = () => {
    let addProjContainer = document.createElement('div')
    addProjContainer.classList.add('addProjContainer')

    let logoDiv = document.createElement('div')
    let logo = document.createElement('h2')
    logo.textContent = 'Add project'

    logoDiv.appendChild(logo)

    addProjContainer.appendChild(logoDiv)

    //form
    let addProjForm = document.createElement('form')
    addProjForm.setAttribute('id', 'addProjForm')

    //txtinput

    let addProjNameDiv = document.createElement('div')
    let addProjNameLabel = document.createElement('label')
    addProjNameLabel.textContent = 'Name'
    addProjNameLabel.setAttribute('for', 'projName')

    let addProjNameInput = document.createElement('input')
    addProjNameInput.setAttribute('type', 'text')
    addProjNameInput.setAttribute('name', 'projName')
    addProjNameInput.setAttribute('id', 'projName')
    addProjNameInput.setAttribute('required', 'yes')
    addProjNameInput.setAttribute('autocomplete', 'off')

    let addProjNameHelp = document.createElement('p')
    addProjNameHelp.classList.add('help')
    

    addProjNameDiv.appendChild(addProjNameLabel)
    addProjNameDiv.appendChild(addProjNameInput)
    addProjNameDiv.appendChild(addProjNameHelp)

    addProjForm.appendChild(addProjNameDiv)



    //dropdown

    let iconDiv = document.createElement('div')

    let iconLabel = document.createElement('label')
    iconLabel.textContent = 'Priority Level'
    iconLabel.setAttribute('for', 'iconLabel')

    let iconSelect = document.createElement('select')
    iconSelect.setAttribute('name', 'iconLabel')
    iconSelect.setAttribute('id', 'iconLabel')

    let option1 = document.createElement('option')
    option1.textContent = '1 (Lowest)'
    option1.setAttribute('value', '1')
    option1.classList.add('options')

    let option2 = document.createElement('option')
    option2.textContent = '2'
    option2.setAttribute('value', '2')
    option2.classList.add('options')

    let option3 = document.createElement('option')
    option3.textContent = '3'
    option3.setAttribute('value', '3')
    option3.classList.add('options')

    let option4 = document.createElement('option')
    option4.setAttribute('value', '4')
    option4.textContent = '4 (Highest)'
    option4.classList.add('options')
    
    
    const projSubmitBtnContainer = document.createElement('div')
    projSubmitBtnContainer.classList.add('projSubmitBtnContainer')

    const submitBtn = document.createElement('button')
    submitBtn.setAttribute('id', 'submitBtn')
    submitBtn.textContent = 'Add project'
    submitBtn.addEventListener('click', addProjBtnF)
    addProjContainer.addEventListener('keypress', function (event) {
        if (event.key === 'Enter'){
            submitBtn.click()
        }
    })
    

    const cancelBtn = document.createElement('button')
    cancelBtn.setAttribute('id', 'cancelBtn')
    cancelBtn.textContent = 'Cancel'
    
    cancelBtn.addEventListener('click', function(event){
        event.preventDefault()
        closeProjModal()
    })
        

    
    projSubmitBtnContainer.appendChild(cancelBtn)
    projSubmitBtnContainer.appendChild(submitBtn)



    
    
    

   
    iconSelect.appendChild(option1)
    iconSelect.appendChild(option2)
    iconSelect.appendChild(option3)
    iconSelect.appendChild(option4)

    iconDiv.appendChild(iconLabel)
    iconDiv.appendChild(iconSelect)
    addProjForm.appendChild(iconDiv)

    addProjForm.appendChild(projSubmitBtnContainer)






    addProjContainer.appendChild(addProjForm)

    document.body.appendChild(addProjContainer)

    //overlay

    const overlay = document.createElement('div')
        overlay.classList.add('overlay')


        document.body.appendChild(overlay)
        

        overlay.addEventListener('click', closeProjModal)

}

const checkProjExist = () => {
    let projN = document.querySelector('#projName')
    let projHelp = document.querySelector('.help')

    let result = true

    homePage.projectList.forEach(element => {
        console.log(element.title, projN.value)
        if (element.title === projN.value){
            console.log('returning false')
            projHelp.classList.add('invalid')
            projHelp.textContent = 'Project name already exists'
            projN.classList.add('redBorder')
            result = false
        }
    });
    if (result == false) {
        return false
    } else {
        return true
    }

    
}


const addProjBtnF = (target) => {
    let projDisplay = document.querySelector('#projDisplay')
    let projArrow = document.querySelector('#projArrow')
    let addp = document.querySelector('#addProjForm')

    

    console.log(checkProjExist())
    if (addp.checkValidity() && checkProjExist() ) {
        
        target.preventDefault()
        let pForm = new FormData(document.querySelector('#addProjForm'))
        

        let newP = new Project
        newP.title = pForm.get('projName')
        newP.priority = pForm.get('iconLabel')
        newP.id = `idn${homePage.projectList.length + 1}`

        

        if (newP.priority === '2'){
            newP.img = './svgs/circle-p2.svg'
        } else if (newP.priority === '3') {
            newP.img = './svgs/circle-p3.svg'
        } else if (newP.priority === '4') {
            newP.img = './svgs/circle-p4.svg'
        }
        console.log(newP.img)
        homePage.addProj(newP)
        if (projArrow.classList.contains('toggleOn')){
                let li = document.createElement('li')
                let btn = document.createElement('button')

                btn.setAttribute('id', `${newP.id}`)
                let btnDiv = document.createElement('div')
        
                let divImg = document.createElement('img')
        
                divImg.setAttribute('src', `${newP.img}`)
                divImg.classList.add(`p${newP.priority}`)
        
                btnDiv.appendChild(divImg)
                btnDiv.appendChild(document.createTextNode(`${newP.title}`))
                
                btn.addEventListener('click', findProject)
                btn.appendChild(btnDiv)
                li.appendChild(btn)
        
                projDisplay.appendChild(li)

        }

        

        
        closeProjModal()

    } else {
        target.preventDefault()
        let helpMsg = document.querySelector('.help')

        helpMsg.textContent = 'Please enter a project name'
        helpMsg.classList.add('invalid')
    }

    



    
    

}

const showProjectSide =() => {
    
    let projArrow = document.querySelector('#projArrow')
    

    let projDisplay = document.querySelector('#projDisplay')

    if (projArrow.classList.contains('toggleOn')){
        projDisplay.textContent =''
        projArrow.classList.remove('toggleOn')
    } else {
        homePage.projectList.forEach(element => {
            if (element.title != 'Inbox') {
                let li = document.createElement('li')
                let btn = document.createElement('button')

                btn.setAttribute('id', `${element.id}`)

                let btnDiv = document.createElement('div')
        
                let divImg = document.createElement('img')
        
                divImg.setAttribute('src', `${element.img}`)
                divImg.classList.add(`p${element.priority}`)
        
                btnDiv.appendChild(divImg)
                btnDiv.appendChild(document.createTextNode(`${element.title}`))


                btn.addEventListener('click', findProject)
                btn.appendChild(btnDiv)
                li.appendChild(btn)

            
        
                projDisplay.appendChild(li)

            }
            
    
    
    
        });
        projArrow.classList.add('toggleOn')

    }

    

}

export {Project, addProjectMenu, showProjectSide}