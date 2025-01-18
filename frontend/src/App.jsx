import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import Home from "./pages/Home/Home"
import PlaceOrder from "./pages/Place_Order/PlaceOrder"
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
    <div className='app'>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
       </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App