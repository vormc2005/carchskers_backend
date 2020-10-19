const express = require('express');

//Import routes
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const inquiryRoutes = require('./routes/customerinquiry')
const backUpRoutes = require('./routes/backUpinquiry')
const app = express()//initialize express

const connectDB = require('./config/db');



connectDB();

//Middlewares
app.use(express.json({extended: false}));


//define routes 
app.get('/', (req, res)=>res.send({msg :'Hello world'}))

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api',inquiryRoutes);
app.use('/api', backUpRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`Seerver started on port ${PORT}`))

