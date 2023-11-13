import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
	const { product } = props;
	const { addToCart } = useContext(ShopContext);
	return (
		<div className='productDisplay'>
			<div className='display-left'>
				<div className='displayImage'>
					<img src={product.image} alt='' />
					<img src={product.image} alt='' />
					<img src={product.image} alt='' />
					<img src={product.image} alt='' />
				</div>
				<div className='productDisplayImage'>
					<img className='productDisplayMain' src={product.image} alt='' />
				</div>
			</div>
			<div className='displayRight'>
				<h1>{product.name}</h1>
				<div className='product-display-right-star'>
					<img src={star_icon} alt='' />
					<img src={star_icon} alt='' />
					<img src={star_icon} alt='' />
					<img src={star_icon} alt='' />
					<img src={star_dull_icon} alt='' />
					<p>(122)</p>
				</div>
				<div className='display-right-prices'>
					<div className='oldprice'>${product.old_price}</div>
					<div className='newprice'>${product.new_price}</div>
				</div>
				<div className='display-right-description'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
					blanditiis architecto, ex consequuntur maxime eveniet asperiores
					laudantium. Aperiam ad accusamus saepe natus eius, asperiores libero
					tempora laudantium ratione? Atque, accusantium!
				</div>
				<div className='display-right-size'>
					<h1>Select Size </h1>
					<div className='display-right-sizes'>
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
						<div>XXL</div>
					</div>
					<button
						onClick={() => {
							addToCart(product.id);
						}}
					>
						ADD TO CART
					</button>
				</div>
				<p className='product-display-right-category'>
					<span>Category:</span>Women,T-shirt,Crop Top
				</p>
				<p className='product-display-right-category'>
					<span>Tags:</span>Modern, latest
				</p>
			</div>
		</div>
	);
};

export default ProductDisplay;
