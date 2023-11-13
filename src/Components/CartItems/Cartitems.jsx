import React, { useContext } from "react";
import "./Cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
const Cartitems = () => {
	const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
	return (
		<div className='cartItems'>
			<div className='cartItems-format-main'>
				<p>Products</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr />
			{all_product.map((e) => {
				if (cartItems[e.id] > 0) {
					return (
						<div>
							<div className='cartItem-format cartItems-format-main'>
								<img src={e.image} alt='' className='cartIcon-product-icon' />
								<p>{e.name}</p>
								<p>${e.new_price}</p>
								<button className='cartItemQuantity'>{cartItems[e.id]}</button>
								<p>${e.new_price * cartItems[e.id]}</p>
								<img
									className='removeIcon'
									src={remove_icon}
									onClick={() => {
										removeFromCart(e.id);
									}}
									alt=''
								/>
							</div>
						</div>
					);
				}
				return null;
			})}
			<div className='cartitemDown'>
				<div className='cartItems-total'>
					<h1>Cart Totals</h1>
					<div>
						<div className='cartItems-total-items'>
							<p>SubTotal</p>
							<p>${0}</p>
						</div>
						<hr />
						<div className='cartItems-total-items'>
							<p>shipping fee</p>
							<p>Free</p>
						</div>
						<hr />
					</div>
					<div className='cartItems-total-items'>
						<h3>Total</h3>
						<h3>${0}</h3>
					</div>
					<button>Proceed to checkout</button>
				</div>
				<div className='cart-items-promo-code'>
					<p>If you have a promocode enter here..</p>
					<div className='cartItem-promo-box'>
						<input type='text' placeholder='promocode' />
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cartitems;
