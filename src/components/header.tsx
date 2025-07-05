import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useNavigate } from "react-router-dom"
import logos from '../../public/SNAP.svg'
import { useAccount } from "wagmi"
import { useCheckWhitelist } from "../hooks/query/useCheckVerify"

const Header = () => {
  const navigate = useNavigate()
  const { isConnected } = useAccount()
  const { data } = useCheckWhitelist()
  console.log(data)
  const handleCreateBrand = () => {
    navigate(`/brand/create`)
  }
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <section className="flex gap-8 items-center">
            <button onClick={() => navigate('/')} className="flex items-center">
              <img src={logos} alt=""></img>
            </button>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-[#BC9BF3] hover:text-[#BC9BF3] text-xl font-semibold">
                About
              </a>
              <a href="#" className="text-[#BC9BF3] hover:text-[#BC9BF3] text-xl font-semibold">
                Issuers
              </a>
              <a href="#" className="text-[#BC9BF3] hover:text-[#BC9BF3] text-xl font-semibold">
                Collectors
              </a>
              <a href="#" className="text-[#BC9BF3] hover:text-[#BC9BF3] text-xl font-semibold">
                Builders
              </a>
            </nav>
          </section>
          <div className="flex items-center space-x-4">
            {data ? (
              <button onClick={handleCreateBrand} className={`${isConnected ? '' : 'hidden'} bg-[#BC9BF3] text-white py-2 px-6 rounded-full hover:bg-purple-500 z-50`}>
                Brand
              </button>
            ) : (
              <button onClick={handleCreateBrand} className={`${isConnected ? '' : 'hidden'} bg-[#BC9BF3] text-white py-2 px-6 rounded-full hover:bg-purple-500 z-50`}>
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