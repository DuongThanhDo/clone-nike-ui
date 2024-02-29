import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const productId = useParams().detail;
    console.log(productId);
    return <div>page product {productId}</div>;
}

export default ProductDetail;
