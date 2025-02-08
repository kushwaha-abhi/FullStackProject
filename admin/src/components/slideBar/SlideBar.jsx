import React from 'react'
import "./SlideBar.css"
import { assets } from '../../../assets/assets.js'
import { NavLink } from 'react-router-dom'
const SlideBar = () => {
  return (
    
      <div className="slidebar">
        <div className="slidebar-options">
          <NavLink to="/add" className="slidebar-option">
              <img src={assets.add_icon} alt="" />
              <p>Add Item</p>
          </NavLink>
          <NavLink to ="/orders"className="slidebar-option">
              <img src={assets.order_icon} alt="" />
              <p>Orders</p>
          </NavLink>
          <NavLink to= "/list" className="slidebar-option">
              <img src={assets.order_icon} alt="" />
              <p>List Item</p>
          </NavLink>
        </div>
      </div>
  )
}

export default SlideBar