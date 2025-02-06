import React, { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/frontend_assets/assets';
export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {

  const url= "http://localhost:4000";
  const [token, setToken]= useState("");
const[cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
     if(!cartItems[itemId]){
       setCartItems({...cartItems, [itemId]: 1});
     }
     else{
         setCartItems({...cartItems, [itemId]: cartItems[itemId] + 1});
     }
  };

  const removeFromCart = (itemId) => {
    if(cartItems[itemId] === 1){
      const newCartItems = {...cartItems};
      delete newCartItems[itemId];
      setCartItems(newCartItems);
    }
    else{
      setCartItems({...cartItems, [itemId]: cartItems[itemId] - 1});
    }
  };


  useEffect(()=>{
     console.log(cartItems);
  },[cartItems])

    const storeValue = {
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      food_list,
      url,
      token,
      setToken
    };

    return (
        <StoreContext.Provider value={storeValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;