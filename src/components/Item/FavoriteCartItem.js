import React from 'react';
import { Button } from '../Button';

function FavoriteCartItem({ product }) {
    return (
        <div>
            <div className="flex justify-between py-6 border-b">
                <div className="flex gap-4">
                    <div className="w-[164px] h-[164px]">
                        <img className="w-full h-full object-cover" src={product.url} alt="" />
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="text-[#707072] text-[18px]">
                            <h2 className="font-medium text-[#111111]">{product.name}</h2>
                            <p>{product.type}</p>
                            <div className="flex gap-4">
                                <p>
                                    Size <span>{product.size}</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex text-[28px] gap-4">
                            <Button bgWhite>Add to Bag</Button>
                        </div>
                    </div>
                </div>

                <p className="font-medium">
                    11,286,000<small>₫</small>
                </p>
            </div>
        </div>
    );
}

export default FavoriteCartItem;
