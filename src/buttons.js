import { homePage } from "./globalVar"
import { addMonths, subMonths, compareAsc, format, lastDayOfMonth, nextSaturday } from "date-fns"

import { chooseComingWeekend, chooseDate, chooseNextWeek, chooseNoDate, chooseToday, chooseTomorrow } from "./calender"



//proj dropdown button


const createProjDropBtn = () => {

    let selection = document.querySelector('.selected') !=null

    let selectedProj 

    if (selection == false){
        selectedProj = document.querySelector('#contentTitle').textContent
        console.log(selectedProj)
        
    } else {
        selectedProj = document.querySelector('.selected').id
        console.log(selectedProj)
    }

    

    let dropBtnDiv = document.createElement('div')
    dropBtnDiv.classList.add('dropBtnDiv')
    
    let bTC = document.querySelector('.bottomTaskContainer')
    console.log(bTC)

    const dropBtn = document.createElement('button')
    dropBtn.setAttribute('id', 'dropBtn')

    const dropBtnImg = document.createElement('img')
    dropBtnImg.setAttribute('id', 'dropBtnImg')

    const dropBtnTxt = document.createElement('p')

    homePage.projectList.forEach(element => {
        if (element.title == selectedProj || element.id == selectedProj){

            if (element.title == 'Today' || element.title == 'Upcoming') {
                dropBtnImg.setAttribute('src', `./svgs/sidebar_svgs/inbox-outline.svg`)

                
                dropBtnTxt.setAttribute('id', 'dropBtnTxt')
                dropBtnTxt.textContent = `Inbox`
            } else {

            
                console.log(element.title)
            
                dropBtnImg.setAttribute('src', `${element.img}`)

            
                dropBtnTxt.setAttribute('id', 'dropBtnTxt')
                dropBtnTxt.textContent = `${element.title}`

            }
            
        }
        
    });


    

    dropBtn.appendChild(dropBtnImg)
    dropBtn.appendChild(dropBtnTxt)

    dropBtn.appendChild(dropBtnDiv)

    bTC.appendChild(dropBtn)
    

    dropBtn.addEventListener('click', displayProjDrop)



}


//proj dropdown menu display

const displayProjDrop = (event) => {

    // let parentDiv = document.querySelector('.dropBtnDiv')

    event.preventDefault()

    const projDropContainer = document.createElement('div')
    projDropContainer.classList.add('projectDropContainer')

    const projDrop = document.createElement('ul')

    const overlay2 = document.createElement('div')
    overlay2.classList.add('overlay2')

        

    document.body.appendChild(overlay2)
        

    overlay2.addEventListener('click', function() {
        
                projDropContainer.remove()
                overlay2.remove()
            
            
        })

    

    homePage.projectList.forEach(element => {

        if (element.title != 'Today' && element.title !='Upcoming'){
        let li = document.createElement('li')

        let leftDiv = document.createElement('div')


        let liImg = document.createElement('img')
        liImg.setAttribute('src', `${element.img}`)

        let liTxt = document.createElement('p')
        liTxt.textContent = `${element.title}`

        leftDiv.appendChild(liImg)
        leftDiv.appendChild(liTxt)

        li.appendChild(leftDiv)

        if (liTxt.textContent == dropBtnTxt.textContent){

            let checkMarkDiv = document.createElement('div')

            let checkMark = document.createElement('img')
            checkMark.setAttribute('src', './svgs/check.svg')

            checkMarkDiv.appendChild(checkMark)
            li.appendChild(checkMarkDiv)

        }

        projDrop.appendChild(li)
        li.addEventListener('click', function(){
            let dropBtnImg = document.querySelector('#dropBtnImg')
            dropBtnImg.setAttribute('src', `${element.img}`)

            let dropBtnTxt = document.querySelector('#dropBtnTxt')
            dropBtnTxt.textContent = `${element.title}`

            console.log('li select')
            projDropContainer.remove()
            overlay2.remove()
        })

        }
        
        

    })
    projDropContainer.appendChild(projDrop) 
    document.body.appendChild(projDropContainer)  

    


}

const createCalender = (loc) => {  
    const calenderDiv = document.createElement('div')
    let todayDate = new Date()
    let curMonth = todayDate.getMonth()
    let curYear = todayDate.getFullYear()

    

    let lastDay = new Date(todayDate.getFullYear(), todayDate.getMonth() + 1, 0).getDate()

    
    
    

    let lastMonthLastDaySub = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate()

    

    let lastMonthLastDayIndex = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDay()

    

    let todayDay = todayDate.getDate()

    

    // console.log(lastMonthLastDayIndex)
    // console.log(firstDayOfMonthIndex)
    // console.log(todayDay)
    // console.log(curMonth)
    


    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let month = ['January', 'February', 'March','April','May','June', 'July','August','September','October','November','December']

    


    loc.appendChild(calenderDiv)



    const calenderTop = document.createElement('div')
    calenderTop.classList.add('calenderTop')

    calenderDiv.appendChild(calenderTop)

    const monthYearDisplayDiv = document.createElement('div')
    monthYearDisplayDiv.classList.add('monthYearDisplay')
    monthYearDisplayDiv.textContent = `${month[curMonth]} ${curYear}`

    calenderTop.appendChild(monthYearDisplayDiv)

    const arrowDiv = document.createElement('div')
    arrowDiv.classList.add('arrowDiv')

    const leftArrow = document.createElement('div')
    const leftArrowImg = document.createElement('img')
    leftArrowImg.setAttribute('src', './svgs/btn_svgs/leftarrow.svg')
    leftArrow.appendChild(leftArrowImg)
    leftArrowImg.classList.add('leftArrowImg')
    arrowDiv.appendChild(leftArrow)

    const rightArrow = document.createElement('div')
    const rightArrowImg = document.createElement('img')
    rightArrowImg.classList.add('rightArrowImg')
    rightArrowImg.setAttribute('src', './svgs/btn_svgs/rightarrow.svg')
    rightArrow.appendChild(rightArrowImg)

    



    arrowDiv.appendChild(rightArrow)

    calenderTop.appendChild(arrowDiv)

    const calenderDaysLabel = document.createElement('div')
    calenderDaysLabel.classList.add('calenderDaysLabel')

    


    for (let x = 0; x < 7; x++) {
        let xdiv = document.createElement('div')
        xdiv.textContent = `${week[x][0]}`

        calenderDaysLabel.appendChild(xdiv)

    }

    calenderDiv.appendChild(calenderDaysLabel)

    const calenderBottom = document.createElement('div')
    calenderBottom.classList.add('calenderBottom')
    calenderDiv.appendChild(calenderBottom)

    for (let l = 0; lastMonthLastDayIndex >= l; l++){
        let ydiv = document.createElement('div')
        ydiv.classList.add('pastDate')
        lastMonthLastDaySub -= lastMonthLastDayIndex - l
        ydiv.textContent = `${lastMonthLastDaySub}`
    
        calenderBottom.appendChild(ydiv)
    }

    let displayMonthAndYear = monthYearDisplayDiv.textContent.split(' ')
    let selectedMonth = displayMonthAndYear[0]
    let selectedYear = displayMonthAndYear[1]

    console.log(month[curMonth], selectedMonth, curYear, selectedYear)

    for (let y = 0; y < lastDay; y++){
        let ydiv = document.createElement('div')
        if (month[curMonth] == selectedMonth && curYear == selectedYear) {
            if (todayDay > y+1) {
                ydiv.classList.add('pastDate')
            } else if (todayDay == y+1) {
                ydiv.classList.add('dateSelected')
            }

        }
       
        ydiv.textContent = `${y+1}`
        ydiv.addEventListener('click', chooseDate)
        calenderBottom.appendChild(ydiv)
    }


    let nextMonthLastDay 

    let lastMonthLastDayAdd 

    let lastMonthLastDayDateAdd 

    let newCurMonth 

    let newCurYear 
    
    
    let selectedDate = new Date()
    

    //next month funct
    rightArrow.addEventListener('click', () => {

        selectedDate = addMonths(selectedDate, 1)
        
        
        let selectedDateMinusOne = subMonths(selectedDate, 1)
        

        

        nextMonthLastDay = lastDayOfMonth(selectedDate).getDate()

        
        // console.log(nextMonthLastDay)
        // console.log(lastDayOfMonth(selectedDate).getDate())

        lastMonthLastDayAdd = lastDayOfMonth(selectedDateMinusOne).getDay()

        
        // console.log(lastDayOfMonth(selectedDateMinusOne).getDay())
        

        lastMonthLastDayDateAdd = lastDayOfMonth(selectedDateMinusOne).getDate()

        

        newCurMonth = selectedDate.getMonth()

        newCurYear = selectedDate.getFullYear()
        
        
        monthYearDisplayDiv.textContent = `${month[newCurMonth]} ${newCurYear}`

        
       
        calenderBottom.textContent = ''

        for (let l = 0; lastMonthLastDayAdd >= l; l++){
            
            let ydiv = document.createElement('div')
            ydiv.classList.add('nondisplay')
            
            
            ydiv.textContent = `${lastMonthLastDayDateAdd - lastMonthLastDayAdd + l}`
            //31prev month last date - 3(position of last day) + 0
            
        
            calenderBottom.appendChild(ydiv)
        }

        for (let y = 0; y < nextMonthLastDay; y++){
            let ydiv = document.createElement('div')
            
            
           
            ydiv.textContent = `${y+1}`
            ydiv.addEventListener('click', chooseDate)
            calenderBottom.appendChild(ydiv)
        }

        

        
    })

    //prev month funct
    leftArrow.addEventListener('click', function leftA(){
        console.log(compareAsc(todayDate, selectedDate))
        if (compareAsc(todayDate, selectedDate) == -1 && month[selectedDate.getMonth()] > month[curMonth]){
            console.log(todayDate)
            console.log(selectedDate)
            selectedDate = subMonths(selectedDate, 1)

            let selectedDateMinusOne = subMonths(selectedDate, 1)

            nextMonthLastDay = lastDayOfMonth(selectedDate).getDate()
            lastMonthLastDayAdd = lastDayOfMonth(selectedDateMinusOne).getDay()
            lastMonthLastDayDateAdd = lastDayOfMonth(selectedDateMinusOne).getDate()

        

            newCurMonth = selectedDate.getMonth()

            newCurYear = selectedDate.getFullYear()
            
            
            monthYearDisplayDiv.textContent = `${month[newCurMonth]} ${newCurYear}`

            calenderBottom.textContent = ''
            let displayMonthAndYear = monthYearDisplayDiv.textContent.split(' ')
            let selectedMonth = displayMonthAndYear[0]
            let selectedYear = displayMonthAndYear[1]

            for (let l = 0; lastMonthLastDayAdd >= l; l++){
                let ydiv = document.createElement('div')
                if (month[curMonth] == selectedMonth && curYear == selectedYear) {
                    ydiv.classList.add('pastDate')
                    
                } else {
                    ydiv.classList.add('nondisplay')

                }
                ydiv.textContent = `${lastMonthLastDayDateAdd - lastMonthLastDayAdd + l}`
                //31prev month last date - 3(position of last day) + 0
                
                
                
                
                
            
                calenderBottom.appendChild(ydiv)
            }

            for (let y = 0; y < nextMonthLastDay; y++){
                let ydiv = document.createElement('div')
                if (month[curMonth] == selectedMonth && curYear == selectedYear) {
                    if (todayDay > y+1) {
                        ydiv.classList.add('pastDate')
                    } else if (todayDay == y+1) {
                        ydiv.classList.add('dateSelected')
                    }
        
                }
                
                ydiv.addEventListener('click', chooseDate)
                ydiv.textContent = `${y+1}`
                calenderBottom.appendChild(ydiv)
            }





        }
        
    })

}

const displayDueDateDrop = (target) => {
    target.preventDefault()
    const calenderContainer = document.createElement('div')
    calenderContainer.classList.add('calenderContainer')

    const overlay2 = document.createElement('div')
    overlay2.classList.add('overlay2')

        

    document.body.appendChild(overlay2)
        

    overlay2.addEventListener('click', function() {
       
                calenderContainer.remove()
                overlay2.remove()
          
            
        })

    

    const topPartUlContainer = document.createElement('div')
    calenderContainer.appendChild(topPartUlContainer)


    const topPartUl = document.createElement('ul')
    topPartUlContainer.appendChild(topPartUl)

    const tmwLi = document.createElement('li')
    tmwLi.classList.add('calenderBtns')
    
    topPartUl.appendChild(tmwLi)
    const tmwLeft = document.createElement('div')

    const tmwImg = document.createElement('img')
    tmwImg.setAttribute('src', './svgs/btn_svgs/calender.svg')
    tmwImg.classList.add('calenderSvgs')
    const tmwTxt = document.createElement('p')
    tmwTxt.textContent = 'Today'

    tmwLeft.appendChild(tmwImg)
    tmwLeft.appendChild(tmwTxt)

    const tmwRight = document.createElement('div')
    const tmwRightTxt = document.createElement('p')
    tmwRightTxt.classList.add('grayDisplay')
    tmwRightTxt.textContent = '1'

    tmwRight.appendChild(tmwRightTxt)

    tmwLi.appendChild(tmwLeft)
    tmwLi.appendChild(tmwRight)
    tmwLi.addEventListener('click', chooseToday)

    //2
    const tmwLi2 = document.createElement('li')
    tmwLi2.classList.add('calenderBtns')
    topPartUl.appendChild(tmwLi2)
    const tmwLeft2 = document.createElement('div')

    const tmwImg2 = document.createElement('img')
    tmwImg2.classList.add('calenderSvgs')
    tmwImg2.setAttribute('src', './svgs/btn_svgs/tomorrow.svg')
    const tmwTxt2 = document.createElement('p')
    tmwTxt2.textContent = 'Tomorrow'

    tmwLeft2.appendChild(tmwImg2)
    tmwLeft2.appendChild(tmwTxt2)

    const tmwRight2 = document.createElement('div')
    const tmwRightTxt2 = document.createElement('p')
    tmwRightTxt2.classList.add('grayDisplay')
    tmwRightTxt2.textContent = '1'

    tmwRight2.appendChild(tmwRightTxt2)

    tmwLi2.appendChild(tmwLeft2)
    tmwLi2.appendChild(tmwRight2)
    tmwLi2.addEventListener('click', chooseTomorrow)
    //3
    const tmwLi3 = document.createElement('li')
    tmwLi3.classList.add('calenderBtns')
    topPartUl.appendChild(tmwLi3)
    const tmwLeft3 = document.createElement('div')

    const tmwImg3 = document.createElement('img')
    tmwImg3.classList.add('calenderSvgs')
    tmwImg3.setAttribute('src', './svgs/btn_svgs/weekend.svg')
    const tmwTxt3 = document.createElement('p')
    tmwTxt3.textContent = 'Coming weekend'

    tmwLeft3.appendChild(tmwImg3)
    tmwLeft3.appendChild(tmwTxt3)

    const tmwRight3 = document.createElement('div')
    const tmwRightTxt3 = document.createElement('p')
    tmwRightTxt3.classList.add('grayDisplay')
    tmwRightTxt3.textContent = `${format(nextSaturday(new Date()), 'eee MMM dd')}`

    tmwLi3.addEventListener('click', chooseComingWeekend)

    tmwRight3.appendChild(tmwRightTxt3)

    tmwLi3.appendChild(tmwLeft3)
    tmwLi3.appendChild(tmwRight3)
    //4
    const tmwLi4 = document.createElement('li')
    tmwLi4.classList.add('calenderBtns')
    topPartUl.appendChild(tmwLi4)
    const tmwLeft4 = document.createElement('div')

    const tmwImg4 = document.createElement('img')
    tmwImg4.classList.add('calenderSvgs')
    tmwImg4.setAttribute('src', './svgs/btn_svgs/next-week.svg')
    const tmwTxt4 = document.createElement('p')
    tmwTxt4.textContent = 'Next week'

    tmwLeft4.appendChild(tmwImg4)
    tmwLeft4.appendChild(tmwTxt4)

    const tmwRight4 = document.createElement('div')
    const tmwRightTxt4 = document.createElement('p')
    tmwRightTxt4.textContent = `${format(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7), 'eee MMM dd')}`
    tmwRightTxt4.classList.add('grayDisplay')

    tmwLi4.addEventListener('click', chooseNextWeek)

    tmwRight4.appendChild(tmwRightTxt4)

    tmwLi4.appendChild(tmwLeft4)
    tmwLi4.appendChild(tmwRight4)
    //5
    const tmwLi5 = document.createElement('li')
    tmwLi5.classList.add('calenderBtns')
    topPartUl.appendChild(tmwLi5)
    const tmwLeft5 = document.createElement('div')

    const tmwImg5 = document.createElement('img')
    tmwImg5.classList.add('calenderSvgs')
    tmwImg5.setAttribute('src', './svgs/btn_svgs/cancel.svg')
    const tmwTxt5 = document.createElement('p')
    tmwTxt5.textContent = 'No due date'

    tmwLeft5.appendChild(tmwImg5)
    tmwLeft5.appendChild(tmwTxt5)

    const tmwRight5 = document.createElement('div')
    const tmwRightTxt5 = document.createElement('p')
    tmwRightTxt5.classList.add('grayDisplay')
    tmwRightTxt5.textContent = ''

    tmwLi5.addEventListener('click', chooseNoDate)

    tmwRight5.appendChild(tmwRightTxt5)

    tmwLi5.appendChild(tmwLeft5)
    tmwLi5.appendChild(tmwRight5)

    //

    document.body.appendChild(calenderContainer)

    createCalender(calenderContainer)
    

    

}

const adjustDate = () => {
    let selection = document.querySelector('.selected') !=null

    let selectedProj 

    if (selection == false){
        selectedProj = document.querySelector('#contentTitle').textContent
        console.log(selectedProj)
        
    } else {
        selectedProj = document.querySelector('.selected').id
        console.log(selectedProj)
    }
}


export {createProjDropBtn, displayProjDrop, displayDueDateDrop}