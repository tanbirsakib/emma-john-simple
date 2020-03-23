import React from 'react';
import './Product';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const{name, img, seller, price, stock} = props.product;
    console.log(props);
    return (
        <div className='product'>
        <div>
        <img src={img} alt=""/>
        </div>
        <div className='product-info'>
        <h4 className='product-name'>{name}</h4>
        <br/>
        <p><small>Powered by: {seller}</small></p>
        <p><small className='price'>${price}</small></p>
        <p>Only available : {stock} Do hurry to get one.</p>
        <button className='add-to-cart' 
        onClick = {()=>props.handleAddProduct(props.product)}>
        <FontAwesomeIcon icon={faShoppingCart} />  add to curt
        </button>
        </div>
            
        </div>
    );
};

export default Product;