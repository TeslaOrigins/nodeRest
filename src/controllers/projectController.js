/* jshint esversion: 8 */

const express = require('express');
const authMiddleware = require('../middlewares/auth');

const User = require('../models/User');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        return res.send({users});
    } catch (err) {
        return res.status(400).send({error: 'Error loading users'})
    }
});

router.get('/:userName', async (req, res) => {
    try {
        const userName = req.params;
        const user = await User.find({name: {$regex: '.*' + userName + '.*'}});

        return res.send({user});
    } catch (err) {
        console.log(err);
        return res.status(400).send({error: 'Error loading user'})
    }
});

module.exports = app => app.use('/projects', router);