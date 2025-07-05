import { ethers } from "ethers";
import contractAbi from "../abi/brands.json"; 

const provider = new ethers.JsonRpcProvider(import.meta.env.VITE_RPC_URL);
const signer = new ethers.Wallet(import.meta.env.VITE_MINTER_PRIVATE_KEY, provider);

const contract = new ethers.Contract(
  import.meta.env.VITE_CONTRACT_ADDRESS,
  contractAbi,
  signer
);

// misal fungsi mint: mint(address to)
export const mintTo = async (to: string) => {
  try {
    const tx = await contract.mint(to);
    console.log("Tx Hash:", tx.hash);
    await tx.wait();
    console.log("Mint success!");
  } catch (err) {
    console.error("Mint failed:", err);
  }
};
