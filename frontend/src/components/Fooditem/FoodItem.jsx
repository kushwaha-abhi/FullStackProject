import React, { useContext } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import './FoodItems.css';
import { StoreContext } from '../../Context/storeContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const{cartItems, addToCart, removeFromCart}=useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {
          !cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="add_icon" />
          :  <div className="food-item-counter">
              <img className='minus' onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="minus_icon" />
              <span>{cartItems[id]}</span>
              <img className='plus' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="plus_icon" />
            </div>
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