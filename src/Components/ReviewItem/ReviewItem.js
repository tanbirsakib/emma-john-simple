import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity} = props.product;
    const reviewItemStyle = {
        borderBottom : '1px solid lightgray',
        marginBottom : '5px',
        paddingBottom : '5px',
        marginLeft : '200px'
    }
    return (

        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">Name:{name}</h4>
            <p>Quantity : {quantity}</p>
            <button className="add-to-cart">Remove Item</button>
        </div>
    );
};

export default ReviewItem;