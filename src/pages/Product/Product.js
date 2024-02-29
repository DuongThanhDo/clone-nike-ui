import { Checkbox, ConfigProvider, Select } from 'antd';
import { PiSlidersHorizontal } from 'react-icons/pi';
import { Selector } from '../../components/Select';
import Colour from '../../components/Colour/Colour';
import { filters } from '../../datas/dataView';
import { ProductItem } from '../../components/Item';
import { products } from '../../datas/dataProduct';
import { useState } from 'react';

function Product() {
    const [showFilter, setShowFilter] = useState(true);

    const handleShowFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <div className="mt-4">
            <div className="flex justify-between items-center pb-[15px]">
                <h2 className="text-[24px] font-semibold">Men's Jordan</h2>
                <div className="flex gap-6">
                    <div onClick={handleShowFilter} className="flex items-center gap-1 cursor-pointer">
                        <p className="text-[18px]">
                            <span>{showFilter ? 'Hide' : 'Show'}</span> Filters
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
            <div className="flex justify-between gap-12 transition-all">
                {showFilter && (
                    <div className="w-[200px] pr-[20px] h-[76vh] overflow-hidden overflow-y-scroll">
                        <ConfigProvider
                            theme={{ components: { Checkbox: { colorPrimary: '#11111', algorithm: true } } }}
                        >
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
                )}
                <div className="flex-1 grid grid-cols-3 gap-4 h-[76vh] overflow-hidden overflow-y-scroll hide-scrollbar">
                    {products.map((product, index) => (
                        <ProductItem product={product} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
