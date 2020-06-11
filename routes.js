const express = require("express")
const router = express.Router()

const db = require('./db')

router.get("/", (req, res) => {
  if(err){
    console.log("got an error => " + err)
  }
  res.render("home/index", err)
})

module.exports = router
