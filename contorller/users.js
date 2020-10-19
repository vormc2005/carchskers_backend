const User = require('../models/User')
const { validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

exports.addUser = async (req, res)=>{
    // res.send(req.body)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    // res.send('passed')
    const {name, email, password} = req.body
    try{
        let user = await User.findOne({email:email});
        if(user){
            res.status(400).json({msg: "User already exists"})
        }
        user = new User({
            name, 
            email,
            password
        })
        const salt = await bcrypt.genSalt(10);//HASHING PASSWORD
        user.password = await bcrypt.hash(password, salt); //assigning hashed password to a password

        await user.save() //save to database

        res.send("User saved")
        
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error')

    }
}