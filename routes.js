const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.send("test")
  .catch(err => {
    res.send("It's not working :(", err)
  })
})


module.exports = router