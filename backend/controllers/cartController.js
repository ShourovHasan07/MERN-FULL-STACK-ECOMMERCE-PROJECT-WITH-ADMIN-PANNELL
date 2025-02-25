
import userModel from './../models/userModel.js';

// add products to userCart 

const addToCart = async (req, res) => {

    try {

        console.log("Request Body:", req.body)

        const { userId, itemId, size } = req.body;

        // ইউজার খুঁজে বের করা
        const userData = await userModel.findById(userId);
        console.log(userData);  

        // যদি ইউজার না পাওয়া যায়
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {}; // cartData না থাকলে খালি অবজেক্ট সেট করো

        // কার্ট আপডেট করা
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 }; // নতুন আইটেম যোগ করা
        }

        // কার্ট আপডেট করে সেভ করা
        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added to cart" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};



// update  userCart 

const updateCart = async (req,res) =>{

 try {

    const {userId,itemId,size,quantity} = req.body 
    const userData = await userModel.findById(userId)
    let  cartData = await userData.cartData

    cartData[itemId][size] = quantity
    await userModel.findByIdAndUpdate(userId,{cartData})
    res.json({success:true, message: " cart updated "})
     
    
 } catch (error) {

    console.log(error)
        res.json({success:false, message: error.message})
    
 }


}



//  get user cart data  

const getUserCart = async (req,res) =>{

   try {

    const {userId} = req.body

    const userData = await userModel.findById(userId)
    let  cartData = await userData.cartData

    res.json({success:true, cartData})
    
   } catch (error) {

    console.log(error)
        res.json({success:false, message: error.message})

    
   }


    

}

 export  { addToCart,updateCart,getUserCart}