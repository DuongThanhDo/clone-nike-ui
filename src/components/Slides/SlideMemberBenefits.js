import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArtBtnHome from '../ArtMuseum/ArtBtnHome';

const slideImages = [
    {
        url: 'https://i.pinimg.com/564x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg',
        caption: 'Nike Basketball',
        btn: 'Shop',
        describe: 'Styles made for your game.',
    },
    {
        url: 'https://i.pinimg.com/564x/4a/df/4d/4adf4d5e655f40eec531324470b2f2f0.jpg',
        caption: 'Nike Golf',
        btn: 'Shop',
        describe: 'Conquer any course in style',
    },
    {
        url: 'https://i.pinimg.com/564x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg',
        caption: 'Nike Trail',
        btn: 'Shop',
        describe: 'Gear that leads to wild places.',
    },
    {
        url: 'https://i.pinimg.com/564x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg',
        caption: "Women's Air Max",
        btn: 'Shop',
        describe: 'Gear that leads to wild places.',
    },
    {
        url: 'https://i.pinimg.com/564x/4a/df/4d/4adf4d5e655f40eec531324470b2f2f0.jpg',
        caption: "Women's Air Max",
        btn: 'Shop',
        describe: 'Gear that leads to wild places.',
    },
    {
        url: 'https://i.pinimg.com/564x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg',
        caption: "Women's Air Max",
        btn: 'Shop',
        describe: 'Gear that leads to wild places.',
    },
];

const styleArrow = {
    display: 'flex',
    borderRadius: '100%',
    scale: '3',
    position: 'absolute',
    zIndex: '10',
    top: '48%',
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, ...styleArrow, right: '60px' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, ...styleArrow, left: '60px' }} onClick={onClick} />;
}

function SlideMemberBenefits() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="slider-container relative">
            <Slider {...settings}>
                {slideImages.map((img, index) => (
                    <div key={index} className="h-[620px] px-2">
                        <ArtBtnHome art={img} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SlideMemberBenefits;
