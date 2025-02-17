import "./Header.css"
import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order your favorite food here</h1>
        <p>"Experience the joy of delicious meals made with fresh ingredients, crafted to satisfy your cravings"</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header