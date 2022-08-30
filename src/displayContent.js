import { homePage } from "./globalVar";
import { addTaskMenu, removeTask } from "./Tasks";
import { format, compareAsc } from "date-fns";
import { expandTaskModal } from "./modals";

const findProject = (projectName) => {
    let projIDs = projectName.target.id.split('-')
    // console.log('proj name id', projectName.target.id)
    let projID = projIDs[0]
    // console.log(projID)
    

    homePage.projectList.forEach(element => {
        // console.log(element.getName(),projID )
        // console.log(element.id, 'eleid')
        // console.log(document.querySelector(`#${element.id}-btn`))
        let eleId
        if (document.querySelector(`#${element.id}-btn`) != null){
            eleId = document.querySelector(`#${element.id}-btn`)
            eleId.classList.remove('selected')

            // console.log(eleId, 'removed')
        } 

        
        
        // console.log(eleId)

        


        let eleName = element.id
        if (eleName.match(projID)){
            // console.log('match')
            displayProject(element)
            projectName.target.classList.add('selected')
            return
        }
    });

    
}

const toggleMenu = () => {
    let leftContentContainer = document.querySelector('.leftContentContainer')

    let rightContentContainer = document.querySelector('.rightContentContainer')

    if (leftContentContainer.classList.contains('slideSideBarIn') == false){
        leftContentContainer.classList.remove('hideSideBar')
        leftContentContainer.classList.add('slideSideBarIn')
        rightContentContainer.classList.remove('pushLeftMargin')
    } else if (leftContentContainer.classList.contains('slideSideBarIn') == true){
        leftContentContainer.classList.remove('slideSideBarIn')
        leftContentContainer.classList.add('hideSideBar')
        rightContentContainer.classList.add('pushLeftMargin')
    }
}

//currently working on
const writeTasks = (element) => {
   
        // console.log(element)

        let contentDiv = document.querySelector('.contentDiv')
        
        let taskContainer = document.createElement('div')
        taskContainer.classList.add('taskDiv')
        taskContainer.setAttribute('id', `${element.projectName}-${element.id}-div`)
        

        let leftTaskContainer = document.createElement('div')
        leftTaskContainer.classList.add('leftTaskContainer')

        let taskCheckInput = document.createElement('input')
        taskCheckInput.setAttribute('type', 'checkbox')
        taskCheckInput.setAttribute('name', `${element.projectName}-${element.id}`)
        taskCheckInput.classList.add('checkbox')
        taskCheckInput.addEventListener('change', removeTask)

        leftTaskContainer.appendChild(taskCheckInput)

        let rightTaskContainer = document.createElement('div')
        rightTaskContainer.classList.add('rightTaskContainer')
        rightTaskContainer.setAttribute('id', `${element.projectName}-${element.id}-task`)
        

        let taskTitle = document.createElement('p')
        taskTitle.classList.add('taskTitle')
        taskTitle.setAttribute('id', `${element.projectName}-${element.id}-title`)
        taskTitle.textContent = `${element.title}`
        taskTitle.addEventListener('click', expandTaskModal)

        let taskDescription = document.createElement('p')
        taskDescription.classList.add('taskDescription')
        taskDescription.setAttribute('id', `${element.projectName}-${element.id}-d`)
        taskDescription.addEventListener('click', expandTaskModal)

        taskDescription.textContent = `${element.description}`

        let todayBottomDiv = document.createElement('div')
        todayBottomDiv.classList.add('todayBottomDiv')

        let projIndicatorBtn = document.createElement('button')
        projIndicatorBtn.classList.add('projIndicatorBtn')

        let projIndicatorBtnImg = document.createElement('img')
        let projIndicatorBtnTxt = document.createElement('p')

        let projName = element.projectName

        homePage.projectList.forEach(element => {
            if (element.id == projName){
                projIndicatorBtnImg.setAttribute('src', `${element.img}`)
                projIndicatorBtnTxt.textContent = `${element.title}`
            }
        });

        projIndicatorBtn.appendChild(projIndicatorBtnImg)
        projIndicatorBtn.appendChild(projIndicatorBtnTxt)

        


        let taskDateBtn = document.createElement('button')
        taskDateBtn.classList.add('taskDateBtn')
        

        let taskDateSvg = document.createElement('img')
        taskDateSvg.setAttribute('src', './svgs/btn_svgs/due-date.svg')

        taskDateBtn.appendChild(taskDateSvg)

        let taskDateTxt = document.createElement('p')
        taskDateTxt.textContent =`${element.dueDate}`

        taskDateBtn.appendChild(taskDateTxt)

        rightTaskContainer.appendChild(taskTitle)
        rightTaskContainer.appendChild(taskDescription)
        todayBottomDiv.appendChild(taskDateBtn)
        todayBottomDiv.appendChild(projIndicatorBtn)
        rightTaskContainer.appendChild(todayBottomDiv)

        taskContainer.appendChild(leftTaskContainer)
        taskContainer.appendChild(rightTaskContainer)

        contentDiv.appendChild(taskContainer)
        
    
}





const displayProject = (proj) => {

    

    const contentContainer = document.querySelector('.rightContentContainer')
    contentContainer.textContent =''



    const contentDiv = document.createElement('div')
    contentDiv.classList.add('contentDiv')

    const contentTitleDiv = document.createElement('div')
    

    const contentTitle = document.createElement('h2')
    contentTitle.classList.add('contentTitle')
    contentTitle.setAttribute('id', `${proj.id}`)
    
    contentTitle.textContent = `${proj.title}`

    contentTitleDiv.appendChild(contentTitle)
    contentDiv.appendChild(contentTitleDiv)

    contentContainer.appendChild(contentDiv)

    console.log(proj.tasks, proj.tasks.length)

    if (proj.tasks.length === 0) {
        displayAddTaskIcon()
    } else {
        //display tasks
        
        proj.tasks.forEach(element => {
            // console.log(element)
            
            let taskContainer = document.createElement('div')
            taskContainer.classList.add('taskDiv')
            taskContainer.setAttribute('id', `${element.projectName}-${element.id}-div`)
            

            let leftTaskContainer = document.createElement('div')
            leftTaskContainer.classList.add('leftTaskContainer')

            let taskCheckInput = document.createElement('input')
            taskCheckInput.setAttribute('type', 'checkbox')
            taskCheckInput.setAttribute('name', `${element.projectName}-${element.id}`)
            taskCheckInput.classList.add('checkbox')
            taskCheckInput.addEventListener('change', removeTask)

            leftTaskContainer.appendChild(taskCheckInput)

            let rightTaskContainer = document.createElement('div')
            rightTaskContainer.classList.add('rightTaskContainer')
            rightTaskContainer.setAttribute('id', `${element.projectName}-${element.id}-tasks`)
            

            let taskTitle = document.createElement('p')
            taskTitle.classList.add('taskTitle')
            taskTitle.setAttribute('id', `${element.projectName}-${element.id}-title`)
            taskTitle.textContent = `${element.title}`
            taskTitle.addEventListener('click', expandTaskModal)

            let taskDescription = document.createElement('p')
            taskDescription.classList.add('taskDescription')
            taskDescription.setAttribute('id', `${element.projectName}-${element.id}-d`)
            taskDescription.addEventListener('click', expandTaskModal)

            taskDescription.textContent = `${element.description}`

            let taskDateBtn = document.createElement('button')
            taskDateBtn.classList.add('taskDateBtn')

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


const displayToday = (target) => {

    

    const contentContainer = document.querySelector('.rightContentContainer')
    contentContainer.textContent =''



    const contentDiv = document.createElement('div')
    contentDiv.classList.add('contentDiv')

    const contentTitleDiv = document.createElement('div')
    contentDiv.appendChild(contentTitleDiv)
    

    const contentTitle = document.createElement('h2')
    contentTitle.setAttribute('id', 'contentTitle')
    contentTitle.textContent = 'Today'

    const contentTitleDate = document.createElement('p')
    contentTitleDate.textContent = format(new Date(), 'PPPP')

    contentTitleDiv.appendChild(contentTitle)
    contentTitleDiv.appendChild(contentTitleDate)

    const subSectContainer = document.createElement('div')
    subSectContainer.classList.add('subSectContainer')
    contentDiv.appendChild(subSectContainer)

    const subSectTitle = document.createElement('div')
    subSectTitle.classList.add('subSectTitle')
    subSectTitle.textContent = `Today, ${format(new Date(), 'MMM d eee')}`

    subSectContainer.appendChild(subSectTitle)

    contentContainer.appendChild(contentDiv)







    homePage.projectList.forEach(element => {
        let eleId
        if (document.querySelector(`#${element.id}-btn`) != null){
            eleId = document.querySelector(`#${element.id}-btn`)
            eleId.classList.remove('selected')

            // console.log(eleId, 'removed')
        }


        element.tasks.forEach(element => {
            console.log(element.dueDate, new Date())
            if (element.dueDate == format(new Date(), 'MM/dd/yyyy')){
                // console.log('tasks found')
                writeTasks(element)
            }
        });
        
    });

    target.target.classList.add('selected')

}


const displayUpcoming = (target) => {
    const contentContainer = document.querySelector('.rightContentContainer')
    contentContainer.textContent =''



    const contentDiv = document.createElement('div')
    contentDiv.classList.add('contentDiv')

    const contentTitleDiv = document.createElement('div')
    contentDiv.appendChild(contentTitleDiv)
    

    const contentTitle = document.createElement('h2')
    contentTitle.setAttribute('id', 'contentTitle')
    contentTitle.textContent = 'Upcoming'

    

    contentTitleDiv.appendChild(contentTitle)
    contentDiv.appendChild(contentTitleDiv)
    contentContainer.appendChild(contentDiv)

    
    let dateArray =[]

    homePage.projectList.forEach(element => {
        let eleId
        if (document.querySelector(`#${element.id}-btn`) != null){
            eleId = document.querySelector(`#${element.id}-btn`)
            eleId.classList.remove('selected')

            // console.log(eleId, 'removed')
        }
        
        element.tasks.forEach(element => {
            if (compareAsc(new Date(element.dueDate), new Date()) == 1 && dateArray.includes(element.dueDate) == false){

                dateArray.push(element.dueDate)
                
                
            }

        });   

        dateArray.sort(function sortDate(a, b){
            if (compareAsc(new Date(a), new Date(b)) == 1){
                console.log(compareAsc(new Date(a), new Date(b)))
                return 1
            } else {
                return -1
            }
        })
    });
        
        dateArray.forEach(ele => {
            const subSectContainer = document.createElement('div')
            subSectContainer.classList.add('subSectContainer')
            contentDiv.appendChild(subSectContainer)

            const subSectTitle = document.createElement('div')
            subSectTitle.classList.add('subSectTitle')
            subSectTitle.textContent = `${format(new Date(ele), 'MMM d eee')}`

            subSectContainer.appendChild(subSectTitle)

            contentDiv.appendChild(subSectContainer)

            homePage.projectList.forEach(elem => {
                elem.tasks.forEach(element => {
                    if (ele == element.dueDate) {
                        writeTasks(element)
                    }
                    
                });
            });



            
        });

        console.log(dateArray)



            
        
    

    target.target.classList.add('selected')

}

export {displayProject, findProject, displayAddTaskIcon, displayToday, displayUpcoming, toggleMenu}