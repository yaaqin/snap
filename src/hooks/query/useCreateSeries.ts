import { useWriteContract } from "wagmi";
import abi from '../../abi/series.json'

import { useState } from 'react';
import { contracts } from '../../constants/contrract';


export const createSeriesFunction = () => {
      const { series } = contracts;

        // const { data: signer } = useSigner();


      const [txHash, setTxHash] = useState<`0x${string}` | null>(null);


  // Mengambil data dari useWriteContract untuk memanggil fungsi kontrak
  const { writeContract } = useWriteContract({
    mutation: {
      onSuccess: (hash: `0x${string}`) => {
        setTxHash(hash);
      },
    },
  });

const handleCreateSeries = async  (seriesId: number, maxSupply: number, brandOwner: string) => {
    //  if (!signer) {
    //   console.log("Signer tidak tersedia");
    //   return;
    // }
    if (writeContract) {
     writeContract({
      address: series.address,
      abi: abi,
      functionName: "createSeries",
      args: [seriesId, BigInt(maxSupply), brandOwner],
    });
    } else {
      console.log('Write function is not defined');
    }
  }

  return {
    handleCreateSeries,
  }
}
