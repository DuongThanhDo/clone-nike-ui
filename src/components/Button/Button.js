import { Link } from 'react-router-dom';

function Button({ children, to, href, bgWhite = false, className, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        Comp = Link;
    } else if (href) {
        Comp = 'a';
    }

    return (
        <Comp
            className={`${className} py-[6px] px-[20px] rounded-l-full rounded-r-full text-[16px] font-medium cursor-pointer transition-all ${
                bgWhite ? 'text-[#111111] bg-white border  hover:bg-[#7e7e7e]' : 'text-white bg-[#111111] hover:bg-[#7e7e7e]'
            }`}
            {...props}
        >
            {children}
        </Comp>
    );
}

export default Button;
