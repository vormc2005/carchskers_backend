const express = require('express');
const router = express.Router();

const {
    addbackupInquiry
} = require('../contorller/backUpinquiry')

//@route POST api/users
//@desc Register admin user

router.post('/backup', addbackupInquiry);

module.exports = router;