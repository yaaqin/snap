import Footer from "../../components/footer";
import Header from "../../components/header";
import city from '../../assets/outline-landmarks-skyline 1.png'

export default function Museum() {
    return (
        <>
            <Header />
            <section className="w-full min-h-screen">
                <div className="relative w-full h-[70vh] overflow-hidden">
                    <img src={city} alt="" className="absolute z-0 w-full -mt-80"></img>
                    <section className="relative z-20 flex flex-col gap-8 items-center justify-center h-[70vh]">
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
            </section>
            <Footer />
        </>
    )
}
