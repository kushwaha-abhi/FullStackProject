import React, { useContext, useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import './FoodItems.css';
import { StoreContext } from '../../Context/storeContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const [foodCount, setFoodCount] = useState(0);
  const{cartItems, addToCart, removeFromCart}=useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {
          foodCount === 0
          ? <img className='add' onClick={() => setFoodCount(foodCount + 1)} src={assets.add_icon_white} alt="add_icon" />
          : null // Provide an else part here
        }
      </div>
      <div className="food-item-info">
        <div className="food-items-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
      </div>
      <p className="food-items-description">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  );
};

export default FoodItem;