import { Link } from 'react-router-dom';

function NavBarItem({ title }) {
    return (
        <div className="h-[62px] flex items-center justify-center px-3 transition-all border-b-2 border-transparent hover:border-black">
            <Link to={'/product'}>{title}</Link>
        </div>
    );
}

export default NavBarItem;
