import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';




const app = express();



//middleware

app.get('/',(req,res)=>{
    res.send('hello')
})

app.use(notFoundMiddleware)




const port = process.env.PORT || 5000;



app.listen(port,() => {

    console.log(`listening on server ${port}`)
})