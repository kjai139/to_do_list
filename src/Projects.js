class Project {
    constructor(name){
        this.tasks =[]
        this.title = name
    }
    
    addTask = (task) => {
        if (this.tasks.includes(task)){
            console.log('obj alrdy exist')
        } else {
            this.tasks.push(task)
        }
    }
}


export default Project