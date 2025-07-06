import React from "react";
import Header from "../../components/header";
import CreateBransForm from "../../components/createBransForm";
import city from '../../assets/outline-landmarks-skyline 1.png'
import { useDetaiBrand } from "../../hooks/query/useDetailBrand";
import { useAccount, useWriteContract } from "wagmi";
import { useNavigate } from "react-router-dom";
import type { Uri } from "../../model/verifyDetail";
import { contracts } from "../../constants/contrract";

export const CreateBrand: React.FC = () => {
  const navigate = useNavigate()
  const { data } = useDetaiBrand()
  const { address, isConnected } = useAccount()

  if (!isConnected) {
    console.log('Wallet belum terhubung');
    return;
  }
  const { writeContract } = useWriteContract()

  const { brand } = contracts;

  const buildBrandMetadata = (uri: Uri): string => {
    return JSON.stringify(uri);
  };


  const handleVerif = () => {
    if (data) {
      const amount = 0.0001
      const metadataString = buildBrandMetadata(data.data.uri);

      console.log(metadataString)
      writeContract({
        abi: brand.abi,
        address: brand.address,
        functionName: 'verifyBrand',
        args: [metadataString, amount],
      });
    } else {
      console.log('data tidak ada')
    }
  }

  // const handleVerif = () => {
  //   if (data) {
  //     console.log(contractAddress)
  //     const amount = 0.0001;
  //     const metadataString = buildBrandMetadata(data.data.uri);

  //     console.log(metadataString);

  //     // Use `useContract` to get the contract instance
  //     const { write } = useContract({
  //       addressOrName: contractAddress,  // Smart contract address
  //       contractInterface: abi,          // Contract ABI
  //     });

  //     // Triggering the `verifyBrand` function with the appropriate arguments
  //     write?.({
  //       functionName: 'verifyBrand',
  //       args: [metadataString, amount],
  //       onSuccess: (txResponse: any) => {
  //         console.log('Transaction Sent:', txResponse);
  //         // Optionally, you can wait for the transaction to be mined here if necessary
  //       },
  //       onError: (error: any) => {
  //         console.error('Transaction failed:', error);
  //       },
  //     });
  //   } else {
  //     console.log('Data tidak ada');
  //   }
  // }

  if (!address) {
    navigate('/')
  }
  return (
    <section className="flex justify-center items-center min-h-screen bg-[#EBFBFF] relative">
      <img src={city} alt="" className="w-full absolute z-0"></img>
      <div className="relative z-20 w-full">
        <Header />
        {data ? (
          <section className="w-full flex flex-col items-center justify-center">
            <div>
              <button onClick={handleVerif} className="px-8 rounded-full py-2 bg-[#0052FF] capitalize font-bold text-white duration-300 hover:scale-[1.1]">verify your Brand</button>
            </div>
            <p>metadata</p>
            <p className="text-center">{buildBrandMetadata(data.data.uri)}</p>
          </section>
        ) : (
          <CreateBransForm />
        )}
      </div>
    </section>
  );
};

