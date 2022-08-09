import './style.css'
import {Task, addTaskMenu}  from './Tasks.js'
import { displayProject, findProject } from './displayContent'
import Project from './Projects'
import {homePage} from './globalVar'




const addTaskBtn = document.querySelector('#addTaskBtn')
addTaskBtn.addEventListener('click', addTaskMenu)



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

