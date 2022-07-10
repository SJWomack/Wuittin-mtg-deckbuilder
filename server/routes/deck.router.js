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

router.post ('/new', rejectUnauthenticated, (req,res) =>{
    const queryText = `
        INSERT INTO "decks" (deck_name, format_type, user_id) 
        VALUES ($1, $2, $3);
        SELECT SCOPE_IDENTITY();
    `
    const queryParams = [req.body.deckName, req.body.format, req.user.id]

    pool.query (queryText, queryParams)
        .then((result) => {
            console.log('deck created');
            res.send(result.data);
        } )
        .catch((err) => {
            console.log('err in created deck', err);
            res.sendStatus(500);
        })
})



module.exports = router;