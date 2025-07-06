import { useState } from 'react'
import Header from '../../components/header';
import Footer from '../../components/footer';

const sampleSnaps = [
    {
        image: 'https://i.pinimg.com/736x/8d/d8/78/8dd87825c789b6aa9661e3886b56756c.jpg',
        title: 'Couple Bnw',
        date: 'June 2025',
    },
    {
        image: 'https://i.pinimg.com/736x/23/79/5c/23795ca2fa417cf4d99115608daddac5.jpg',
        title: 'Pink Holiday',
        date: 'June 2025',
    },
    {
        image: 'https://i.pinimg.com/736x/16/57/e8/1657e884ef7c45ce838b2e26a04ad7ac.jpg',
        title: 'American Rider',
        date: 'June 2025',
    },
];

export default function Collection() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <>
            <Header />
            <section className="bg-white min-h-screen pt-14">
                {/* Header */}
                <div className="bg-blue-600 text-white py-6 px-4 md:px-10 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto flex items-center space-x-4">
                        <img
                            src="/images/avatar.jpg"
                            alt="avatar"
                            className="w-14 h-14 rounded-full border-2 border-white"
                        />
                        <div>
                            <p className="text-sm break-all font-mono">
                                0xA9D3F5C8B7E2AD44E3BC7B8919D117A1A52E6B93
                            </p>
                            <p className="text-xs mt-1">
                                <span className="font-bold">3 SNAPs</span> Collected since{' '}
                                <span className="font-semibold text-white">14 May 2025</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="max-w-6xl mx-auto px-4 md:px-10 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="w-full sm:w-auto flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search for SNAPs"
                            className="w-full sm:w-60 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                    </div>
                    <div className="flex items-center space-x-3">
                        <label htmlFor="sort" className="text-sm text-gray-600">
                            order by
                        </label>
                        <select
                            id="sort"
                            className="border border-gray-300 rounded px-2 py-1 text-sm"
                        >
                            <option value="mint">Mint Date</option>
                            <option value="name">Name</option>
                        </select>
                        <div className="flex space-x-2">
                            <button
                                className={`p-1 border rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
                                onClick={() => setViewMode('grid')}
                            >
                                🟦
                            </button>
                            <button
                                className={`p-1 border rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
                                onClick={() => setViewMode('list')}
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="max-w-6xl mx-auto px-4 md:px-10 mt-8">
                    <h3 className="text-xl font-bold text-gray-700 mb-3">
                        JUNE <span className="text-blue-600">2025</span>
                    </h3>
                    <div className="flex gap-6 overflow-x-auto pb-4">
                        {sampleSnaps.map((snap, idx) => (
                            <div key={idx}>
                                <img src={snap.image} alt="" className='w-32 h-32 rounded-full object-cover border border-gray-500'/>
                            </div>
                            // <div
                            //     key={idx}
                            //     className="flex flex-col items-center overflow-shadow border rounded-full p-4 shrink-0 w-52 hover:shadow"
                            // >
                            //     <img src={snap.image} alt={snap.title} className="object-cover" />
                            //     {/* <p className="text-xs mt-2 text-center text-gray-600">{snap.title}</p> */}
                            // </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
