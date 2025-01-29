import mongoose from "mongoose";


const connectDB = async () =>{

mongoose.connection.on('connected',()=>{
    
    console.log(" MR. Shourov your database is Connected ")
})


await mongoose.connect(`${process.env.MONGODB_URI}/mern_forever_ecommerce`)




}

export default connectDB
