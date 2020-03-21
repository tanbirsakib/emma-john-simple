import React from 'react';
import './Product'
const Product = (props) => {
    console.log(props.product.name);
    return (
        <div>
            {props.product.name}
        </div>
    );
};

export default Product;