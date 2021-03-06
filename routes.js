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
  .then(students=>  res.render('home/students', {students:students}))
})

router.get("/home/profile/:id", (req,res)=>{
  const id = Number(req.params.id)
  console.log(id)

db.getFaveTopic(id)
.then((student)=>{
  // console.log(student)
  return db.getLeastFave(id)
  .then((obj)=>{
    // console.log(obj)
    student.leastFave = obj.least_topic
    console.log(student)
    res.render('home/profile',student)
    })
    .catch(err =>{
    console.log(err)
    })
  })
})

// router.get("/home/profile/:id", (req,res)=>{
//   const id = Number(req.params.id)
//   console.log(id)

// db.getFaveTopic(id)
// .then((student)=>{
//   // console.log(student)
//   return db.getLeastFave(id)
//   .then((obj)=>{
//     // console.log(obj)
//     student.leastFave = obj.least_topic
//     return db.getTopics()
//     .then((topics)=>{
//       // topics.forEach(topic => {
        
//       // })
//       // let data = {topics}
//       student.topics = topics
//       console.log(topics)
//       console.log(student)
//       res.render('home/profile',student)
//       })

router.post('/profile', (req, res) => {
  let fave = req.body.favourite
  let least = req.body.least_favourite

  db.insertFavourite(fave, least)
  .then(()=> {
    console.log(fave, least)
    res.redirect('/students')
  })
  .catch (err => {
    console.log(err)
  })
})

// db.joinUserPost(id)
// .then((post)=>{
//   console.log('Post' , post)
//   return db.joinUserProfile(id)
//     .then(profile => {
//       console.log("Profile" ,profile)
//       profile.post = post
//       console.log(profile)
//       res.render('profile', profile)    aster
//     })
//     .catch(err =>{
//     console.log(err)
//     })
//   })
// })

module.exports = router