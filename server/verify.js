const User = require('./models/user');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

const secretKey = '54634-63456-34-65534-6534653';

exports.getToken = (user) => {
    return jwt.sign(user, secretKey, {
        expiresIn: '7d'
    });
};

exports.verifyOrdinaryUser = function (req, res, next) {
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, secretKey, function (err, decoded) { // here we'll check if it's the author of the post or not
            if (err) {
                const err = new Error('You are not authenticated!');
                err.status = 401;
                return next(err);
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        const err = new Error('No token provided!');
        err.status = 403;
        return next(err);
    }
};
