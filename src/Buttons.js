



const dropDownMenu = document.createElement('select')
dropDownMenu.setAttribute('id', 'dropDownList')


homePage.projectList.forEach(element => {
    
    let option = document.createElement('option')
    let optionDiv = document.createElement('div')
    let optionImg = document.createElement('img')
    let optionText = document.createElement('p')

    optionImg.setAttribute('src', `${element.img}`)
    optionText.textContent = `${element.title}`

    optionDiv.appendChild(optionImg)
    optionDiv.appendChild(optionText)

    option.appendChild(optionDiv)
    dropDownMenu.appendChild(option)
});

bottomTaskContainer.appendChild(dropDownMenu)