
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

module.exports = {
    index,show,create
}
