import React from "react";

export const ShopContext = createContext(null);
export const ShopContextProvider = () =>{
    return <ShopContext.Provider>ShopContext</ShopContext.Provider>;
};
