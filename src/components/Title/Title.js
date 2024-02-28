import React from 'react';

function Title({ children, className }) {
    return <h2 className={`${ className } text-[24px] mb-12 font-semibold mt-primary`}>{children}</h2>;
}

export default Title;
