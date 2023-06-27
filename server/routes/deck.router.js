const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('is authenticated?', req.isAuthenticated())
        console.log('user', req.user)
        console.log('req.body:', req.body);
        let queryText = `INSERT INTO "card" ("deck_id", "card_id", "img", "card_name", "cmc", "color_identity", "description", "rulings")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
        pool.query(queryText, [ 1, req.body.multiverseid, req.body.imageUrl, req.body.name, req.body.cmc, req.body.colorIdentity, req.body.originalText, req.body.rulings])
            .then(result => {
                res.send(result.rows)
            }).catch(err => {
                console.log('Error in post /Shelf.router', err)
                res.sendStatus(500)
            })

    } else {
        res.sendStatus(403)
    }
})


module.exports = router;