const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/:id', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
        SELECT * FROM "deck_cards" 
        WHERE deck_cards.deck_id = ${req.params.id}
    `
    pool.query(sqlQuery)
        .then((results) =>{
            console.log('get cards success')
            res.send(results.rows);
        })
        .catch((err) => {
            console.log('get cards failed', err)
            res.sendStatus(500);
        })
})

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log(req.body)
    const values = req.body.cardList.map((card) => {return (`'${card.id}', ${req.body.id}, '${card.name}', '${card.type}', ${card.quantity}`)} )
    const sqlQuery =`
    INSERT INTO "deck_cards" (card_id, deck_id, card_name, card_type, quantity)
    VALUES ${values.map(value => `(${value})`)}
    `
    console.log(sqlQuery)
    pool.query(sqlQuery)
        .then(() => {
            console.log('success in card add')
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('err in add', err)
            res.sendStatus(500)
        })
   
});

module.exports = router;