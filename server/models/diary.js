

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
