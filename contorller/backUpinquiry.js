const BackUp = require('../models/BackUpInquiry')


exports.addbackupInquiry = async (req, res)=>{
   
    const backup = await new BackUp(req.body)
    backup.save((err, data)=>{
        if(err){
            return res.status(400).json({
                msg:"Server error"
            })
        }
        res.json({data})
        
    })
}

//Get by name, or email, or id

