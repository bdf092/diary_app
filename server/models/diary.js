<<<<<<< HEAD

class Diary {
    constructor(data){
        this.id = data.id
        this.date = data.date
        this.time = data.time
        this.category = data.category
    }
}


module.exports = Diary;
=======
const db = require('../database/connect')

class DiaryEntries {

    constructor(data) {
          this.id = data.id
          this.date = data.date
          this.time = data.time
          this.text = data.text
          this.cateogry = data.category
    
        }
        static async getAll() {
            const response = await db
        }
      
      }

    
    
    module.exports = DiaryEntries
>>>>>>> 459511b63feb4c61e60bf560c5086585fbab666b
