const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');

const {
    addbackupInquiry
} = require('../contorller/backUpinquiry')

//@route POST api/users
//@desc Register admin user

router.post('/backup',[
    check('name', "Name is required").not().isEmpty(),
    check('email', 'Please type your valid email').isEmail(),
    check('comments', "Please type your message").not().isEmpty()
    
    ], addbackupInquiry);

module.exports = router;