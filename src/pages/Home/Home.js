import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import videoSource from '../../assets/video/pexels_videos_2601.mp4';
import { Title } from '../../components/Title';
import { SlideAlwaysIconic, SlideMemberBenefits, SlideShopSport } from '../../components/Slides';
import { ArtBtnHome } from '../../components/ArtMuseum';

const imgFeatured = [
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

const directoryProduct = [
    {
        title: 'Icons',
        products: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'],
    },
    {
        title: 'Shoes',
        products: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes'],
    },
    {
        title: 'Clothing',
        products: ['All Clothing', 'Modest Wear', 'Hoodies & Pullovers', 'Shirts & Tops'],
    },
    {
        title: "Kids'",
        products: ['Infant & Toddler Shoes', "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"],
    },
];

function Home() {
    return (
        <div>
            <div className="py-4 text-center">
                <div className="text-[18px]">Sale Up to 40%</div>
                <Link className="text-[12px] font-bold underline">Shop All Our New Markdowns</Link>
            </div>
            <img
                className="w-full"
                src="https://media-api.advertisingvietnam.com/oapi/v1/media?uuid=public%2Fwp-content%2Fuploads%2F2018%2F09%2Fnike-image.jpg&resolution=1440x756&type=image"
                alt="..."
            />
            <div className="font-medium py-primary text-center">
                <p>Air Max 90 LV8</p>
                <p className="text-[70px] font-extrabold leading-[66px]">
                    DOUBLE STACKED. <br /> DOUBLE FUN.
                </p>
                <p className="py-[32px] text-[18px]">
                    Play all day, dance all night in elevated, eye-catching comfort.
                    <br /> Introducing the all new Air Max 90 LV8, styted by Newjeans.
                </p>

                <div>
                    <Button className={'mr-4'}>Shop Newjeans' Picks</Button>
                    <Button>Shop Air Max 90 LV8</Button>
                </div>
            </div>

            <Link className="">
                <Title>Featured</Title>
                <div className="flex gap-3">
                    {imgFeatured.map((img, index) => (
                        <div key={index} className="flex-1 overflow-hidden">
                            <img className="w-full h-[80%] object-cover object-center" src={img.url} alt="" />
                            <p className="text-[20px] mt-[40px]">{img.caption}</p>
                        </div>
                    ))}
                </div>
            </Link>

            <Link>
                <Title>Trending</Title>
                <div className="flex gap-3 h-[620px]">
                    {imgFeatured.map((img, index) => (
                        <ArtBtnHome key={index} art={img} />
                    ))}
                </div>
            </Link>

            <div className="font-medium py-primary text-center">
                <p>Nike Bras</p>
                <p className="text-[70px] font-extrabold leading-[66px]">
                    ENGINEERED TO <br />
                    FEEL MORE YOU
                </p>
                <p className="py-[32px] text-[18px]">
                    From locked-in support toseamless freedom,
                    <br /> find your next go-to bra with Swoosh, Alateand Indy.
                </p>

                <div>
                    <Button>Shop Bras</Button>
                </div>
            </div>

            <div>
                <Title>Always Iconic</Title>
                <SlideAlwaysIconic />
            </div>

            <div className="mt-[80px]">
                <Title>Don't Miss</Title>
                <video controls autoPlay loop width="100%">
                    <source src={videoSource} type="video/mp4" />
                </video>
            </div>

            <div className="font-medium py-primary text-center">
                <p>Nike Dynamo 2 EasyOn</p>
                <p className="text-[70px] font-extrabold leading-[66px]">
                    NIKE EASYON <br /> AND GO
                </p>
                <p className="py-[32px] text-[18px]">Nike EasyOn—Designed to put on and get going.</p>

                <div>
                    <Button>Shop</Button>
                </div>
            </div>

            <div className="mb-primary">
                <Title>Shop by Sport</Title>
                <SlideShopSport />
            </div>

            <div className="mt-[80px] mb-primary">
                <Title>Member Benefits</Title>
                <SlideMemberBenefits />
            </div>

            <div className="w-full flex justify-center gap-[100px] text-[18px] mb-[80px]">
                {directoryProduct.map((item) => (
                    <div>
                        <h3 className="font-medium mb-4">{item.title}</h3>
                        {item.products.map((product, index) => (
                            <p
                                className="text-[#707072] mt-2 cursor-pointer transition-all hover:text-black"
                                key={index}
                            >
                                {product}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
