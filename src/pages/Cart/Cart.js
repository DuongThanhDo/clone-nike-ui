import Button from '../../components/Button/Button';
import { CartItem, FavouriteCartItem } from '../../components/Item';
import SlideShopSport from '../../components/Slides/SlideShopSport';
import { Title } from '../../components/Title';
import { HiQuestionMarkCircle } from 'react-icons/hi2';
import { products } from '../../datas/dataProduct';

const cartsFavourite = products.slice(0, 2);

function Cart() {
    return (
        <div>
            <div className="flex justify-around">
                <div className="w-[1100px]">
                    <div className="flex w-full gap-8">
                        <div className="w-full lg:w-[66.66667%]">
                            <h2 className="text-[24px] font-semibold">Bag</h2>
                            <div>
                                {products.map((cart, index) => (
                                    <CartItem key={index} product={cart} />
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 text-[18px]">
                            <h2 className="text-[24px] font-semibold mb-6">Summary</h2>
                            <div className="flex justify-between">
                                <h3 className="flex items-center gap-1">
                                    Subtotal <HiQuestionMarkCircle />
                                </h3>
                                <p>
                                    11,286,000<small>₫</small>
                                </p>
                            </div>
                            <div className="flex justify-between my-2">
                                <h3 className="flex items-center gap-1">Estimated Delivery & Handling</h3>
                                <p>Free</p>
                            </div>
                            <div className="flex justify-between my-3 py-4 border-t border-b">
                                <h3 className="flex items-center gap-1">Total</h3>
                                <p>
                                    11,286,000<small>₫</small>
                                </p>
                            </div>
                            <Button py={'py-[18px]'} className={'w-full px-6 mt-5 text-[18px]'}>Member Checkout</Button>
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className="text-[24px] font-semibold mt-4">Favourites</h2>
                        <div className="grid grid-cols-2 gap-8">
                            {cartsFavourite.map((cart, index) => (
                                <FavouriteCartItem key={index} product={cart} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <Title>You Might Also Like</Title>
                <SlideShopSport />
            </div>
        </div>
    );
}

export default Cart;
