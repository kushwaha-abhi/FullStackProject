import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from "../../assets/frontend_assets/assets"

const ExploreMenu = ({category,setCategory}) => {
  if (!menu_list || menu_list.length === 0) {
    console.log("No menu items available");
    return <p>No menu items available.</p>
  }

  return (
    <div className="explore-menu" id="exploremenu">
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring an array of options</p>
      <div className="menu-list">
        {menu_list.map((menu, index) => (
          <div onClick={()=>{setCategory(prev=>prev===menu.menu_name?"All":menu.menu_name)}} className="menu-item" key={index}>
            <img  className= {category===menu.menu_name?"active":""}src={menu.menu_image} alt={menu.menu_name} />
            <h3>{menu.menu_name}</h3>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu