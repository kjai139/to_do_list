import { format, nextSaturday } from "date-fns"






//due date selection functions

const chooseToday = () => {
    
    let dd = document.querySelector('#dueDateBtn')
    let ddTxt = document.querySelector('#ddTxt')
    ddTxt.textContent = 'Today'
    dd.value = format(new Date(), 'MM/dd/yyyy')
    console.log(typeof(new Date(dd.value)))
    console.log(typeof(dd.value))
    let overlay2 = document.querySelector('.overlay2')
    let calenderContainer = document.querySelector('.calenderContainer')

    overlay2.remove()
    calenderContainer.remove()
}

const chooseTomorrow = () => {
    let today = new Date()
    let dd = document.querySelector('#dueDateBtn')
    let ddTxt = document.querySelector('#ddTxt')
    ddTxt.textContent = 'Tomorrow'
    // console.log(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1))
    dd.value = format(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1), 'MM/dd/yyyy')
    
    console.log(typeof(dd.value))
    let overlay2 = document.querySelector('.overlay2')
    let calenderContainer = document.querySelector('.calenderContainer')

    overlay2.remove()
    calenderContainer.remove()

}

const chooseNextWeek =() => {
    let today = new Date()
    let dd = document.querySelector('#dueDateBtn')
    let ddTxt = document.querySelector('#ddTxt')
    ddTxt.textContent = 'Next week'

    dd.value = format(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7), 'MM/dd/yyyy')

    let overlay2 = document.querySelector('.overlay2')
    let calenderContainer = document.querySelector('.calenderContainer')

    overlay2.remove()
    calenderContainer.remove()



}

const chooseComingWeekend =() => {

    
    let dd = document.querySelector('#dueDateBtn')
    let ddTxt = document.querySelector('#ddTxt')
    ddTxt.textContent = 'Coming weekend'

    dd.value = format(nextSaturday(new Date()), 'MM/dd/yyyy')

    let overlay2 = document.querySelector('.overlay2')
    let calenderContainer = document.querySelector('.calenderContainer')

    overlay2.remove()
    calenderContainer.remove()

}

const chooseNoDate = () => {
    let dd = document.querySelector('#dueDateBtn')
    let ddTxt = document.querySelector('#ddTxt')
    ddTxt.textContent = 'No Date'

    dd.value = ''
    let overlay2 = document.querySelector('.overlay2')
    let calenderContainer = document.querySelector('.calenderContainer')

    overlay2.remove()
    calenderContainer.remove()

}

export {chooseToday, chooseTomorrow, chooseNextWeek, chooseComingWeekend, chooseNoDate}