import { Checkbox, ConfigProvider, Select } from 'antd';
import { PiSlidersHorizontal } from 'react-icons/pi';
import { Selector } from '../../components/Select';
import Colour from '../../components/Colour/Colour';

const filters = [
    { name: 'Gender', checkboxs: ['Men', 'Women', 'Unisex'] },
    {
        name: 'Shop By Price',
        checkboxs: ['Under 1.000.000₫', '1.000.000₫ - 2.000.000₫', '2.000.000₫ - 4.999.999₫', 'Over 4.999.999₫'],
    },
    { name: 'Sale & Offers', checkboxs: ['Sale'] },
    {
        name: 'Colour',
        colours: [
            { nameCol: 'Black', codingCol: '#000000' },
            { nameCol: 'Red', codingCol: '#ff0000' },
            { nameCol: 'Orange', codingCol: '#ffa500' },
            { nameCol: 'Blue', codingCol: '#0000ff' },
            { nameCol: 'White', codingCol: '#fffff' },
            { nameCol: 'Green', codingCol: '#008000' },
            { nameCol: 'Yellow', codingCol: '#ffff00' },
            { nameCol: 'Gray', codingCol: '#808080' },
            { nameCol: 'Pink', codingCol: '#ffc0cb' },
        ],
    },
    { name: 'Brand', checkboxs: ['Nike Sportswear', 'Jordan', 'NikeLab', 'ACG'] },
    { name: 'Sports', checkboxs: ['Lifestyle', 'Running', 'Training & Gym', 'Basketball'] },
    { name: 'Best For', checkboxs: ['Winter Wear', 'Warm Weather', 'Wet Weather'] },
    { name: 'More Sizes', checkboxs: ['Plus Size'] },
    { name: 'Athletes', checkboxs: ['LeBron James', 'Kevin Drant', 'Ja Morant', 'Serena Williama'] },
];

function Product() {
    return (
        <div>
            <div className="flex justify-between items-center pb-[15px]">
                <h2 className="text-[24px] font-semibold">Men's Jordan</h2>
                <div className="flex gap-6">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <p className="text-[18px]">
                            <span>Hide</span> Filters
                        </p>
                        <PiSlidersHorizontal className="text-[24px]" />
                    </div>

                    <div className="flex items-center gap-1">
                        <p>Sort By</p>
                        <Select
                            className="w-[140px]"
                            defaultValue={'Default'}
                            options={[
                                { value: 'featured', label: 'Featured' },
                                { value: 'newest', label: 'Newest' },
                                { value: 'price:high-low', label: 'Price: High-Low' },
                                { value: 'price:low-high', label: 'Price: Low-High' },
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="w-[200px] pr-[20px] h-[540px] overflow-hidden overflow-y-scroll">
                    <ConfigProvider theme={{ components: { Checkbox: { colorPrimary: '#11111', algorithm: true } } }}>
                        {filters.map((filter, index) => (
                            <Selector
                                key={index}
                                title={filter.name}
                                className={`${filter.colours && 'grid grid-cols-3 gap-4'}`}
                            >
                                {filter.checkboxs &&
                                    filter.checkboxs.map((checkbox, index2) => (
                                        <>
                                            <Checkbox
                                                className="text-[16px] font-normal text-[#111111] transition-all hover:text-[#707072]"
                                                key={index2}
                                            >
                                                {checkbox}
                                            </Checkbox>
                                            <br />
                                        </>
                                    ))}
                                {filter.colours &&
                                    filter.colours.map((colour, index3) => <Colour key={index3} color={colour} />)}
                            </Selector>
                        ))}
                    </ConfigProvider>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Product;
