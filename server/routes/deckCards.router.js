const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.post('/', (req, res) => {
    console.log(req.body)
    const values = req.body.cardList.map((card) => {return (`'${card.id}', ${req.body.id}, '${card.name}', '${card.type}', ${card.quantity}`)} )
    sqlQuery =`
    INSERT INTO "deck_cards" (card_id, deck_id, card_name, card_type, quantity)
    VALUES $1
    `
    console.log(sqlQuery )
    pool.query(sqlQuery, [values.map(value => `(${value})`)]
    )
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