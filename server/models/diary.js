<<<<<<< HEAD
<<<<<<< HEAD
=======
const db = require('../database/connect')
>>>>>>> 1a06998b4aa000d3f8e34b38da68110ff1170d31

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


<<<<<<< HEAD
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
=======
>>>>>>> 1a06998b4aa000d3f8e34b38da68110ff1170d31
      
      }

    
    
<<<<<<< HEAD
    module.exports = DiaryEntries
>>>>>>> 459511b63feb4c61e60bf560c5086585fbab666b
=======
    module.exports = Diary
>>>>>>> 1a06998b4aa000d3f8e34b38da68110ff1170d31
