import HeaderNavBar from './HeaderNavBar';
import HeaderTop from './HeaderTop';

function Header() {
    return (
        <div className="w-[100vw] h-[100px]">
            <HeaderTop />
            <HeaderNavBar />
        </div>
    );
}

export default Header;
