const express = require("express")
const router = express.Router()

const db = require('./db')

// piss take page on load
router.get("/", (req, res) => {
  res.render("home")
})

// pistake page clicks through to home page displaying students
router.get('/home/students', (req,res)=>{
  db.getStudents()
  .then(obj=>  res.render('home/students', {obj:obj}))
})

router.get("/home/profile/:id", (req,res)=>{
  const id = req.params.id
  db.getStudentTopics(id)
  .then((student)=>{
    res.render('home/profile',student)
  })
  .catch(err =>{
    console.log(err)
  })
})


module.exports = router