export class Task {
    constructor(
        title = 'Unknown', 
        description = 'Unknown', 
        dueDate ='Unknown',
        priority = '0',
        checklist = false
        )
    {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.checklist = checklist
    }

    
}