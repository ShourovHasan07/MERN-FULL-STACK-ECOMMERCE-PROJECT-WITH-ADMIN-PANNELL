import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import contact from './pages/contact';
import Product from './pages/Product'
import Card from './pages/Card'
import Login from './pages/Login'
import PlaceOrder from './pages/Placeorder'
import Orders from './pages/Orders'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:pv-[9vw]'>
    
    <Navbar/>
    <SearchBar/>
    <Routes>

    <Route path = '/' element= {<Home/>} />

<Route path = '/about' element= {<About/>} />

<Route path = '/collection' element= {<Collection/>} />
<Route path = '/contact' element= {<contact/>} />
<Route path = '/product/:productId' element= {<Product/>} />
<Route path = '/card' element= {<Card/>} />
<Route path = '/login' element= {<Login/>} />
<Route path = '/place-order' element= {<PlaceOrder/>} />
<Route path = '/orders' element= {<Orders/>} />
    </Routes>

    <Footer/>

     
    </div>
  )
}

export default App