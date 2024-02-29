import { Link } from 'react-router-dom';

function NavBarItem({ title }) {
    return (
        <Link to={'/product'} className="h-[62px] flex items-center justify-center px-3 transition-all border-b-2 border-transparent hover:border-black">
           {title}
        </Link>
    );
}

export default NavBarItem;
