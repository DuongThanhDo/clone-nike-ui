import React from 'react';
import { SlideShopSport } from '../../components/Slides';
import Title from '../../components/Title/Title';
import FavouriteItem from '../../components/Item/FavouriteItem';
import { products } from '../../datas/dataProduct';

const listFavourites = products.slice(0, 4);

function Favourite() {
    return (
        <div>
            <div>
                <Title>Favourite</Title>
                <div className="grid grid-cols-3 gap-8">
                    {listFavourites.map((item, index) => (
                        <FavouriteItem key={index} product={item} />
                    ))}
                </div>
            </div>
            <div className="mb-8">
                <Title>Find Your Next Favourite</Title>
                <SlideShopSport />
            </div>
        </div>
    );
}

export default Favourite;
