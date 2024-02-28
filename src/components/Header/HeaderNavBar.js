import { SiNike } from 'react-icons/si';
import { CiHeart } from 'react-icons/ci';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Search } from '../Search';
import NavBarItem from './NavBarItem';
import { useState } from 'react';

const navBar = ['New & Featured', 'Men', 'Women', 'Kids', 'Sale', 'Customise'];

var prevScrollpos = window.pageYOffset;

function HeaderNavBar() {
    const [scroll, setScroll] = useState(prevScrollpos);

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('.header').style.transform = 'translateY(0)';
        } else {
            if (currentScrollPos > 36) document.querySelector('.header').style.transform = 'translateY(-100px)';
        }
        prevScrollpos = currentScrollPos;
        setScroll(currentScrollPos);
    };

    return (
        <div
            className={`header ${
                scroll > 36 && 'fixed top-0'
            } bg-white z-50 w-full h-[64px] px-primary flex justify-between items-center transition-all`}
        >
            <Link to={'/'}>
                <SiNike className="text-[60px] cursor-pointer hover:text-gray-500 transition-all" />
            </Link>

            <div className="flex font-medium text-[17px]">
                {navBar.map((item, index) => (
                    <NavBarItem key={index} title={item} />
                ))}
            </div>

            <div className="flex justify-between items-center gap-6">
                <Search />
                <Link>
                    <CiHeart className=" text-[28px]" />
                </Link>
                <Link to={'/cart'}>
                    <IoBagHandleOutline className=" text-[26px]" />
                </Link>
            </div>
        </div>
    );
}

export default HeaderNavBar;
