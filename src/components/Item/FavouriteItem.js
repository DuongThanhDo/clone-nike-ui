import React from 'react';
import { Button } from '../Button';

function FavouriteItem({ product }) {
    return (
        <div>
            <img src={product.url} alt="" />
            <p className="text-[16px] font-medium mt-2">{product.name}</p>
            <div className="flex items-center justify-between">
                <p className="font-medium text-[#707072]">{product.type}</p>
                <p className="font-semibold text-[16px]">
                    {product.price}
                    <small>₫</small>
                </p>
            </div>
            <Button bgWhite className={'mt-4 mb-6'}>
                Add to Bag
            </Button>
        </div>
    );
}

export default FavouriteItem;
