const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
  if(err){
    console.log("got an error => " + err)
  }
  res.render("home/index", err)
})

router.get("profile/:id", )


module.exports = router