import { useAccount, useReadContract  } from 'wagmi'
import abi from '../../abi/brands.json'

export const useCheckWhitelist = () => {
  const { address, isConnected } = useAccount()

  const contractAddress = import.meta.env.VITE_CONTRACT_BRANDS;
  const {
    data,
    isLoading,
    isError,
    refetch
  } = useReadContract ({
    address: contractAddress, 
    abi,
    functionName: 'isVerified',
    args: address ? [address] : undefined, 
  })

  return {
    address,
    isConnected,
    isLoading,
    isError,
    refetch,
    data: data as boolean | undefined, 
  }
}
