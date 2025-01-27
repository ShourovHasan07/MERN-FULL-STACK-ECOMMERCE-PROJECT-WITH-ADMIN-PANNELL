import validator from 'validator';
import bcrypt from "bcrypt"
import  Jwt from 'jsonwebtoken';
import userModel from './../models/userModel.js';


 const createToken = (id) =>{

    return Jwt.sign({id},process.env.JWT_SECRET)
 }


//Route for user login

const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // ব্যবহারকারী খুঁজুন
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.json({ success: false, message: "User doesn't exist" });
      }
  
      // পাসওয়ার্ড যাচাই করুন
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (isMatch) {
        // টোকেন তৈরি করুন
        const token = createToken(user._id);
  
        // সফল রেসপন্স পাঠান
        return res.json({ success: true, token });
      } else {
        // পাসওয়ার্ড ভুল হলে
        return res.json({ success: false, message: "Invalid credentials" });
      }
    } catch (error) {
      console.error(error);
  
      // ত্রুটির জন্য রেসপন্স পাঠান
      res.json({ success: false, message: error.message });
    }
  };
  

//Rout for user Register

const registerUser = async (req,res)=>{
   
    try {

        const {name,email,password} =  req.body

        // checking user already exists or not
        
        const exists = await userModel.findOne({email})

        if(exists){
            return res.json({success:false, message: " user already exists"})
            
        }

        //validating email format  & strong password

        if (!validator.isEmail(email)) {

            return res.json({success:false , message: " Please enter a valid email" })
            
        }
        if (password.length <8) {

            return res.json({success:false , message: " Please enter a strong password " })
            
        }
    // hasing user password 

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new  userModel({
        name,
        email,
        password : hashedPassword
    })


     const user = await newUser.save() 
     const token = createToken(user._id)

     res.json ({success:true, token})


        
    } catch (error) {

        console.log (error)
        res.json({success:false,message:error.message})
        
    }


}

// Route for admin login 
 const adminLogin = async (req,res)=>{

 }

 export {loginUser,registerUser,adminLogin}