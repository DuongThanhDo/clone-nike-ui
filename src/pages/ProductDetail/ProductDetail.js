import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SlideShopSport from '../../components/Slides/SlideShopSport';
import { MdOutlineNavigateNext, MdOutlineStar } from 'react-icons/md';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { GrFormPrevious } from 'react-icons/gr';
import { findProductId, findUrlImg } from '../../functions/func_find';
import { products } from '../../datas/dataProduct';
import { Button } from '../../components/Button';
import Selector from '../../components/Select/Selector';
import { Title } from '../../components/Title';

const listImg = [
    { url: 'https://i.pinimg.com/564x/eb/3e/85/eb3e854c84d45e737fec59b34ca2d42d.jpg', index: 1 },
    { url: 'https://i.pinimg.com/564x/e5/78/57/e5785727e972ff54111d0a15fd93d694.jpg', index: 2 },
    { url: 'https://i.pinimg.com/564x/be/ea/1c/beea1cc36331159eef2b2f29f03633c1.jpg', index: 3 },
    { url: 'https://i.pinimg.com/564x/c3/22/32/c322326c567d06efeb5269538308ae72.jpg', index: 4 },
    { url: 'https://i.pinimg.com/564x/84/a1/2b/84a12b9c003fc0eba64332041fa5d138.jpg', index: 5 },
    { url: 'https://i.pinimg.com/564x/10/a4/8e/10a48e03ce3a5aad472257761aaa22c5.jpg', index: 6 },
    { url: 'https://i.pinimg.com/564x/eb/3e/85/eb3e854c84d45e737fec59b34ca2d42d.jpg', index: 7 },
    { url: 'https://i.pinimg.com/564x/be/ea/1c/beea1cc36331159eef2b2f29f03633c1.jpg', index: 8 },
    { url: 'https://i.pinimg.com/564x/66/ca/8c/66ca8cccf0f7c79f37ba2496eddd5f6c.jpg', index: 9 },
    { url: 'https://i.pinimg.com/564x/10/a4/8e/10a48e03ce3a5aad472257761aaa22c5.jpg', index: 10 },
];

function ProductDetail() {
    const productId = useParams().detail;

    const [infoProduct, setInfoProduct] = useState(1);
    const [imgActiveIndex, setImgAvtiveIndex] = useState(1);
    const [sizeActiveIndex, setSizeAvtiveIndex] = useState(1);
    const [imgActiveUrl, setImgAvtiveUrl] = useState(listImg[0].url);

    const handleClickImg = (img) => {
        setImgAvtiveIndex(img.index);
    };

    const handleClickButtonPrev = () => {
        if (imgActiveIndex === 1) {
            setImgAvtiveIndex(listImg.length);
        } else {
            setImgAvtiveIndex(imgActiveIndex - 1);
        }
    };

    const handleClickButtonNext = () => {
        if (imgActiveIndex === listImg.length) {
            setImgAvtiveIndex(1);
        } else {
            setImgAvtiveIndex(imgActiveIndex + 1);
        }
    };

    useEffect(() => {
        setInfoProduct(findProductId(products, productId));
    }, []);

    console.log(infoProduct);

    useEffect(() => {
        let url = findUrlImg(listImg, imgActiveIndex);
        setImgAvtiveUrl(url);
    }, [imgActiveIndex]);

    return (
        <div className="mt-[60px]">
            <div className="flex justify-around mb-[200px]">
                <div className="w-[1100px] flex justify-between relative">
                    <div className="flex-1 h-[124%] relative overflow-hidden pr-[40%]">
                        <div className="w-[60px] absolute h-[100%] hide-scrollbar overflow-y-scroll">
                            {listImg.map((img, index) => (
                                <div
                                    className="w-[60px] h-[60px] relative mb-4 rounded-md overflow-hidden cursor-pointer"
                                    onClick={() => handleClickImg(img)}
                                >
                                    {imgActiveIndex === img.index && (
                                        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-20 z-10"></div>
                                    )}
                                    <img key={index} src={img.url} alt="" className="w-full h-full" />
                                </div>
                            ))}
                        </div>

                        <div className="max-w-[535px] h-full relative rounded-[10px] overflow-hidden ml-[72px]">
                            <div className="flex items-center absolute top-5 left-5 py-2 px-4 rounded-l-full rounded-r-full bg-white">
                                <MdOutlineStar />
                                <p>Highly Rated</p>
                            </div>
                            <img className="w-full h-full object-cover" src={imgActiveUrl} alt="" />
                            <div className="flex items-center gap-4 absolute z-1 bottom-5 right-5">
                                <GrFormPrevious
                                    onClick={handleClickButtonPrev}
                                    className="h-[40px] w-[40px] p-1 rounded-full bg-white active:bg-gray-300 cursor-pointer"
                                />
                                <MdOutlineNavigateNext
                                    onClick={handleClickButtonNext}
                                    className="h-[40px] w-[40px] p-1 rounded-full bg-white active:bg-gray-300 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-[40%] h-[650px] top-0 right-0 absolute pl-[36px]  overflow-y-scroll hide-scrollbar mb-[100px]">
                        <h2 className="text-[24px] font-semibold">{infoProduct.name}</h2>
                        <p>{infoProduct.type}</p>
                        <p className="my-4 text-[18px] font-medium">
                            {infoProduct.price}
                            <small>₫</small>
                        </p>
                        <div>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">Select Size</span>
                                <span className="text-[#707072] font-semibold">Size Guide</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mt-2">
                                {new Array(12).fill(0).map((item, index) => (
                                    <div
                                        onClick={() => setSizeAvtiveIndex(index)}
                                        className={`${
                                            sizeActiveIndex === index && 'border-black'
                                        } w-full py-[12px] text-center border-2 rounded cursor-pointer hover:border-black`}
                                        key={index}
                                    >
                                        EU 40
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Button py={'py-[18px]'} className={'w-full my-4'}>
                            Add to Bag
                        </Button>

                        <Button py={'py-[18px]'} bgWhite className={'w-full flex justify-center items-center gap-4'}>
                            Favourite{' '}
                            {infoProduct.favourite ? (
                                <FaHeart className="text-[16px]" />
                            ) : (
                                <FaRegHeart className="text-[16px]" />
                            )}
                        </Button>

                        <p className="px-10 text-center justify-center font-semibold text-[#707072] mt-6 mb-12">
                            This product is excluded from site promotions and discounts.
                        </p>

                        <p className="font-medium">
                            Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's
                            footsteps. Fresh colour trims the clean, classic materials, imbuing modernity into a classic
                            design.
                        </p>

                        <ul className="my-6">
                            <li className="flex items-center mb-1">
                                <div className="w-[6px] h-[6px] bg-black rounded-full mx-2"></div> Colour Shown: Light
                                Smoke Grey/White/Black
                            </li>
                            <li className="flex items-center">
                                <div className="w-[6px] h-[6px] bg-black rounded-full mx-2"></div> Style: 554724-092
                            </li>
                        </ul>

                        <Selector title={'Free Delivery and Returns'}>
                            <p className="pt-2">
                                Your order of 5.000.000<small>₫</small> or more gets free standard delivery.
                            </p>

                            <ul className="my-6">
                                <li className="flex items-center mb-1">
                                    <div className="w-[6px] h-[6px] bg-black rounded-full mx-2"></div> Standard
                                    delivered 4-5 Business Days
                                </li>
                                <li className="flex items-center">
                                    <div className="w-[6px] h-[6px] bg-black rounded-full mx-2"></div> Express delivered
                                    2-4 Business Days
                                </li>
                            </ul>
                            <p className="mb-6">
                                Orders are processed and delivered Monday-Friday (excluding public holidays)
                            </p>
                        </Selector>

                        <Selector title={'More Info'}>
                            <p className="pt-2">
                                The ® may appear once or twice on the tongue and/or sockliner as a result of a change
                                implemented by Nike. The product you purchase may appear differently in this respect
                                than the one depicted on Nike.com or NikeApp.
                            </p>
                        </Selector>
                    </div>
                </div>
            </div>

            <div className="w-full text-center">
                <Title>Explore the Air Jordan I Mid</Title>
                <img
                    className="w-full"
                    src="https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/6c4d4028-71d9-49c1-a303-4003b55a62d9/image.jpg"
                    alt="..."
                />
            </div>

            <div className="w-full text-center mt-[40px] mb-[60px] flex flex-col items-center">
                <p className="font-semibold text-[24px] mb-4">Iconic Look, Everyday Comfort</p>
                <p className="max-w-[420px]">
                    The Air Jordan I Mid Shoe is inspired by the first AJI, offering OG fans a look at how far the
                    Jordan Brand has come since 1985.
                </p>
                <img
                    className="w-full"
                    src="https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/6a6f0afc-1bc0-4742-8772-02e4068de99e/image.jpg"
                    alt="..."
                />
            </div>

            <div>
                <Title>You Might Also Like</Title>
                <SlideShopSport />
            </div>
        </div>
    );
}

export default ProductDetail;
