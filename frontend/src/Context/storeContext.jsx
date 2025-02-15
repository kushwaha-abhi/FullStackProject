import React, { createContext, useEffect, useState } from "react";
import { use } from "react";
// import { food_list } from '../assets/frontend_assets/assets';
import axios from "axios";
export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({});

  const [food_list, setFood_list] = useState([]);

  const fechList = async () => {
    const response = await axios.get(url + "/api/foods/list");
    if (response.data.success) {
      setFood_list(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };
  const loadCartData = async (token) => {
    const response = await axios.get(
      url + "/api/cart/get",
      { headers: { token } }
    );
    console.log(response.data.cartData);
    setCartItems(response.data.cartData);
  };
  useEffect(() => {
    async function fetchData() {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }

      // await loadCartData(localStorage.getItem("token"));

      await fechList();
    }
    fetchData();
    // console.log(food_list);
  }, []);

  
    

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems({ ...cartItems, [itemId]: 1 });
    } else {
      setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
    }

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    if (cartItems[itemId] === 1) {
      const newCartItems = { ...cartItems };
      delete newCartItems[itemId];
      setCartItems(newCartItems);
    } else {
      setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
    }

    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const storeValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    food_list,
    url,
    token,
    setToken,
    
  };

  return (
    <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
