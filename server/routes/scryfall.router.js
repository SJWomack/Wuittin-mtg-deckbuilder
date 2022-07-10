const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios')

router.get('/search/:term', (req,res) =>{
    axios.get(`https://api.scryfall.com/cards/search?unique&q=${req.params.term}`)
        .then((result) =>{
            console.log(result.data);
            let cards = result.data.data.splice(0, 25);
            res.send(cards);
        })
        .catch((err) => {console.log('scryfall search failed', err); res.sendStatus(500)})
})

module.exports = router;