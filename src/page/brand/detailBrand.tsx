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
                <div className='relative z-20 flex flex-col md:flex-row w-full h-screen items-center justify-center pt-20 md:pt-0 border border-black'>
                    <section className="w-full px-4 py-10 text-center">
                        <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">
                           {data?.data.brand_name}
                        </h1>
                        <p>{data?.data.wallet}</p>
                    </section>
                    <img src={data?.data.logo} alt='' className=''></img>
                </div>
            </section>
            <Footer />
        </>
    )
}
