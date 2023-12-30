const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateUser = async (req, res, next) => {
    // Check if the authorization header exists
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized - Token missing or invalid' });
    }

    const token = req.headers.authorization.split(' ')[1];
    console.log(token);

    try {
        const decoded = jwt.verify(token, process.env.login_secret_keys);
        console.log('the decode value  is', decoded);
        const user = await User.findOne({ email: decoded.email });
        console.log("The authenticate user is ", user);
        if (!user) {
            return res.status(403).json({ error: 'Unauthorized - Invalid token' });
        }

        req.user = user._id;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({ error: 'Unauthorized - Invalid token from catch block' });
    }
};

module.exports = authenticateUser;
