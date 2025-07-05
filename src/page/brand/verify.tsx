import Footer from "../../components/footer";
import Header from "../../components/header";
import icon from '../../assets/freepik--20250704175511oaBz 1.png'
import kuda from '../../assets/img/Unicorn Startup.png'
import { useWalletURI } from "../../hooks/query/useWalletURI";
import { useAccount } from "wagmi";
// import abi from '../../abi/brands.json'

export default function BrandVerify() {
  const { data } = useWalletURI()
  console.log(data)

  const { address } = useAccount()

  console.log(address)
  // const { writeContract } = useWriteContract({
  //   address: '0x8aCF80674385Bc8e7dd91dddA56A8e6464eBe35a', 
  //   contractInterface: abi, 
  // })

  // const handleVerify = (metadataURI: string, amount: string) => {
  //   if (address && writeContract) {
  //     const amount = '0.0001'

  //     writeContract({
  //       functionName: 'verifyBrand', // Nama fungsi di smart contract
  //       args: [
  //         metadataURI, // Parameter pertama: metadataURI
  //         ethers.utils.parseUnits(amount, 18), // Parameter kedua: amount (konversi ke unit dengan 18 desimal)
  //       ],
  //     }).then((response) => {
  //       console.log('Transaction sent:', response)
  //     }).catch((err) => {
  //       console.error('Transaction failed:', err)
  //     })
  //   }
  // }
  return (
    <section className='min-h-screen w-full'>
      <Header />
      <div className="relative">
        <img src={icon} alt="" className="w-full absolute z-0"></img>
        <section className="relative z-40 pt-20">
          <h2 className="text-center font-bold text-7xl">Get Your Brand Verified</h2>
          <div className="border border-black rounded-2xl p-6 flex items-center gap-12 max-w-4xl bg-white mx-auto my-6" >
            <p className="text-xl">SNAP helps real fashion creators protect what they’ve built. Submit your brand name, logo, and short description. Once verified, you’ll gain access to product authentication, NFT minting, and QR linking features. Let the world know you're legit.</p>
            <img src={kuda} alt=""></img>
          </div>
          <div className="w-full justify-center items-center">
            <button
              //  onClick={handleVerify} 
              className="px-12 rounded-full py-2 shadow-2xl bg-[#0052FF] text-white mt-4">
              Verify Your Brand
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
