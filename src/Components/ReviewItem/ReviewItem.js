import React from 'react';
import './reviewItem.css';

const ReviewItem = (props) => {
    const {name, quantity,img,key,price} = props.product;
    console.log(props.removeProduct);
    const reviewItemStyle = {
        borderBottom : '1px solid lightgray',
        marginBottom : '5px',
        paddingBottom : '5px',
        marginLeft : '200px',
        display:'flex'
    }
    return (

        <div style={reviewItemStyle} className="review-item">
            <div>
            <img src={img} alt=""/>
            </div>
            <div className='order-item'>
            <h4 className="product-name">Name:{name}</h4>
            <p>Quantity : {quantity}</p>
            <p><small>{price}</small></p>
            <button 
                className="remove-item-button"
                onClick = {()=>props.removeProduct(key)}
            >Remove Item
            </button>
            </div>
        </div>
    );
};

export default ReviewItem;