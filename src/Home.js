class Home {
    constructor(){
        this.projectList=[]
    }

    addProj = (proj) => {
        this.projectList.push(proj)
    }

    removeProj = (proj) => {

        let index = this.projectList.indexOf(proj)
        if (index > 1) {
            this.projectList.splice(index, 1)
        }
    }

    displayProjSidebar =() => {
        
    }
}



export default Home