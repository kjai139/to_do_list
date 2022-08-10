class Project {
    constructor(name){
        this.tasks =[]
        this.title = name
        this.img = ''
        this.priority = '4'
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
    addProjNameInput.setAttribute('id', 'projName')

    addProjNameDiv.appendChild(addProjNameLabel)
    addProjNameDiv.appendChild(addProjNameInput)

    addProjForm.appendChild(addProjNameDiv)



    //dropdown

    let iconDiv = document.createElement('div')

    let iconLabel = document.createElement('label')
    iconLabel.textContent = 'Priority Level'
    iconLabel.setAttribute('for', 'iconLabel')

    let iconSelect = document.createElement('select')
    iconSelect.setAttribute('id', 'iconLabel')

    let option1 = document.createElement('option')
    option1.textContent = '1'
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
    option4.textContent = '4'
    option4.classList.add('options')
    
    
   
    
    
    

   
    iconSelect.appendChild(option1)
    iconSelect.appendChild(option2)
    iconSelect.appendChild(option3)
    iconSelect.appendChild(option4)

    iconDiv.appendChild(iconLabel)
    iconDiv.appendChild(iconSelect)
    addProjForm.appendChild(iconDiv)






    addProjContainer.appendChild(addProjForm)

    document.body.appendChild(addProjContainer)

}

export {Project, addProjectMenu}