/* jshint esversion: 8 */

const express = require('express');
const authMiddleware = require('../middlewares/auth');

const User = require('../models/User');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const userName = req.query.name;
        //const { paginationS, paginationL } = {paginationS: req.query.start, paginationL: req.query.length}
        const start = parseInt(req.query.start, 10);
        const length = parseInt(req.query.length, 10);
        var user = "";

        if(!userName){
            user = await User.find(); 
            
            return res.send({user});
        } else if(!req.query.start & !req.query.length){
            user = await User.find({name: {$regex: '.*' + userName + '.*', $options: "i"}});

            return res.send({user});
        } else {
            user = await User.find({name: {$regex: '.*' + userName + '.*', $options: "i"}});
            const resultUsers = user.slice(start, length);

            return res.send({resultUsers});
        }        
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: 'Error loading users'});
    }
});

/*router.get('/:userName', async (req, res) => {
    try {
        const {userName} = req.params;
        const user = await User.find({name: {$regex: '.*' + userName + '.*'}});

        console.dir(user);
        return res.send({user});
    } catch (err) {
        console.log(err);
        return res.status(400).send({error: 'Error loading user'});
    }
});*/

module.exports = app => app.use('/projects', router);