import React from 'react';
import './Product';
import './product.css';
const Product = (props) => {
    const{name, img, seller, price, stock} = props.product;
    console.log(props.product);
    return (
        <div className='product'>
        <div>
        <img src={img} alt=""/>
        </div>
        <div className='product-info'>
        <h4 className='product-name'>{name}</h4>
        <br/>
        <p><small>Powered by: {seller}</small></p>
        <p><small>${price}</small></p>
        <p>Only available : {stock} Do hurry to get one.</p>
        </div>
            
        </div>
    );
};

export default Product;