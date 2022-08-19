import './style.css'
import {Task, addTaskMenu}  from './Tasks.js'
import { displayProject, findProject } from './displayContent'
import {Project, addProjectMenu, showProjectSide} from './Projects'
import {homePage} from './globalVar'

import { displayDueDateDrop } from './buttons'




const addTaskModal = document.querySelector('#addTaskBtn')
addTaskModal.addEventListener('click', addTaskMenu)

const addProjBtn = document.querySelector('#addProjBtn')
addProjBtn.addEventListener('click', addProjectMenu)

const projDisplay = document.querySelector('#Projects')
projDisplay.addEventListener('click', showProjectSide)




//testing for styling
const testInbox = new Project('Inbox')
testInbox.img = './svgs/sidebar_svgs/inbox-outline.svg'

const testTask1 = new(Task)
testTask1.title = 'Test Task 1'
testTask1.description = 'Test task description'

const testTask2 = new(Task)
testTask2.title = 'Task 2'


testInbox.addTask(testTask1)
testInbox.addTask(testTask2)

//testing inbox

const inboxBtn = document.querySelector('#Inbox')
homePage.addProj(testInbox)




inboxBtn.addEventListener('click', findProject)

inboxBtn.click()


