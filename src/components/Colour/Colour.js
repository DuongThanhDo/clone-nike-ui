import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';

function Colour({ color }) {
    const [checked, setChecked] = useState(false);

    return (
        <div
            onClick={() => setChecked(!checked)}
            className="cursor-pointer flex flex-col items-center transition-all hover:text-[#707072]"
        >
            <div
                className={`bg-[${color.codingCol}] w-[28px] h-[28px] rounded-full border flex items-center justify-center`}
            >
                {checked && <FaCheck className={`${color.nameCol === 'White' ? 'text-black' : 'text-white'}`} />}
            </div>
            <p className="text-[13px] font-medium">{color.nameCol}</p>
            <span className="bg-[#000000]"></span>
            <span className="bg-[#ff0000]"></span>
            <span className="bg-[#ffa500]"></span>
            <span className="bg-[#0000ff]"></span>
            <span className="bg-[#ffffff]"></span>
            <span className="bg-[#008000]"></span>
            <span className="bg-[#ffff00]"></span>
            <span className="bg-[#808080]"></span>
            <span className="bg-[#ffc0cb]"></span>
        </div>
    );
}

export default Colour;
