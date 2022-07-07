const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/format/:formatType', rejectUnauthenticated, (req,res) =>{
    const queryText = `
        SELECT * FROM "decks"
        WHERE "format_type" = '${req.params.formatType}'
     `

     pool.query(queryText)
        .then((result) => {
            console.log('get format decks success'), result.rows 
            res.send(result.rows)})
        .catch((err) => {
            console.log('get format decks err', err) 
            res.sendStatus(500)})      
})



module.exports = router;