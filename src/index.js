import './style.css'
import {addTaskMenu}  from './Tasks.js'
import { displayToday, displayUpcoming, findProject, toggleMenu } from './displayContent'
import {addProjectMenu, showProjectSide} from './Projects'
import {checkItemCount, clearLocal, homePage} from './globalVar'
import { getFirebaseConfig } from './firebase-config'

import { initializeApp } from 'firebase/app'
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth';



const addTaskModal = document.querySelector('#addTaskBtn')
addTaskModal.addEventListener('click', addTaskMenu)

const addProjBtn = document.querySelector('#addProjBtn')
addProjBtn.addEventListener('click', addProjectMenu)

const projDisplay = document.querySelector('#Projects')
projDisplay.addEventListener('click', showProjectSide)

const todayDisplay = document.querySelector('#today-btn')
todayDisplay.addEventListener('click', displayToday)

const upcomingDisplay = document.querySelector('#upcoming-btn')
upcomingDisplay.addEventListener('click' , displayUpcoming)

const clearBtn = document.querySelector('#clearBtn')
clearBtn.addEventListener('click', clearLocal)

const checkHomeBtn = document.querySelector('#checkHomeBtn')
checkHomeBtn.addEventListener('click', function(){
    inboxBtn.click()
})

const menuToggleBtn = document.querySelector('#menuToggleBtn')
menuToggleBtn.addEventListener('click', toggleMenu)

const profilePicIcon = document.querySelector('#profilePicIcon')

const userDisplayName = document.querySelector('#userNameDisplay')

const signInBtn = document.querySelector('#signInBtn')

const signOutBtn = document.querySelector('#signOutBtn')

const inboxBtn = document.querySelector('#Inbox-btn')

const firebaseConfig = getFirebaseConfig()


//firebase 
async function signIn() {
    let provider = new GoogleAuthProvider()
    await signInWithPopup(getAuth(), provider)
}

function signOutUser() {
    signOut(getAuth())
}

function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || '/svgs/account-circle.svg'
}

function getUserName() {
    return getAuth().currentUser.displayName
}

function authStateObserver(user) {
    if (user) {
        let profilePicUrl = getProfilePicUrl()
        let userName = getUserName()

        profilePicIcon.style.backgroundImage = `url(${profilePicUrl})` 
        userDisplayName.textContent = userName
        userDisplayName.classList.remove('noDisplay')

        signInBtn.setAttribute('hidden', 'true')
        signOutBtn.removeAttribute('hidden')

        

    } else {
        
        userDisplayName.classList.add('noDisplay')
        signInBtn.removeAttribute('hidden')
        signOutBtn.setAttribute('hidden', 'true')
        profilePicIcon.style.backgroundImage = `url('/svgs/account-circle.svg')`
    }
}

function initFirebaseAuth() {
    onAuthStateChanged(getAuth(), authStateObserver)
}



inboxBtn.addEventListener('click', findProject)
checkItemCount()
inboxBtn.click()



signInBtn.addEventListener('click', signIn)
signOutBtn.addEventListener('click', signOutUser)
initializeApp(firebaseConfig)
initFirebaseAuth()