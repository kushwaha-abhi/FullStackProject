import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../Context/storeContext';
import "./PlaceOrder.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const PlaceOrder = () => {
  const { cartItems, food_list,token, url } = useContext(StoreContext);
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

  // const total= calculateSubtotal()+5;
  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });

   useEffect( ()=>{
     console.log(address);
   },[address])
    const Navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let orderItems= [];
    food_list.map((item,index)=>{
      if(cartItems[item._id]>0){
        let itemInfo= item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    
     let orderData= {

      address:address,
      items:orderItems,
      amount:total,

     }

     let response= await axios.post(url+"/api/orders/order", orderData, {headers:{token}});
     
     if(response.data.success===true){
        const {session_url}= response.data;
        console.log(session_url);
        window.location.replace(session_url);
     }
     else{
      alert("error");
     }
  };

  

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
          <button type='submit' className="payment-button" onClick={handleSubmit }>Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;