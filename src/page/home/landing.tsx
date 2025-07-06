import React from 'react';
import { useNavigate } from 'react-router-dom';
import ilustration from '../../assets/img/f8e9f373-79f6-418b-b240-70113a48551f_removalai_preview 1.png'
import space from '../../assets/freepik--20250704175511oaBz 1.png'
import city from '../../assets/outline-landmarks-skyline 1.png'
import icon1 from '../../assets/svg/icon1.svg'
import icon2 from '../../assets/svg/icon2.svg'
import icon3 from '../../assets/svg/icon3.svg'
import icon4 from '../../assets/svg/icon4.svg'
import icon5 from '../../assets/svg/icon5.svg'

interface CardWorksState {
    title: string
    desc: string
    icon: React.ReactNode;
}
const CardWorks = ({
    title,
    desc,
    icon
}: CardWorksState) => {
    return (
        <div className="w-[290px] rounded-2xl bg-white shadow-md p-6 text-center space-y-3">
            <div className="w-10 h-10 mx-auto flex items-center justify-center bg-[#0052FF] rounded-full shadow">
                {icon}
            </div>
            <h3 className="font-semibold text-lg text-black">{title}</h3>
            <p className="text-sm text-gray-600">
                {desc}
            </p>
        </div>
    )
}

const LandingPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-[#EBFBFF] min-h-screen">
            {/* Hero Section */}
            <section className="relative px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                Snap is for
                                <span className="bg-gradient-to-r from-[#0052FF] to-[#0052FF] bg-clip-text text-transparent">
                                    {" "}authenticate your streetwear on blockchain
                                </span>
                            </h1>
                            {/* <p className="text-gray-400 text-lg max-w-lg">
                                Lorem neque eget molestie. Consectetur gravida ultrices, 
                                tellus mauris. Non mauris at lectus augue mauris que elit et.
                            </p> */}
                            <button onClick={() => navigate(`/series/create`)} className="bg-gradient-to-r text-white from-[#0052FF] to-[#0052FF] hover:from-[#0052FF] hover:to-[#0052FF] px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                                Get Started
                            </button>
                        </div>

                        {/* Hero Image/Graphic */}
                        {/* <div className="relative">
                            <div className="bg-gradient-to-br from-[#0052FF]/20 to-[#0052FF]/20 rounded-3xl p-8 backdrop-blur-sm border border-[#0052FF]/30">
                                <div className="w-full h-96 bg-gradient-to-br from-[#0052FF] to-[#0052FF] rounded-2xl flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gradient-to-br from-[#0052FF] to-[#0052FF] rounded-full animate-pulse"></div>
                                </div>
                            </div>
                        </div> */}
                        <img src={ilustration} alt='image'></img>
                    </div>
                </div>
            </section>

            {/* minter */}
            <section className='flex flex-col md:flex-row justify-center gap-24 bg-white py-32 items-center'>
                <div className='flex gap-4 items-center'>
                    <h3 className='text-4xl font-bold text-[#0052FF]'>273428347</h3>
                    <span>Snap's Minted</span>
                </div>
                <div className='flex gap-4 items-center'>
                    <h3 className='text-4xl font-bold text-[#0052FF]'>273428347</h3>
                    <span>Snap's Minted</span>
                </div>
            </section>

            {/* Features Section */}
            <section className="px-6 py-20 relative overflow-hidden">
                <img src={space} alt='space' className='absolute inset-0 w-full h-full object-cover z-0'></img>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            HOW SNAP WORKS?
                            {/* <span className="bg-gradient-to-r from-[#0052FF] to-[#0052FF] bg-clip-text text-transparent">
                                {" "}Creativity
                            </span> */}
                        </h2>
                        {/* <p className="text-gray-400 max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p> */}
                    </div>

                    <div className='flex flex-wrap justify-center gap-12 z-50'>
                        <CardWorks title={'Register Your Brand'} desc={'Set up your fashion label in minutes. Get verified and start protecting your originals.'} icon={<img src={icon1} alt=''></img>} />
                        <CardWorks title={'Upload Your Product'} desc={'Add your limited-edition tees, hoodies, or sneakers complete with product details and images.'} icon={<img src={icon2} alt=''></img>}/>
                        <CardWorks title={'Generate NFT'} desc={'Snap automatically mints a unique NFT for each item, certified proof of authenticity on-chain.'} icon={<img src={icon3} alt=''></img>}/>
                        <CardWorks title={'Attach and Distribute'} desc={'Set up your fashion label in minutes. Get verified and start protecting your originals.'} icon={<img src={icon4} alt=''></img>}/>
                        <CardWorks title={'Customer Claims'} desc={'Buyers scan the QR and claim their NFT — proof they own the real thing. Instant, secure, and permanent.'} icon={<img src={icon5} alt=''></img>}/>
                    </div>
                </div>
            </section>

            {/* trusted */}
            <section className=' bg-white py-24'>
                <h1 className='text-4xl font-bold text-[#787878] text-center mb-16'>Trusted by Leading Brands</h1>
                <section className='flex justify-center gap-12 max-w-4xl mx-auto'>
                    <img src='https://gateway.pinata.cloud/ipfs/QmSgDwc21Mt5xo9yWcF7RCTr89A94mo5MgfL1qmwMJanMe' alt='image' className='h-24 rounded-full'></img>
                    <img src='https://gateway.pinata.cloud/ipfs/QmSgDwc21Mt5xo9yWcF7RCTr89A94mo5MgfL1qmwMJanMe' alt='image' className='h-24 rounded-full'></img>
                    <img src='https://gateway.pinata.cloud/ipfs/QmSgDwc21Mt5xo9yWcF7RCTr89A94mo5MgfL1qmwMJanMe' alt='image' className='h-24 rounded-full'></img>
                    <img src='https://gateway.pinata.cloud/ipfs/QmSgDwc21Mt5xo9yWcF7RCTr89A94mo5MgfL1qmwMJanMe' alt='image' className='h-24 rounded-full'></img>
                    <img src='https://gateway.pinata.cloud/ipfs/QmSgDwc21Mt5xo9yWcF7RCTr89A94mo5MgfL1qmwMJanMe' alt='image' className='h-24 rounded-full'></img>
                </section>
            </section>

            {/* High Resolution Output Section */}
            <section className="px-6 py-12 relative">
                <img src={city} alt='space' className='absolute inset-0 w-full h-full object-cover z-0'></img>
                <div className="max-w-7xl mx-auto relative z-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            What People Are Saying
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We provide support for more than  7K+ Businesses.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold">
                                High-Resolution
                                <br />
                                <span className="bg-gradient-to-r from-[#0052FF] to-[#0052FF] bg-clip-text text-transparent">
                                    Outputs
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Get professional-quality designs with pixel-perfect precision.
                                Export in multiple formats and resolutions for any use case.
                            </p>
                            <button className="bg-gradient-to-r from-[#0052FF] to-[#0052FF] hover:from-[#0052FF] hover:to-[#0052FF] px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                                Try Now
                            </button>
                        </div>

                        {/* Preview Interface */}
                        <div className="relative">
                            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                                <div className="bg-white rounded-lg p-6 mb-4">
                                    <div className="h-48 bg-gradient-to-br from-[#0052FF] to-[#0052FF] rounded-lg mb-4"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-6">
                                    <div className="h-32 bg-gradient-to-br from-[#0052FF] to-[#0052FF] rounded-lg mb-4"></div>
                                    <div className="space-y-2">
                                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                                        <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
