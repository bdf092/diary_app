// const db = require('../database/db')

// class Diary {

//     constructor(data) {
//           this.id = data.id
//           this.date = data.date
//           this.time = data.time
//           this.text = data.text
//           this.cateogry = data.category
    
//         }
        
//         static async getAll() {
//             const response = await db.query("SELECT * FROM entries ORDER BY time;")
//             if (response.rows.length === 0){
//                 throw new Error('No entries available')
//             }
    
//             return response.rows.map(e => new Diary(e))
//         }
      
//       }

    
    
//     module.exports = Diary
