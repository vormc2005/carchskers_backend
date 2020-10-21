const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const auth= require("../middleware/auth")

const {
    getLogedInUser, 
    authGetToken

} = require('../contorller/auth')

//@route GET api/auth
//@desc Get loged in useradmin user

router.get('/auth', auth,  getLogedInUser);

//@route POST api/auth
//@ route desc Auth user and get token
router.post('/auth', [
      check('email', "Please include a valid email").isEmail(),
      check('password', 'Please enter a password with 6 or more characters').isLength({min:6})

], authGetToken);


module.exports = router;