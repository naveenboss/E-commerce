import React from "react";
import "./Breadcrum.css";
import bread_crum from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
	const { product } = props;
	return (
		<div className='breadcrum'>
			HOME
			<img src={bread_crum} alt='' />
			SHOP <img src={bread_crum} alt='' />
			{product.category}
			<img src={bread_crum} alt='' />
			{product.name}
		</div>
	);
};

export default Breadcrum;
