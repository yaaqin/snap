import Header from '../../components/header'
import Footer from '../../components/footer'
import { useDetaiBrand } from '../../hooks/query/useDetailBrand'
import space from '../../assets/freepik--20250704175511oaBz 1.png'

export default function DetailBrand() {

    const { data } = useDetaiBrand()
    
    return (
        <>
            <Header />
            <section className='w-full min-h-screen relative'>
                <img src={space} alt='' className='w-full absolute z-0'></img>
                <div className='relative z-20 flex flex-col md:flex-row w-full md:h-screen items-center pt-20 md:pt-0'>
                    <section className="w-full px-4 py-10 text-center">
                        <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">
                            Explore{" "}
                            <span className="text-blue-600 drop-shadow-md">SNAP</span> <br />
                            Collections
                        </h1>

                        <div className="mt-6 flex justify-center">
                            <div className="flex items-center rounded-full border border-gray-300 bg-white shadow-md overflow-hidden w-full max-w-md">
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
                    <img src={data?.data.logo} alt='' className=''></img>
                </div>
            </section>
            <Footer />
        </>
    )
}
