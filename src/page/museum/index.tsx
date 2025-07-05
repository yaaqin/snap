import Footer from "../../components/footer";
import Header from "../../components/header";
import city from '../../assets/outline-landmarks-skyline 1.png'
import { products } from "./dummy";
import { useState } from "react";

const BrandCard = () => {
    return (
        <div className="grid grid-flow-col justify-start col-span-1 items-center bg-white rounded-[2rem] shadow border border-gray-200 px-4 py-3 gap-4 max-w-xl">
            {/* Product Image */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
                <img src={'https://i.pinimg.com/736x/ca/12/e8/ca12e8824457f0a55c4b81fdc66719e6.jpg'} alt="product" className="w-24 h-24 object-cover" />
            </div>

            {/* Text Info */}
            <div className="flex-1">
                {/* Brand */}
                <div className="flex items-center gap-2 text-sm font-bold">
                    <img src={'https://i.pinimg.com/736x/a6/e2/b1/a6e2b1f1031f1a0770b14e7bb0cef607.jpg'} alt="brand" className="w-4 h-4" />
                    {'Ventela'}
                </div>

                {/* Product */}
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-800">{'Sepatu'}</h3>
                    <span className="text-xs text-gray-500 font-medium">Batch {'1'}</span>
                </div>

                {/* ID & Date */}
                {/* <p className="text-gray-400 text-sm">
                    ID {id} <span className="mx-1">|</span> {timeAgo}
                </p> */}
            </div>
        </div>
    )
}

export default function Museum() {
    const [activeTab, setActiveTab] = useState<"Products" | "Brands" | "Activity">("Products")
    return (
        <>
            <Header />
            <section className="w-full min-h-screen">

                {/* section 1 */}
                <div className="relative w-full md:h-[70vh] overflow-hidden">
                    <img src={city} alt="" className="absolute z-0 w-full mt-0 md:-mt-80"></img>
                    <section className="relative z-20 flex flex-col gap-8 items-center justify-center h-[50vh] md:h-[70vh]">
                        <h2 className="text-blue-700 font-bold text-3xl flex items-center rounded-full border border-gray-300 bg-white shadow-md overflow-hidden px-24 py-4">
                            SNAP MUSEUM
                        </h2>
                        <div className="mt-6 flex justify-center">
                            <div className="flex items-center rounded-full border border-gray-300 bg-white shadow-md overflow-hidden w-full max-w-3xl">
                                <input
                                    type="text"
                                    placeholder="Email, Adress or ENS"
                                    className="flex-1 px-4 py-2 text-sm outline-none"
                                />
                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full m-1 transition">
                                    Search
                                </button>
                            </div>
                        </div>
                    </section>
                </div>

                {/* section 2 */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 bg-[#F6F7F9] px-2 md:px-0">
                    <BrandCard />
                    <BrandCard />
                    <BrandCard />
                    <BrandCard />
                </div>
                {/* section 3 */}

                <section className="px-6 py-10 bg-[#f9fafb]">
                    <div className="max-w-7xl mx-auto">
                        {/* Tabs / Header */}
                        <div className="flex items-center space-x-4 mb-6 rounded-full px-4 py-2 border border-gray-600 w-fit mx-auto">
                            <button onClick={() => setActiveTab('Products')} 
                            className={`${activeTab === "Products" ? 'bg-blue-600 text-white ' : 'text-gray-600 '} px-4 py-2 rounded-full text-sm font-medium shadow`}>
                                3,877,844 Products
                            </button>
                            <button onClick={() => setActiveTab('Brands')}
                                className={`${activeTab === "Brands" ? 'bg-blue-600 text-white ' : 'text-gray-600 '} px-4 py-2 rounded-full text-sm font-medium shadow`}>12,844 Brands</button>
                            <button onClick={() => alert('soon')} className="text-gray-600 px-4 py-2 text-sm font-medium">Activity</button>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-[#F6F7F9]">
                            {products.map((product, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
                                    <img src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded-xl" />
                                    <p className="text-xs text-gray-400 mb-1">{product.id}</p>
                                    <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-sm text-gray-500">{product.title}</p>

                                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                                        <span className="flex items-center space-x-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                                                viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 9h10m-11 5h12" /></svg>
                                            <span>{product.date}</span>
                                        </span>
                                        <span className="bg-gray-100 px-2 py-1 rounded-full">{product.collections}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </section>
            <Footer />
        </>
    )
}
