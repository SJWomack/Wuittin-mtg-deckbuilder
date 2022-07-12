const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/:id', rejectUnauthenticated, (req, res) => {
    const sqlQuery = `
        SELECT card_id AS id, card_name AS name, card_type AS type, deck_id, quantity FROM "deck_cards"
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
    const valuePlaceholder = (req.body.cardList).map((card, i) => {return ( `($1 , $${(4 * i) + 2}, $${(4 * i) + 3}, $${(4 * i) + 4}, $${(4 * i) + 5} )`)})
    const values = req.body.cardList.map((card) => {return ([card.id, card.name, card.type, card.quantity])} )
    console.log(valuePlaceholder)
    const sqlQuery =`
    INSERT INTO "deck_cards" (deck_id, card_id, card_name, card_type, quantity)
    VALUES ${valuePlaceholder.join(',')}
    `
    console.log(sqlQuery, values.flat(1))
    pool.query(sqlQuery, [req.body.id, values.flat(1)].flat(1))
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