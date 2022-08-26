import Home from './Home'
import { Project } from './Projects'


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


export {homePage, updateLocal, clearLocal}


