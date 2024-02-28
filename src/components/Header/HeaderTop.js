import { SiJordan } from 'react-icons/si';
import { VscAccount } from 'react-icons/vsc';

function HeaderTop() {
    return (
        <div className="w-full h-[36px] flex justify-between items-center px-primary bg-gray-100">
            <SiJordan className="text-[20px]" />

            <div className="flex gap-3 font-medium text-[14px]">
                <p className="cursor-pointer">Find a Store</p>
                <span>|</span>
                <p className="cursor-pointer">Help</p>
                <span>|</span>
                <div className="flex items-center gap-2 cursor-pointer">
                    <p>Hi, Name</p>
                    <VscAccount className="text-[18px]" />
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
