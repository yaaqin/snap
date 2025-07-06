import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useNavigate } from "react-router-dom"
import logos from '../../public/SNAP.svg'
import { useAccount } from "wagmi"
import { useCheckWhitelist } from "../hooks/query/useCheckVerify"

const Header = () => {
  const navigate = useNavigate()
  const { isConnected } = useAccount()
  const { data } = useCheckWhitelist()
  const handleCreateBrand = () => {
    navigate(`/brand/create`)
  }
  const handleBrandDetail = () => {
    navigate(`/brand`)
  }
  return (
    <header className="bg-[#F6F7F9] shadow-md fixed w-full top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <section className="flex gap-8 items-center">
            <button onClick={() => navigate('/')} className="flex items-center">
              <img src={logos} alt="icons" className="-mt-4"></img>
            </button>
            <nav className="hidden md:flex space-x-4">
              <button onClick={() => navigate('/about')} className="text-[#0052FF] hover:text-[#0052FF] text-xl font-semibold">
                About
              </button>
              <button onClick={() => navigate('/museum')} className="text-[#0052FF] hover:text-[#0052FF] text-xl font-semibold">
                Museum
              </button>
              <button onClick={() => navigate('/collection')} className="text-[#0052FF] hover:text-[#0052FF] text-xl font-semibold">
                Collection
              </button>
              <button onClick={() => navigate('/explore')} className="text-[#0052FF] hover:text-[#0052FF] text-xl font-semibold">
                Explore
              </button>
            </nav>
          </section>
          <div className="flex items-center space-x-4">
            {data ? (
              <button onClick={handleBrandDetail} className={`${isConnected ? '' : 'hidden'} bg-[#0052FF] text-white py-2 px-6 rounded-full hover:bg-[#0052FF] z-50`}>
                Brand
              </button>
            ) : (
              <button onClick={handleCreateBrand} className={`${isConnected ? '' : 'hidden'} bg-[#0052FF] text-white py-2 px-6 rounded-full hover:bg-[#0052FF] z-50`}>
                Create a SNAP
              </button>
            )}
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header