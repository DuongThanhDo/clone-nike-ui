import { SiNike } from 'react-icons/si';
import { CiHeart } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Search } from '../Search';
import NavBarItem from './NavBarItem';
import { useState } from 'react';
import { navBars } from '../../datas/dataView';
import { Badge } from 'antd';

var prevScrollpos = window.pageYOffset;

function HeaderNavBar() {
    const [scroll, setScroll] = useState(prevScrollpos);

    // window.onscroll = function () {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         document.querySelector('.header').style.transform = 'translateY(0)';
    //     } else {
    //         if (currentScrollPos > 36) {
    //             document.querySelector('.header').style.transform = 'translateY(-64px)';
    //         }
    //     }
    //     prevScrollpos = currentScrollPos;
    //     setScroll(currentScrollPos);
    // };

    return (
        <div
            className={`header ${scroll > 36 && 'fixed top-0'} bg-white z-50 w-full h-[64px] px-primary transition-all`}
        >
            <div className="relative w-full h-[64px] flex justify-center items-center">
                <Link className="absolute left-0" to={'/'}>
                    <SiNike className="text-[60px] cursor-pointer hover:text-gray-500 transition-all" />
                </Link>

                <div className="flex font-medium text-[17px]">
                    {navBars.map((navBar, index) => (
                        <NavBarItem key={index} navBar={navBar} />
                    ))}
                </div>

                <div className="absolute right-0 flex justify-between items-center gap-6">
                    <Search />
                    <Link to={'/favourite'}>
                        <CiHeart className=" text-[28px]" />
                    </Link>
                    <Link to={'/cart'}>
                        <Badge count={12} color="cyan">
                            <IoBagHandleOutline className=" text-[26px]" />
                        </Badge>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderNavBar;
