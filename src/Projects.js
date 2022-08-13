import { homePage } from "./globalVar"
import { closeProjModal } from "./modals"

class Project {
    constructor(name){
        this.tasks =[]
        this.title = name
        this.img = './svgs/circle-p1.svg'
        this.priority = '1'
        this.selected = false
    }

    getName = () => {
        return this.title
    }
    
    addTask = (task) => {
        if (this.tasks.includes(task)){
            console.log('obj alrdy exist')
        } else {
            this.tasks.push(task)
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
    addProjNameInput.setAttribute('required', '')
    

    addProjNameDiv.appendChild(addProjNameLabel)
    addProjNameDiv.appendChild(addProjNameInput)

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


const addProjBtnF = (target) => {
    let projDisplay = document.querySelector('#projDisplay')
    let projArrow = document.querySelector('#projArrow')
    let addp = document.querySelector('#addProjForm')
    if (addp.checkValidity()) {
        target.preventDefault()
        let pForm = new FormData(document.querySelector('#addProjForm'))
        

        let newP = new Project
        newP.title = pForm.get('projName')
        newP.priority = pForm.get('iconLabel')

        console.log(newP.priority)

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
                let btnDiv = document.createElement('div')
        
                let divImg = document.createElement('img')
        
                divImg.setAttribute('src', `${newP.img}`)
                divImg.classList.add(`p${newP.priority}`)
        
                btnDiv.appendChild(divImg)
                btnDiv.appendChild(document.createTextNode(`${newP.title}`))
        
                btn.appendChild(btnDiv)
                li.appendChild(btn)
        
                projDisplay.appendChild(li)

        }

        

        
        closeProjModal()

    }

    



    
    

}

const showProjectSide =() => {

    let projArrow = document.querySelector('#projArrow')
    let parentUl = document.querySelector('.sidebar')

    let projDisplay = document.querySelector('#projDisplay')

    if (projArrow.classList.contains('toggleOn')){
        projDisplay.textContent =''
        projArrow.classList.remove('toggleOn')
    } else {
        homePage.projectList.forEach(element => {
            if (element.title != 'Inbox') {
                let li = document.createElement('li')
                let btn = document.createElement('button')
                let btnDiv = document.createElement('div')
        
                let divImg = document.createElement('img')
        
                divImg.setAttribute('src', `${element.img}`)
                divImg.classList.add(`p${element.priority}`)
        
                btnDiv.appendChild(divImg)
                btnDiv.appendChild(document.createTextNode(`${element.title}`))
        
                btn.appendChild(btnDiv)
                li.appendChild(btn)
        
                projDisplay.appendChild(li)

            }
            
    
    
    
        });
        projArrow.classList.add('toggleOn')

    }

    

}

export {Project, addProjectMenu, showProjectSide}