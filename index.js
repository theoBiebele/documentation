import mongodb from 'mongodb';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from   'dotenv/config';
// dotenv.config();

//  console.log(process.env.P && process.env.D)
 const D = process.env.D
 const P = process.env.P
const app = express();



app.use(express.json());


app.get('/',(req,res)=>{
    res.send('I am making giant ')
})


mongoose.
connect(D)
.then(()=>{
    console.log("DB connected")
    app.listen(P,()=>{
        
            console.log('...rendeing on port:XXXX')
            
       
       
    })
})
.catch((err)=>{
    console.log( err.message    )
})
.finally((ok)=>{
     console.log(`processed`)
 
    
});

