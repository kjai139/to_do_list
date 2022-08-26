import Home from './Home'
import { Project } from './Projects'
import format from 'date-fns/format'


const findHome = () => {
    if (localStorage.getItem('myHome') === null){
        console.log('no home', localStorage.getItem('myHome'))
        const homePage = new Home


        const testInbox = new Project('Inbox')
        testInbox.img = './svgs/sidebar_svgs/inbox-outline.svg'

        const todayBox = new Project('Today')
        todayBox.id = 'todayBtn'

        const upcoming = new Project('Upcoming')
        upcoming.id = 'upcomingBtn'



        homePage.addProj(testInbox)
        homePage.addProj(todayBox)
        homePage.addProj(upcoming)
        return homePage
        
        
        
    } else {
        const homePage = localStorage.getItem('myHome')
        console.log('my home found', JSON.parse(homePage) )
        return JSON.parse(homePage)
        
    }

}

const homePage = findHome()

const updateLocal = () => {
    localStorage.setItem('myHome', JSON.stringify(homePage))
}

const clearLocal = () => {
    localStorage.clear()
}

const checkItemCount = () => {
    let inboxInd = document.querySelector('#Inbox-indicator')
    let todayInd = document.querySelector('#todayBtn-indicator')

    let todayCount = 0


    homePage.projectList.forEach(element => {
        if (element.title == 'Inbox'){
            inboxInd.textContent = `${element.tasks.length}`
        }
        
    });

    homePage.projectList.forEach(element => {
        element.tasks.forEach(element => {
            // console.log(element.dueDate, new Date())
            if (element.dueDate == format(new Date(), 'MM/dd/yyyy')){
                // console.log('tasks found')
                todayCount += 1
            }
        });
    })

    todayInd.textContent = todayCount
}

export {homePage, updateLocal, clearLocal, checkItemCount}


