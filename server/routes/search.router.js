const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get("/:search", (req, res) => {
    console.log(
        "in server get, and input search term should arrive as req.params.search, which is:",
        req.params.search
    );
    const searchTerm = req.params.search;

    console.log("searchterm", searchTerm);
    axios
        .get(
            `https://api.magicthegathering.io/v1/cards?name=${searchTerm}`
        )

        .then((response) => {
            console.log(response.data, "console loging in image router");
            res.send(response.data);
        })
        .catch((error) => {
            console.log("Error!", error);
        });
});

module.exports = router;