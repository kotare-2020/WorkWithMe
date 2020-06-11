const express = require("express")
const router = express.Router()

const db = require('./db')

// piss take page on load
router.get("/", (req, res) => {
  res.render("home")
})

// pistake page clicks through to home page displaying students
router.get('/home/students', (req,res)=>{
  res.render('home/students')
})
  if(err){
    console.log("got an error => " + err)
  }
  res.render("home/index", err)
})

module.exports = router