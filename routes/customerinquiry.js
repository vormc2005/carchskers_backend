const express = require('express');
const router = express.Router();

const {
    addInquiry, 
    getInquiry, 
    remove, 
    update
} = require('../contorller/customerinquiry')

//@route POST api/inquiry
//@desc Register admin user

router.post('/inquiry', addInquiry);

//@route GET api/inquiry
//@desc get all messages
router.get('/inquiry', getInquiry);
//@route delete inquiry
////@desc delete inquiries
router.delete('/inquiry/:inquiryID', remove)
//@route update
//@desc update inquries
router.put('/inquiry/:inquiryID', update)


//CRUD oges here

module.exports = router;