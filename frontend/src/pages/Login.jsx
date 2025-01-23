import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const submitHandler = async(event)=>{ 
    event.preventDefault()
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 ">
      <div className=" inline-flex items-center gap-2 mb-2 mt-10 ">
        <p className="prata-regular text-3xl ">{currentState}</p>

        <hr className="border-none h-[1.5px ] w-8 bg-green-800" />
      </div>

       
       { currentState === 'Login' ? '': <input type="text" className="w-full rounded px-3 py-2 border border-gray-800" placeholder="Name" required /> } 
       <input type="email" className="w-full rounded px-3 py-2 border border-gray-800" placeholder="Email" required />
       <input type="password" className="w-full rounded px-3 py-2 border border-gray-800" placeholder="Password" required />

       <div className="w-full flex justify-between text-sm mt-[-8px] " >

       <p>Forget your password ?  </p>

       {
        currentState==='Login'?
        <p className="cursor-pointer" onClick={()=>setCurrentState ('Sign Up') } >Create Account </p>
        : <p className="cursor-pointer" onClick={()=>setCurrentState('Login')} >Login account </p>
       }

       </div>

       <button className="bg-black text-white px-8 py-2 rounded font-light mt-4 hover:bg-slate-700 " >{currentState==='Login' ? 'Sign In ': 'Sign Up' }</button>



    </form>
  );
};

export default Login;
