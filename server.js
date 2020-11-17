const express = require('express');
const bodyparser = require('body-parser');
const cors =require('cors')
//Import routes
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const inquiryRoutes = require('./routes/customerinquiry')
const backUpRoutes = require('./routes/backUpinquiry')
const emailRoutes = require('./routes/email')
//initialize express
const app = express()

const connectDB = require('./config/db');



connectDB();

//Middlewares
app.use(bodyparser.json());
app.use(express.json({extended: true}));
// app.use(express.json({extended: false}));
app.use(cors());



//define routes 
app.get('/', (req, res)=>res.send({msg :'Hello world'}))

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api',inquiryRoutes);
app.use('/api', backUpRoutes);
app.use('/api', emailRoutes)





const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))

