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
                    <h3 className='text-[45px] leading-[100%] font-extrabold text-[#0052FF] font-poppins'>273428347</h3>
                    <span>Snap's Minted</span>
                </div>
                <div className='flex gap-4 items-center'>
                    <h3 className='text-[45px] leading-[100%] font-extrabold text-[#0052FF] font-poppins'>273428347</h3>
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
                    <img src='https://substackcdn.com/image/fetch/$s_!k8Yn!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5362a828-0f5b-4d17-a6c5-d0677dc89baa_1000x1000.jpeg' alt='image' className='h-24 rounded-full'></img>
                    <img src='https://indigo-legislative-mackerel-269.mypinata.cloud/ipfs/bafkreiesb3c6clj7pcseiexzygi3vrzo3k33gmgqchqmmmmrwh527jds3m' alt='image' className='h-24 rounded-full'></img>
                    <img src='https://i.pinimg.com/736x/a0/ab/f0/a0abf0b6d4585cc5426e78fde49142b6.jpg' alt='image' className='h-24 rounded-full'></img>
                    <img src='https://indigo-legislative-mackerel-269.mypinata.cloud/ipfs/bafkreidkfnfn5n6qj5f3ie2xrs6afjge42wsod34dgn7lebspbhtwo4e6a' alt='image' className='h-24 rounded-full'></img>
                </section>
            </section>

            {/* High Resolution Output Section */}
            <section className="px-6 py-24 relative bg-[#f3f9ff]">
                <img src={city} alt="city" className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Judul dan Subjudul */}
                    <div className="text-center mb-16">
                    <h2 className="text-[40px] leading-[100%] font-extrabold text-black inline-block px-4">
                        What People Are Saying
                    </h2>
                    <p className="text-gray-400 mt-4">
                        We provide support for more than <span className="text-[#0052FF] font-semibold">7K+ Businesses.</span>
                    </p>
                    </div>

                    {/* Testimoni Card */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                        <img src="https://adminlte.io/themes/v3/dist/img/user4-128x128.jpg" alt="Diana" className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-semibold">Diana E.</p>
                            <p className="text-sm text-gray-400">Brand Owner</p>
                        </div>
                        </div>
                        <p>Snap makes it insanely easy to prove my streetwear drops are 100% legit. My customers feel more confident buying from me</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                        <img src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg" alt="David" className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-semibold">David</p>
                            <p className="text-sm text-gray-400">Fashion Collector</p>
                        </div>
                        </div>
                        <p>I love how I can scan a QR code and instantly get my NFT! It’s like owning a piece of the brand that no one can fake.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center gap-3 mb-4">
                        <img src="https://adminlte.io/themes/v3/dist/img/user7-128x128.jpg" alt="Leonel" className="w-10 h-10 rounded-full" />
                        <div>
                            <p className="font-semibold">Leonel R.</p>
                            <p className="text-sm text-gray-400">Online Shopper</p>
                        </div>
                        </div>
                        <p>I used to worry about getting fake stuff, now every product I buy comes with proof I can check and keep. Love it!</p>
                    </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-24 text-center">
                    <h2 className="text-[35px] font-extrabold text-transparent bg-gradient-to-r from-[#0052FF] to-[#0052FF] bg-clip-text leading-[100%]">
                        Ready to Authenticate Your Streetwear?
                    </h2>
                    <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-[#0052FF] text-white px-6 py-3 rounded-lg font-semibold">Connect Wallet</button>
                        <button className="bg-white text-[#0052FF] border border-[#0052FF] px-6 py-3 rounded-lg font-semibold">Learn More</button>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
