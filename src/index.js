import './style.css'
import {Task, addTaskMenu}  from './Tasks.js'
import { displayProject } from './displayContent'
import Project from './Projects'



const projectList = []

const addTaskBtn = document.querySelector('#addTaskBtn')
addTaskBtn.addEventListener('click', addTaskMenu)



//testing for styling
const testInbox = new(Project)

const testTask1 = new(Task)
testTask1.title = 'Test Task 1'
testTask1.description = 'Test task description'


testInbox.addTask(testTask1)

//testing inbox

const inboxBtn = document.querySelector('#inboxBtn')
console.log('inboxbtn', inboxBtn)

console.log(testInbox)



inboxBtn.addEventListener('click', function(){
    displayProject(testInbox)
})