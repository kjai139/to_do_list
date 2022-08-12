import { homePage } from "./globalVar"



//proj dropdown button


const createProjDropBtn = () => {

    let dropBtnDiv = document.createElement('div')
    dropBtnDiv.classList.add('dropBtnDiv')
    
    let bTC = document.querySelector('.bottomTaskContainer')
    console.log(bTC)

    const dropBtn = document.createElement('button')
    dropBtn.setAttribute('id', 'dropBtn')

    const dropBtnImg = document.createElement('img')
    dropBtnImg.setAttribute('id', 'dropBtnImg')


    dropBtnImg.setAttribute('src', `${homePage.projectList[0].img}`)

    const dropBtnTxt = document.createElement('p')
    dropBtnTxt.setAttribute('id', 'dropBtnTxt')
    dropBtnTxt.textContent = `${homePage.projectList[0].title}`

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
        projDropContainer.classList.add('phaseout')
        projDropContainer.addEventListener('transitionend', function(){
                projDropContainer.remove()
                overlay2.remove()
            })
            
        })

    

    homePage.projectList.forEach(element => {
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
        })
        

    })
    projDropContainer.appendChild(projDrop) 
    document.body.appendChild(projDropContainer)  

    


}





export {createProjDropBtn, displayProjDrop}