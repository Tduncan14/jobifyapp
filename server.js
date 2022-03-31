import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleWare from './middleware/errorhandler.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import 'express-async-errors';
import authRoutes from'./routes/authRoutes.js';
import jobRoutes  from './routes/jobRoutes.js';
import cors from 'cors';



dotenv.config()




const app = express();



 mongoose.connect(process.env.URI)
 .then(() => console.log('connected to the database'));



//middleware

app.use(express.json())
app.use(cors())



app.get('/api/v1',(req,res)=>{
   
    res.json({msg:'welcome'})
})

// midd.e

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/jobs',jobRoutes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleWare)




const port = process.env.PORT || 5000;



app.listen(port,() => {

    console.log(`listening on server ${port}`)
})