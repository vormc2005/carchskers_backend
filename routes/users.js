const express = require('express');
const router = express.Router();

const {addUser} = require('../contorller/users')

//@route POST api/users
//@desc Register admin user

router.post('/user', addUser);

module.exports = router;