const db = require('../database/connect')

class Diary {

    constructor(data) {
          this.id = data.id
          this.date = data.date
          this.time = data.time
          this.text = data.text
          this.category = data.category
    
        }
        
        static async getAll() {
            const response = await db.query("SELECT * FROM entries ORDER BY time;")
            if (response.rows.length === 0){
                throw new Error('No entries available')
            }
    
            return response.rows.map(e => new Diary(e))
        }
        static async findById(id) {
            const response = await db.query("SELECT * FROM entries WHERE id = $1;",[id])
            if (response.rows.length === 0){
                throw new Error('Unable to locate entry')
            }
    
            return new Diary(response.rows[0])
        }


      
      }

    
    
    module.exports = Diary
