import "./MyOrders.css";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../../Context/storeContext";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";
const MyOrders = () => {
  const { token } = useContext(StoreContext);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "http://localhost:4000/api/orders/myorders",
      { headers: { token } }
    );
    console.log(response);
    if (response.data.success === true) {
      setData(response.data.data);
      console.log("Hello to you");
      console.log(response.data.data);
    }
  };

  console.log(data);

  useEffect(
    function () {
      if (token) {
        fetchData();
      }
    },
    [token]
  );

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((orders, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {orders.items.map((item, index) => {
                  if (index === orders.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + " , ";
                  }
                })}
              </p>
              <p>${orders.amount}.00</p>
              <p>Items: {orders.items.length}</p>
              <p><span>&#x25cf;</span> <b>{orders.status}</b> </p>
             <button>Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
