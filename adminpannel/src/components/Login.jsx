import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import axios from "axios";



const Login = ({setToken}) => {

 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')



    const onSubmitHandler = async (e) =>{
        try {
            e.preventDefault()

            const response = await axios.post (backendUrl + '/api/user/admin',{email,password})
            if (response.data.success){
                setToken(response.data.token)

            } 
            else{
                toast.error(response.data.message)
            }

            

        } catch (error) {

            console.log(error)
            toast.error(error.message)
            
        }
    }
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>

        <form onSubmit={onSubmitHandler} >
          <div className='mb-3 min-w-72'>
            <label className='text-sm font-medium text-gray-700 mb-2 block' htmlFor='email'>
              Email Address
            </label>
            <input
              id='email'
              className='rounded-md w-full px-3 py-2 border border-gray-500 outline-none focus:ring-2 focus:ring-gray-600'
              type='email'
              placeholder='your@gmail.com'
              autoComplete='email'
              onChange={(e)=>setEmail(e.target.value)} value={email}
              required
            />
          </div>

          <div className='mb-3 min-w-72'>
            <label className='text-sm font-medium text-gray-700 mb-2 block' htmlFor='password'>
              Password
            </label>
            <input
              id='password'
              className='rounded-md w-full px-3 py-2 border border-gray-500 outline-none focus:ring-2 focus:ring-gray-600'
              type='password'
              placeholder='Enter your password'
              autoComplete='current-password'
              onChange={(e)=>setPassword(e.target.value)} value={password}
              required
            />
          </div>

          <button className='bg-black text-white rounded text-sm px-8 py-2 hover:bg-gray-600' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
