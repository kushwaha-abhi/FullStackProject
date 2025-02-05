import "./Navbar.css"
import {assets} from '../../../assets/assets'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
         <img  className="logo" src={assets.logo} alt="logo" />
         <img className="profile" src={assets.profile_image} alt="Profile-image" />
    </div>
  )
}

export default Navbar