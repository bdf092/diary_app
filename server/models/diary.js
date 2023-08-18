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

        static async create(data){

          const {date,time,text,category} = data
          const response = await db.query(`
          INSERT INTO entries (date,time,text,category)
          VALUES ($1,$2,$3,$4) RETURNING *`,
          [date,time,text,category])
  
  
          return new Diary(response.rows[0])
        }

        static async deleteById(id) {
            const result = await db.query(
            'DELETE FROM entries WHERE id = $1 RETURNING *', 
            [id]
            )
        
            if (result.rowCount === 0) {
            return false 
            }
        
            return true
        }
    
}
    
    module.exports = Diary