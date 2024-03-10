import { Link } from 'react-router-dom';

function NavBarItem({ navBar }) {
    return (
        <div className="header-navbar-item">
            <Link
                to={'/product'}
                className="h-[62px] flex bg-white items-center justify-center px-3 transition-all border-b-2 border-transparent z-10 hover:border-black"
            >
                {navBar.title}
            </Link>
            <div className="w-[100vw] min-h-[200px] justify-center bg-white mx-auto absolute top-[63px] left-[-48px] header-navbar-item-details shadow-2xl">
                <div className="w-[60%] header-navbar-item-detail grid grid-cols-4 justify-center pt-8 pb-16 gap-10 text-[14px]">
                    {navBar.types.map((type, index) => (
                        <div key={index}>
                            <Link to={'/product'} className="text-[16px] pb-2">
                                {type.name}
                            </Link>
                            <ul className="min-w-[200px]">
                                {type.list.map((item, index2) => (
                                    <li className="text-[#707072] my-2">
                                        <Link to={'/product'} key={index2}>
                                            {item}
                                        </Link>
                                        <br />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NavBarItem;
