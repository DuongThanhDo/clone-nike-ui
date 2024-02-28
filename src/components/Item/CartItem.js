import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { AiOutlineDelete } from 'react-icons/ai';

function CartItem({ product }) {
    const [inputQuantity, setInputQuantity] = useState(product.quantity);

    return (
        <div className="flex justify-between py-6 border-b">
            <div className="flex gap-4">
                <div className="w-[164px] h-[164px]">
                    <img className="w-full h-full object-cover" src={product.url} alt="" />
                </div>

                <div className="flex flex-col justify-between">
                    <div className="text-[#707072] text-[18px]">
                        <h2 className="font-medium text-[#111111]">{product.name}</h2>
                        <p>{product.type}</p>
                        <p>{product.tag}</p>
                        <div className="flex gap-4">
                            <p>
                                Size <span>{product.size}</span>
                            </p>
                            <div className="flex gap-2">
                                <p>Quantity</p>
                                <input
                                    className="w-[50px] border-none outline-none"
                                    type="number"
                                    value={inputQuantity}
                                    onChange={(e) => setInputQuantity(e.target.value)}
                                    min={1}
                                    max={10}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex text-[28px] gap-4">
                        <CiHeart className="cursor-pointer hover:text-[#707072] transition-all" />
                        <AiOutlineDelete className="cursor-pointer hover:text-[#707072] transition-all" />
                    </div>
                </div>
            </div>

            <p className="font-medium">
                11,286,000<small>₫</small>
            </p>
        </div>
    );
}

export default CartItem;
