const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/format/:formatType', rejectUnauthenticated, (req, res) => {
    const queryText = `
        SELECT * FROM "decks"
        WHERE "format_type" = $1 AND "user_id" = $2;
     `

    pool.query(queryText,[req.params.formatType,req.user.id ])
        .then((result) => {
            console.log('get format decks success'), result.rows
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('get format decks err', err)
            res.sendStatus(500)
        })
})

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `
        SELECT * FROM "decks"
        WHERE "id" = $1;
        `

    pool.query(queryText,[req.params.id])
        .then((result) => {
            console.log('get format decks success'), result.rows
            res.send(result.rows)
        })
        .catch((err) => {
            console.log('get format decks err', err)
            res.sendStatus(500)
        })
})

router.post('/new', rejectUnauthenticated, (req, res) => {
    const queryText = `
        INSERT INTO "decks" (deck_name, format_type, user_id) 
        VALUES ($1, $2, $3)
        RETURNING *;
        
    `
    const queryParams = [req.body.deckName, req.body.format, req.user.id]

    pool.query(queryText, queryParams)
        .then((result) => {
            res.send(result.rows)
            console.log('deck created', result);

        })
        .catch((err) => {
            console.log('err in created deck', err);
            res.sendStatus(500);
        })
})

router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
    const queryText = `
        DELETE FROM "decks" WHERE "id" = $1
    `


pool.query(queryText, [req.params.id])
    .then(() => {
        console.log('deck deleted');
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log('delete deck failed', err);
        res.sendStatus(500);
    })
})


module.exports = router;