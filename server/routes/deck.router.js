const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/format', (req,res) =>{
    console.log('format get');
    res.sendStatus(200)
})



module.exports = router;