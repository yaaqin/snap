import React from 'react';
import logos from '../../public/SNAP.svg'

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#F6F7F9]">
            <div className="container mx-auto py-4 px-4 flex justify-start gap-6 items-center">
                <img src={logos} alt=''></img>
                <div className="flex items-center">
                    <span className="text-[#0052FF] text-lg font-semibold">
                        &copy; 2025 SNAP Inc.
                    </span>
                </div>
                <div className="flex space-x-4 text-[#0052FF]">
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <span className="border-l border-gray-300 h-4" />
                    <a href="#" className="hover:underline">Privacy</a>
                    <span className="border-l border-gray-300 h-4" />
                    <a href="#" className="hover:underline">Data Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
