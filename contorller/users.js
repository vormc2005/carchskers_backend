const User = require('../models/User')
const { validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config');

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
          return res.status(400).json({msg: "User already exists"})
        }
        user = new User({
            name, 
            email,
            password
        })
        const salt = await bcrypt.genSalt(10);//HASHING PASSWORD
        user.password = await bcrypt.hash(password, salt); //assigning hashed password to a password

        await user.save() //save to database

        // res.send("User saved")

        const payload = {
            user:{
                id: user.id
            }
        }

        jwt.sign(payload, config.get("jwtSecret"), {
           expiresIn: 360000 
        },(err, token)=>{
            if(err) throw(err);
            res.json({token})
        })
        
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error')

    }
}