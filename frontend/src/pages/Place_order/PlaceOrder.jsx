import React, { useState, useContext } from 'react';
import { StoreContext } from '../../Context/storeContext';
import "./PlaceOrder.css";
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });
    const Navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order placement logic here
    console.log('Order placed:', address);
  };

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
    <div className="place-order-container">
      <h2>Place Your Order</h2>
      <div className="place-order-content">
        <form onSubmit={handleSubmit} className="delivery-details">
          <h3>Delivery Details</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={address.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={address.street}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={address.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={address.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={address.zip}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
          <button  className="payment-button" onClick={handleSubmit }>Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;