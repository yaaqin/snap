import { ethers } from 'ethers';
import abi from '../abi/series.json';

// Ganti ini sementara untuk demo/development:
const privateKey = import.meta.env.VITE_MINTER_PRIVATE_KEY;

const PRIVATE_KEY = `0x${privateKey}`;
const RPC_URL = 'https://testnet-rpc.monad.xyz'; 

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

const contractAddress = '0x95171b9D0041aCc73Bd44Ed1c8Ed1729f391647e';
const contract = new ethers.Contract(contractAddress, abi, wallet);

export const verifyBrand = async (metadata: string, amount: bigint) => {
    const tx = await contract.verifyBrand(metadata, amount);
    await tx.wait();
    return tx.hash;
};
export const createSeries = async (seriesId: number, maxsupply: bigint, brandOwner: string) => {
    const tx = await contract.createSeries(seriesId, maxsupply, brandOwner);
    await tx.wait();
    return tx.hash;
};
export const mintSeries = async (to: string, seriesId: number, metadata: string) => {
    const tx = await contract.mintSeries(to, seriesId, metadata);
    await tx.wait();
    return tx.hash;
};