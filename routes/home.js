
const express = require('express');
const { Authorization } = require('../controller/login');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const token = req.headers.authorization;
        const loginCredentials = await Authorization(token);
        if (loginCredentials === false || !loginCredentials) {
            res.status(200).send("Invalid Token");
        } else {
            res.json(loginCredentials);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});


module.exports = router;