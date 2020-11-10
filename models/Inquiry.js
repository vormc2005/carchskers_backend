const mongoose =require('mongoose');


const InquirySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    //subject
    subject:{
        type: String,
       
    },
    //to 
    email: {
        type: String,
        required: true,
        uniquie: true
    }, 
   phone: {
        type: String,        
        
    }, 
    make:{
        type: String,
        
    },
   model:{
        type: String,
       
    },
    trim:{
        type: String,
      
    },
    comments:{
        type: String,
        required:true
    },
    serviceprice:{
        type:String
    },
    servicetype:{
        type:String
    },

    
    date:{
        type: Date,
        default: Date.now()
    }
  
})

module.exports = mongoose.model('Inquiry', InquirySchema)