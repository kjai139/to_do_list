import './style.css'
import {addTaskMenu}  from './Tasks.js'
import { displayToday, displayUpcoming, findProject, toggleMenu } from './displayContent'
import {addProjectMenu, showProjectSide} from './Projects'
import {checkItemCount, clearLocal, homePage} from './globalVar'





const addTaskModal = document.querySelector('#addTaskBtn')
addTaskModal.addEventListener('click', addTaskMenu)

const addProjBtn = document.querySelector('#addProjBtn')
addProjBtn.addEventListener('click', addProjectMenu)

const projDisplay = document.querySelector('#Projects')
projDisplay.addEventListener('click', showProjectSide)

const todayDisplay = document.querySelector('#todayBtn')
todayDisplay.addEventListener('click', displayToday)

const upcomingDisplay = document.querySelector('#upcomingBtn')
upcomingDisplay.addEventListener('click' , displayUpcoming)

const clearBtn = document.querySelector('#clearBtn')
clearBtn.addEventListener('click', clearLocal)

const checkHomeBtn = document.querySelector('#checkHomeBtn')
checkHomeBtn.addEventListener('click', function(){
    inboxBtn.click()
})

const menuToggleBtn = document.querySelector('#menuToggleBtn')
menuToggleBtn.addEventListener('click', toggleMenu)




const inboxBtn = document.querySelector('#Inbox')




inboxBtn.addEventListener('click', findProject)
checkItemCount()
inboxBtn.click()


