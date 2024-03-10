import { Dropdown } from 'antd';
import { SiJordan } from 'react-icons/si';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

function HeaderTop() {
    const items = [
        {
            key: '1',
            label: <Link to={'/profile'}>Profile</Link>,
        },
        {
            key: '2',
            label: <Link to={'/cart'}>Orders</Link>,
        },
        {
            key: '3',
            label: <Link to={'/favourite'}>Favourites</Link>,
        },
        {
            key: '4',
            label: <Link to={'/inbox'}>Inbox</Link>,
        },
        {
            key: '5',
            label: <Link to={'/setting/account'}>Account Settings</Link>,
        },
        {
            key: '6',
            label: <Link to={'/logOut'}>Log Out</Link>,
        },
    ];

    return (
        <div className="w-full h-[36px] flex justify-between items-center px-primary bg-gray-100">
            <SiJordan className="text-[20px]" />

            <div className="flex gap-3 font-medium text-[14px]">
                <p className="cursor-pointer">Find a Store</p>
                <span>|</span>
                <p className="cursor-pointer">Help</p>
                <span>|</span>
                <Dropdown menu={{ items }}>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <p>Hi, Name</p>
                        <VscAccount className="text-[18px]" />
                    </div>
                </Dropdown>
            </div>
        </div>
    );
}

export default HeaderTop;
