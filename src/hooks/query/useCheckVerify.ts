import { useAccount, useReadContract  } from 'wagmi'
import abi from '../../abi/brands.json'

export const useCheckWhitelist = () => {
  const { address, isConnected } = useAccount()

  // Menggunakan useContractRead dengan pengecekan jika alamat ada
  const {
    data,
    isLoading,
    isError,
    refetch
  } = useReadContract ({
    address: '0x8aCF80674385Bc8e7dd91dddA56A8e6464eBe35a', // Alamat kontrak
    abi, // ABI kontrak
    functionName: 'isVerified',
    args: address ? [address] : undefined, 
  })

  return {
    address,
    isConnected,
    isLoading,
    isError,
    refetch,
    data: data as boolean | undefined, // Tipe data yang dikembalikan
  }
}
