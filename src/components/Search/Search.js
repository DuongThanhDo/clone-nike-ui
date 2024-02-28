import { HiMagnifyingGlass } from 'react-icons/hi2';

function Search() {
    return (
        <div className="w-[180px] h-[40px] flex items-center bg-gray-100 overflow-hidden rounded-[20px]">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center z-10 cursor-pointer hover:bg-gray-200 transition-all">
                <HiMagnifyingGlass className="text-[22px]" />
            </div>
            <input className="w-[128px] border-none outline-none bg-transparent" placeholder="Search" />
        </div>
    );
}

export default Search;
