 import express from 'express'
 import cors from 'cors'
 import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRout.js'
import cartRouter from './routes/cartRoute.js';



// App config   
 const app = express()
 const port = process.env.PORT || 4000 


//  database connection
connectDB ()
// connect cloudenary function 
connectCloudinary()

 // middlewares 

 app.use(express.json());
 app.use(cors())

 // api endpoints 

 app.use('/api/user',userRouter)
 app.use('/api/product',productRouter)
 app.use('/api/cart',cartRouter)


 
 app.get('/', (req,res)=>{
    res.send('API Working')
 })

 // Start the server 

  app.listen (port,()=> console.log('Server started on port : ' + port)  )



