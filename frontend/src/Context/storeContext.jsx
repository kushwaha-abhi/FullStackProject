import React, { createContext } from 'react';
import { food_list } from '../assets/frontend_assets/assets';
export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
    const storeValue = {
      food_list
    };

    return (
        <StoreContext.Provider value={storeValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;