const express =  require('express');
const router = express.Router();

const {sendEmail} =require('../contorller/email')




router.post('/forma', sendEmail)


module.exports = router;