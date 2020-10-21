const User = require('../models/User')
const { validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const config = require('config');



exports.getLogedInUser = async (req, res)=>{
    // res.send(' Get Get Loggedin user')
    try{
       const user = await  User.findById(req.user.id).select('-password') ;
       res.json(user)
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')
    }
}

exports.authGetToken = async (req, res)=>{
    // res.send(' Post Loggein user token')
     // res.send(req.body)
     const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json({errors:errors.array()})
     }
     const {email, password} = req.body;
     
     try{
            let user = await User.findOne({email});
            if(!user) {
                res.status(400).json({msg:'Invalid Credentials'});

            }
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                return res.status(400).json({msg:'Invalid credentials'})
            }
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
        res.status(500).json({msg:"Server Error"})

     }
}