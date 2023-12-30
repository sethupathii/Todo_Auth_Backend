const express = require('express');
const { AuthenticationUsers } = require('../controller/login');
const client = require('../redis');
const router = express.Router();

client.connect().then(() => {
    console.log("Connected to redis");
}).catch(e => console.log(e));

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const loginCredentials = await AuthenticationUsers(email, password); 
        console.log(loginCredentials);
        if (loginCredentials === "Invalid Username or Password") {
            res.status(200).send("Invalid Username or Password"); 
        } else if (loginCredentials === "Server Busy") {
            res.status(200).send("Server Busy")
        } else {
            res.status(200).json({ token: loginCredentials.token }); 
        }
    } catch (error) {
        res.status(500).json({ error: 'Server Error' }); 
    }
});

module.exports = router;
