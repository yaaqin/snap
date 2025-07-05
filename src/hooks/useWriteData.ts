// import { useAccount, useContractWrite, useWaitForTransaction } from 'wagmi'
// import { ethers } from 'ethers'
// import abi from '../../abi/brands.json' // Gantilah dengan path ABI yang sesuai

// export const useWriteData = () => {
//   const { address, isConnected } = useAccount()

//   // Hook untuk menulis data ke kontrak pintar
//   const { write, isLoading, isSuccess, error } = useContractWrite({
//     address: '0x8aCF80674385Bc8e7dd91dddA56A8e6464eBe35a', // Alamat kontrak
//     abi, // ABI kontrak
//     functionName: 'yourFunctionName', // Ganti dengan nama fungsi yang sesuai
//     args: [
//       'yourMetadataURI', // Ganti dengan metadataURI yang sesuai
//       ethers.utils.parseUnits('yourPayableAmount', 18), // Ganti dengan jumlah yang sesuai, dikonversi ke unit dengan 18 desimal (jika diperlukan)
//     ],
//     // Optional: kondisi untuk menulis hanya jika ada alamat terhubung
//     enabled: !!address && isConnected,
//   })

//   // Menggunakan hook untuk menunggu transaksi jika berhasil
//   const { isLoading: isWaiting, isSuccess: isTransactionSuccess } = useWaitForTransaction({
//     hash: isSuccess ? write?.hash : undefined,
//   })

//   return {
//     write, // Fungsi untuk menulis data ke smart contract
//     isLoading, // Status loading saat menunggu transaksi
//     isSuccess, // Status jika transaksi berhasil
//     error, // Error yang terjadi saat menulis data
//     isWaiting, // Status saat menunggu konfirmasi transaksi
//     isTransactionSuccess, // Status saat transaksi berhasil
//   }
// }
