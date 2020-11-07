const nodemailer = require('nodemailer');


exports.sendEmail = (req, res)=>{
    let data = req.body
    console.log(data)
    let smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port:465,
        auth: {
            user:"carcheckers2020@gmail.com",
            pass: "Carcheckers#123"
        }
    });

    let mailOptions ={
        from: data.email,
        to: "carcheckers2020@gmail.com",
        subject: `Message from  ${data.name} about ${data.subject}`,
        html: `
        <h3>Information</h3>
        <ul>
        <li>Name: ${data.name}</li>
        <li>Phone: ${data.phone}</li>
        <li>email: ${data.email}</li>
        <li>Year: ${data.year}</li>
        <li>Make: ${data.make}</li>
        <li>Model: ${data.model}</li>
        <li>Trim: ${data.trim}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.comments}</p>
        `
    }

    smtpTransport.sendMail(mailOptions, (error, response)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send('Success')
        }
    })

    smtpTransport.close();

}