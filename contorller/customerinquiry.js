
const Inquiry = require('../models/Inquiry')

exports.inquiryById = (req, res, next, id)=>{
    Inquiry.findById(id).exec((err, inquiry)=>{
         if(err || !inquiry){
             return res.status(400).json({
                 error: "Inquiry does not exist"
             })
         }
         req.inquiry = inquiry
         next()
     })
 }


exports.addInquiry = async (req, res)=>{
    // res.send('Inquiry added')
    const inquiry = await new Inquiry(req.body)
    inquiry.save((err, data)=>{
        if(err){
            return res.status(400).json({
                msg:"Server error"
            })
        }
        res.json({data})
        
    })
}

//Get all inquiries
exports.getInquiry = async (req, res, next)=>{ 

    try{
        const inquiry = await Inquiry.find({}).sort({date:-1})
        res.json(inquiry)
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error")
    }
} 
//remove inquiries

exports.remove =(req, res)=>{
    // res.send("Inquiry deleted")
    const inquiry = req.inquiry    
    inquiry.remove((err, data)=>{
        if(err){
            return res.status(400).json({
               msg:"Delete was unsuccessful"
            })
        }
        res.json({
            message:`Inquiry was deleted`
        })
    })
}


//Update route
exports.update = async (req, res)=>{  

    Inquiry.findOneAndUpdate({_id: req.inquiry._id}, {$set: req.body}, {new: true}, (err, inquiry)=>{
        if(err){
            return res.status(400),json({
                error: 'You are not authorized to perorm this action'
            })
        }
       
        res.json(inquiry);
    })

   
}


//get inquiry by 
// exports.getInquiry = async (req, res, next)=>{ 

//     try{
//         const inquiry = await Inquiry.find({}).sort({date:-1})
//         res.json(inquiry)
//     }catch(err){
//         console.error(err.message);
//         res.status(500).send("Server Error")
//     }
// } 


