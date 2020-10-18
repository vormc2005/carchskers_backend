const express = require('express');
const router = express.Router();

const {
    getLogedInUser, 
    authGetToken

} = require('../contorller/auth')

//@route GET api/auth
//@desc Get loged in useradmin user

router.get('/auth', getLogedInUser);

//@route POST api/auth
//@ route desc Auth user and get token
router.post('/auth', authGetToken);


module.exports = router;