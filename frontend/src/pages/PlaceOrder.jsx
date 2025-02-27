import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from './../Components/CartTotal';
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

import { toast } from "react-toastify";


const PlaceOrder = () => {


  const [method, setMethod] = useState('cod')

  const {backendUrl,token,cartItems, setCartItems,navigate,getCartAmount,delivery_fee,products} = useContext(ShopContext)


  const [fromData,setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:'',
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value

    setFormData(data =>({...data,[name]:value}))

  }

 const onSubmitHandler = async (event) =>{
   event.preventDefault()

   try {

    let orderItems = []
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if (cartItems[items][item]>0) {

          const itemInfo = structuredClone(products.find(product=>product._id === items))

          if (itemInfo){
            itemInfo.size = item
            itemInfo.quantity = cartItems[items][item]
            orderItems.push(itemInfo)
          }
          
        }
      }
    }
    
     let orderData = {
      address: fromData,
      items:orderItems,
      amount: getCartAmount() + delivery_fee
     }

     switch(method){
      // api calls for cod 
       case 'cod':
        const response = await axios.post(backendUrl + '/api/order/place', orderData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        
   console.log(response.data)
 if (response.data.success){
   setCartItems({})
   navigate('/orders')
 } else {
  toast.error(response.data.message)
 }

        break;

        default:
          break

     }
   
    
   } catch (error) {
    toast.error('An error occurred while placing the order');
    console.error(error);
    
   }

 }
  

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
      {/* -----left side ----  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-2xl font-medium  mb-3 mt-2">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input  required
          onChange={ onChangeHandler}
           name="firstName"
           value={fromData.firstName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name "
          />
          <input  required
          onChange={ onChangeHandler}
           name="lastName"
           value={fromData.lastName}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="last name "
          />
        </div>
        <input  required
         onChange={ onChangeHandler}
           name="email"
           value={fromData.email}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address "
        />
        <input  required
         onChange={ onChangeHandler}
           name="street"
           value={fromData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street "
        />

        <div className="flex gap-3">
          <input  required
           onChange={ onChangeHandler}
           name="city"
           value={fromData.city}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City "
          />
          <input  required
           onChange={ onChangeHandler}
           name="state"
           value={fromData.state}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input  required
           onChange={ onChangeHandler}
           name="zipcode"
           value={fromData.zipcode}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="zip code "
          />
          <input  required
           onChange={ onChangeHandler}
           name="country"
           value={fromData.country}
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="country"
          />
        </div>

        <input  required
         onChange={ onChangeHandler}
           name="phone"
           value={fromData.phone}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder=" Phone  Number"
        />
      </div>

      

      {/* ----- Right side -----  */}

      <div>
        <div>
          <CartTotal></CartTotal> 
        </div>

        <div className="mt-12" >
        <Title text1={'PAYMENT'} text2={'METHOD'} ></Title>

        {/* ------ Payment Method Selection --------*/}

        <div className="flex gap-3 flex-col lg:flex-row " >
          <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer " >
            <p  onClick={()=>setMethod("stripe")} className={`min-w-3.5 h-3.5 border rounded-full  ${method==="stripe" ? 'bg-green-500' : '' }   `}></p>
            <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
          </div>
          <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer " >
            <p  onClick={()=>setMethod('bkash')}  className={`min-w-3.5 h-3.5 border rounded-full ${method==="bkash" ? 'bg-green-500' : '' }  `}></p>
            <p className="text-blue-500 font-bold text-sm  mx-4" > PAY WITH BKASH </p>
          </div>
          <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer " >
            <p onClick={()=>setMethod('cod')}  className={`min-w-3.5 h-3.5 border rounded-full ${method==="cod" ? 'bg-green-500' : '' }  `}></p>
             
            <p className="text-blue-600 font-bold text-sm  mx-4" >CASH ON DELIVERY </p>
          </div>
        </div>
        

        <div className=" mt-4  px-3 py-2   ">

        <button type="submit" className="bg-black  mt-5 text-orange-600 px-4 py-2 rounded hover:bg-green-500  ">PLACE ORDER </button>

        </div>



        </div>
      </div>

     



    </form>
  );
};

export default PlaceOrder;
