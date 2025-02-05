
import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import SlideBar from './components/slideBar/SlideBar.jsx'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar/>
        <hr/>
       <div className="app-content">
          <SlideBar/>
          <Routes>
            <Route path="/add" element={<Add/>} />
            <Route path="/list" element={<List/>} />
            <Route path="/orders" element={<Orders/>} />
          </Routes>
       </div>
    </div>
  )
}

export default App