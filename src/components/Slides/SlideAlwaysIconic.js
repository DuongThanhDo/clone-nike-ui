import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slideImages = [
    {
        url: 'https://i.pinimg.com/564x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg',
        caption: "Women's Air Max",
        btn: 'Get It First',
    },
    {
        url: 'https://i.pinimg.com/564x/4a/df/4d/4adf4d5e655f40eec531324470b2f2f0.jpg',
        caption: "Women's Air Max",
        btn: 'Shop',
    },
    {
        url: 'https://i.pinimg.com/564x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg',
        caption: "Women's Air Max",
        btn: 'Shop',
    },
    {
        url: 'https://i.pinimg.com/564x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg',
        caption: "Women's Air Max",
        btn: 'Get It First',
    },
    {
        url: 'https://i.pinimg.com/564x/4a/df/4d/4adf4d5e655f40eec531324470b2f2f0.jpg',
        caption: "Women's Air Max",
        btn: 'Shop',
    },
    {
        url: 'https://i.pinimg.com/564x/51/0f/37/510f37fb7fbcfc79014a780f96699f2e.jpg',
        caption: "Women's Air Max",
        btn: 'Shop',
    },
];

const styleArrow = {
    display: 'block',
    borderRadius: '100%',
    scale: '3',
    position: 'absolute',
    zIndex: '10',
    top: '58%',
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, ...styleArrow, right: '40px' }} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style, ...styleArrow, left: '40px' }} onClick={onClick} />;
}

function SlideAlwaysIconic() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
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
                    <div className="w-[260px] h-[260px] px-2" key={index}>
                        <img className="w-full h-full object-cover" src={img.url} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SlideAlwaysIconic;
