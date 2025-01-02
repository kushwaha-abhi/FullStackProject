
import { assets } from "../../assets/frontend_assets/assets";
import "./FoodItems.css";
import React from 'react'

const FoodItem = ({id , name, price, description, image}) => {
  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img  className ="food-item-image"src={image} alt="" />
        </div>
        <div className="food-item-info">
            <p> {name} </p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-items-description"> {description} </p>
         <p className="food-item-price"> ${price}</p>
    </div>
  )
}

export default FoodItem