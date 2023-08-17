
const Diary = require('../models/diary')


async function index(req,res){
    try {

    const entries = await Diary.getAll()
    res.status(200).json(entries)

    } catch(err){
    res.status(500).json({error: err.message} )

    }
}
async function show(req,res){
    try {

    const diaryEntry = parseInt(req.params.id)
    const entryData = Diary.findById(diaryEntry)
    res.status(200).json(entryData)

    } catch(err){
    res.status(500).json({error: err.message} )

    }
}

async function create(req,res) {
    try{
       const data = req.body
       const newEntry = await Diary.create(data)
       res.status(201).json(newEntry)
    } catch(err){
       res.status(400).json({ error:err.message})

    }
}

async function search(req, res) {
    const { date, month, year, category } = req.query
  
    const query = {}
  
    if (date) query.date = date  
    if (month) query.month = month
    if (year) query.year = year
    if (category) query.category = category
  
    const results = await Diary.find(query)
  
    res.json(results)
}

async function update(req, res) {
    const { id } = req.params
    const { text } = req.body
  
    const entry = await Diary.findById(id)
  
    if (!entry) {
      return res.status(404).json({ error: 'Entry not found' })  
    }
  
    entry.text = text
    await entry.save()
  
    res.json(entry)
}

async function destroy(req, res) {
    const { id } = req.params
    const deleted = await Diary.deleteById(id)
    if (!deleted) {
      return res.status(404).json({ error: 'Entry not found' })
    }
    res.status(204).end()
}

module.exports = {
    index,show,create,search,update,destroy
}
