    import React from 'react';
    import { useParams } from 'react-router-dom';
    import fakeData from '../../fakeData';
    import Product from '../Product/Product';

    const ProductDetail = () => {
        const {key} = useParams();
        const product = fakeData.find(singleproduct => singleproduct.key === key);
        console.log(product);
        return (
            <div>
                <Product 
                showCartButton = {false}
                product={product}></Product>
            </div>
        );
    };

    export default ProductDetail;