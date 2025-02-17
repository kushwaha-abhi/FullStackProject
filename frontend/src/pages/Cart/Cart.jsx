import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../Context/storeContext';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems, removeFromCart, food_list, url } = useContext(StoreContext);
   const Navigate=useNavigate();
  const getItemDetails = (itemId) => {
    return food_list.find(item => item._id === itemId);
  };

  const calculateSubtotal = () => {
    return Object.keys(cartItems).reduce((acc, itemId) => {
      const item = getItemDetails(itemId);
      return acc + (item.price * cartItems[itemId]);
    }, 0);
  };

  const deliveryFee = 5.00; // Fixed delivery fee
  const subtotal = calculateSubtotal();
  const total = subtotal + deliveryFee;

  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="cart-header">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <hr />
          {food_list.map(item => {
            if(cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={`${url}/uploads/${item.image}`} alt={item.title} />
                  </div>
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                  <button className='remove' onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
      <div className="cart-bottom">
        <div className="cart-summary">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
       <button  className="checkout-button" onClick={()=>{Navigate("/order")}}>Proceed to Checkout</button> 
      </div>
    </div>
  );
};

export default Cart;