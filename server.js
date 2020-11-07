const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const cors =require('cors')
//Import routes
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const inquiryRoutes = require('./routes/customerinquiry')
const backUpRoutes = require('./routes/backUpinquiry')
const app = express()//initialize express

const connectDB = require('./config/db');



connectDB();

//Middlewares
app.use(bodyparser.json());
app.use(express.json({extended: false}));


//define routes 
app.get('/', (req, res)=>res.send({msg :'Hello world'}))

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api',inquiryRoutes);
app.use('/api', backUpRoutes);

//*************************Email******************** */
// app.post('/api/forma', (req, res)=>{
//     let data = req.body
//     console.log(data)
//     let smtpTransport = nodemailer.createTransport({
//         service: "Gmail",
//         port:465,
//         auth: {
//             user:"carcheckers2020@gmail.com",
//             pass: "Carcheckers#123"
//         }
//     });

//     let mailOptions ={
//         from: data.email,
//         to: "carcheckers2020@gmail.com",
//         subject: `Message from  ${data.name}`,
//         html: `
//         <h3>Information</h3>
//         <ul>
//             <li>Name: ${data.name}</li>
//             <li>Subject: ${data.subject}</li>
//             <li>Email: ${data.email}</li>
//             <li>Phone: ${data.phone}</li>
//             <li>Year: ${data.year}</li>
//             <li>Make: ${data.make}</li>
//             <li>Model: ${data.model}</li>
//             <li>Trim: ${data.trim}</li>
           
//         </ul>

//         <h3>Comments</h3>
//         <p>${data.comments}</p>
//         `
//     }

//     smtpTransport.sendMail(mailOptions, (error, response)=>{
//         if(error){
//             res.send(error)
//         }
//         else{
//             res.send('Success')
//         }
//     })

//     smtpTransport.close();

// })

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>console.log(`Seerver started on port ${PORT}`))

