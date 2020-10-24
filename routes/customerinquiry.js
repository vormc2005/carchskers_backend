const express = require('express');
const router = express.Router();
const auth= require("../middleware/auth");
const { validationResult, check } = require('express-validator');


const {
    addInquiry, 
    getInquiry, 
    remove, 
    update,
    inquiryById
} = require('../contorller/customerinquiry')

//@route POST api/inquiry
//@desc Register admin user

router.post('/inquiry', [
check('name', "Name is required").not().isEmpty(),
check('email', 'Please type your valid email').isEmail(),
check('comments', "Please type your message").not().isEmpty()

], addInquiry);

//@route GET api/inquiry
//@desc get all messages
router.get('/inquiry', auth, getInquiry);
//@route delete inquiry
////@desc delete inquiries
router.delete('/inquiry/:inquiryID',auth, remove)
//@route update
//@desc update inquries
router.put('/inquiry/:inquiryID', auth, update)



router.param('inquiryID', inquiryById)


//CRUD oges here

module.exports = router;