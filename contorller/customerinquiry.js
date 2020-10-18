exports.addInquiry = (req, res)=>{
    res.send('Inquiry added')
}

//Get all inquiries
exports.getInquiry = (req, res)=>{
    res.send('All inquiries are displayed')
} 
//remove inquiries

exports.remove =(req, res)=>{
    res.send("Inquiry deleted")
}

exports.update = (req, res)=>{
    res.send("Inquiry updated")
}

//Need to build middleware for getting inquiry ID

