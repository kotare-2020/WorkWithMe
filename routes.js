const express = require("express")
const router = express.Router()

const db = require('./db')

router.get("/", (req, res) => {
  res.send("test")
  .catch(err => {
    res.send("It's not working :(", err)
  })
})

// router.post('/', (req,res)=>{


// })


module.exports = router