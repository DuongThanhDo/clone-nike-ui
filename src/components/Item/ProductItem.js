import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
    return (
        <Link to={`/product/${product.id}`} className="text-[18px] font-medium mb-4">
            <img className="w-[100%] object-cover mb-2 border" src={product.url} alt="" />
            {product.bestseller && <p className="text-[#a85344] my-1">Bestseller</p>}
            <div className="leading-6">
                <p>{product.name}</p>
                <p className="text-[#979797]">{product.type}</p>
                <p className="text-[#979797]">{product.colour.length} colour</p>
            </div>
            <p className="my-1">
                {product.price}
                <small className="text-[#707072]">₫</small>
                {product.sale ? (
                    <span className="text-[#707072] line-through ml-2">
                        {product.price * (product.sale / 100)}
                        <small>₫</small>
                    </span>
                ) : (
                    ''
                )}
            </p>
            {product.sale ? <p className="text-green-600">{product.sale}% off</p> : ''}
        </Link>
    );
}

export default ProductItem;
