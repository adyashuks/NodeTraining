const { User } = require('./user');
const jwt = require('jsonwebtoken');

const get = async (req, res) => {

    try {

        const token = req.headers.authorization;
        const decoded = await jwt.verify(token, 'shhhhh');
        const user = await User.findAll();
        res.send(user);

        // jwt.verify(token, 'shhhhh', function (err, decoded) {
        //     if (err) {
        //         res.send(err);
        //         return;
        //     } else {
        //        
        //         res.send(decoded);
        //     }
        // });

    } catch (e) {
        res.send(e);
    }


}


const create = async (req, res) => {

    try {
        const user = await User.create(req.body);
        const token = await jwt.sign(user.dataValues, 'shhhhh');

        res.send(token);
    } catch (e) {
        res.send(e);
    }


}

module.exports = { get, create };