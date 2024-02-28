import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function Selector({ title, children, className }) {
    const [openModal, setOpenModal] = useState(true);

    const handleOpen = () => {
        setOpenModal(!openModal);
    };

    return (
        <div>
            <div
                onClick={handleOpen}
                className={`flex items-center justify-between w-full max-w-[500px] cursor-pointer text-[18px] font-medium py-3 border-t`}
            >
                <h2>{title}</h2>
                <FaChevronDown className={`${openModal ? 'rotate-180' : ''} text-[16px] transition-all duration-300`} />
            </div>

            <div className={`${className} ${openModal ? 'pb-3' : 'h-0 overflow-hidden'} transition-all`}>
                {children}
            </div>
        </div>
    );
}

export default Selector;
