const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();
const User = require('../models/User')

console.log('innnnn herrrrre')

router.get("/whatever", (req, res, next) => {
  console.log('123456 in whatever',req.user)
  User.find().then(allUsers=>{
    res.json({user:req.user, allUsers:allUsers})
  })
})


module.exports = router;
