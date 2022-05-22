const express = require('express')
const { Table } = require('../managers/modelsMansger')
const router = express.Router()

router.post('/write',async(req,res)=>{
  
  try {
    await Table('board').create(req.body).then((write)=>{
        console.log(write)
        res.json({
            status: true,
            result: write,
            msg: '게시글 잘썻음'
        })
    })
  } catch (error) {
    console.log(error)
 
  }
  
})


router.post('/view',async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

module.exports = router;