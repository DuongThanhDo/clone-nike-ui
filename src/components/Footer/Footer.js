import { FaTwitter, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { TiSocialInstagram } from 'react-icons/ti';

const getHelp = ['Order Status', 'Delivery', 'Returns', 'Payment Options', 'Contact Us'];
const aboutNike = ['News', 'Careers', 'Investors', 'Sustainability'];
const iconsSocialMedia = [<FaTwitter />, <FaFacebookF />, <TfiYoutube />, <TiSocialInstagram />];

function Footer() {
    return (
        <div className="bg-[#111111] pt-[40px] px-[40px] mt-20">
            <div className="flex justify-between">
                <div className="flex flex-1">
                    <div className="w-1/4 text-[14px] font-bold">
                        <p className="cursor-pointer text-white">FIND A STORE</p>
                        <p className="my-[14px] cursor-pointer text-white">BECOME A MEMBER</p>
                        <p className="cursor-pointer text-white">Send Us Feedback</p>
                    </div>
                    <ul className="w-1/4">
                        <li className="text-[14px] font-bold cursor-pointer text-white">GET HELP</li>
                        {getHelp.map((item, index) => (
                            <li
                                className="text-[12px] text-[#7e7e7e] cursor-pointer font-bold mt-[14px] hover:text-white transition-all"
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <ul className="w-1/4">
                        <li className="text-[14px] font-bold cursor-pointer text-white">ABOUT NIKE</li>
                        {aboutNike.map((item, index) => (
                            <li
                                className="text-[12px] text-[#7e7e7e] cursor-pointer font-bold mt-[14px] hover:text-white transition-all"
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[20%] flex gap-3 justify-end">
                    {iconsSocialMedia.map((icon, index) => (
                        <div
                            key={index}
                            className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#7e7e7e] cursor-pointer text-[18px] text-black hover:bg-white transition-all"
                        >
                            {icon}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-between items-center py-6 text-[13px] font-medium mt-6">
                <div className="flex items-center gap-4">
                    <FaMapMarkerAlt />
                    <p className="font-semibold text-white">Vietnam</p>
                    <p className="text-[#7e7e7e]">© 2023 Nike, Inc. All Rights Reserved</p>
                </div>
                <div className="flex gap-4">
                    <p className='text-[#7e7e7e]'>Guides</p>
                    <p className='text-[#7e7e7e]'>Terms of Sale</p>
                    <p className='text-[#7e7e7e]'>Terms of Use</p>
                    <p className='text-[#7e7e7e]'>Nike Privacy Policy</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
