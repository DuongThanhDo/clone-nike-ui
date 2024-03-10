import HeaderNavBar from './HeaderNavBar';
import HeaderTop from './HeaderTop';
import '../../assets/css/header.css';

function Header() {
    return (
        <div className="w-[100vw] h-[100px] z-50">
            <HeaderTop />
            <HeaderNavBar />
        </div>
    );
}

export default Header;
