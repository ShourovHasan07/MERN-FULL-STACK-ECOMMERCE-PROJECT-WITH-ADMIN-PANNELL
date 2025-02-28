// placing order using CoD method 
import orderModel from './../models/orderModel.js';
import userModel from './../models/userModel.js';


const placeOrder = async (req,res) =>{

    try {

        const {userId, items,amount,address} = req.body

        const orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod:'COD',
            payment: false,
            date:Date.now() // current date are show  and cheack 

        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true , message:'order placed'})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
    
}
// placing order using Stripe  method 

const placeOrderStripe = async (req,res) =>{

}
// placing order using CoD method 

const placeOrderBksh = async (req,res) =>{

}

// all order data for admin panel 

const allOrders = async (req,res) =>{

}



// user order data for Frontend 
const userOrders = async (req,res) =>{

    try {
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true,orders})
        
    } catch (error) {

        console.log(error)
        res.json({success:false,message:error.message})
        
    }

}


// update order status for admin panel 
const updateStatus = async (req,res) =>{

}

export {placeOrder,placeOrderStripe,placeOrderBksh,allOrders,userOrders,updateStatus}
