import { Link } from 'react-router-dom';

function Button({ children, to, href, bgWhite = false, className, py, onClick, ...passProps }) {
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
            className={`${
                py ? py : 'py-[6px]'
            } ${className} px-[20px] rounded-l-full rounded-r-full text-[16px] font-medium cursor-pointer transition-all ${
                bgWhite
                    ? 'text-[#111111] bg-white border  hover:border-[#707072]'
                    : 'text-white bg-[#111111] hover:bg-[#7e7e7e]'
            }`}
            {...props}
        >
            {children}
        </Comp>
    );
}

export default Button;
