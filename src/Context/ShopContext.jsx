import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
const emptyCart = () => {
	let cart = [];
	for (let i = 0; i < all_product.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};
export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(emptyCart());
	const addToCart = (productId) => {
		setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
		console.log(cartItems);
	};
	const removeFromCart = (productId) => {
		setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
	};

	const contextValue = { all_product, addToCart, removeFromCart, cartItems };
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
export default ShopContextProvider;
