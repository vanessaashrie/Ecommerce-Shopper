import React, { createContext, useState }  from "react"; 
import all_product from "../Components/Assets/all_product";

export const  ShopContext= createContext(null);
const getDefaultCart=()=>{
      let cart={};
      for( let index=0; index < all_product.length+1; index++){
         cart[index]=0;
      }
      return cart;
   }

const ShopContextProvider = (props) => {
    //36 product,old-new price
   const [cartItems,setCartItems]= useState(getDefaultCart());
   // const  contextValue ={all_product, cartItems};

   const addToCart= (itemId) =>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
      console.log(cartItems);
   }

   const removeFromCart= (itemId) =>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }

   const contextValue ={all_product,cartItems,addToCart,removeFromCart};
   return (
       <ShopContext.Provider value={contextValue}> 
          {props.children} 
       </ShopContext.Provider> //part the value=contextvalue
   ) 
}

export default ShopContextProvider;