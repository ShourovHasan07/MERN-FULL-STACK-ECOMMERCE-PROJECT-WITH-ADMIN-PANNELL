import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from './../Components/CartTotal';
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {


  const [method, setMethod] = useState('cod')

  const {navigate} = useContext(ShopContext)

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
      {/* -----left side ----  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-2xl font-medium  mb-3 mt-2">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name "
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="last name "
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address "
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street "
        />

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City "
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="zip code "
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="country"
          />
        </div>

        <input
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

        <button onClick={()=>navigate('/orders')} className="bg-black  mt-5 text-orange-600 px-4 py-2 rounded hover:bg-green-500  ">PLACE ORDER </button>

        </div>



        </div>
      </div>

     



    </div>
  );
};

export default PlaceOrder;
