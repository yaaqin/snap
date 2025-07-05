


import { axiosPublic } from "../libs/instance";
import type { URIWalletState } from "../model/walletURI";
export const FetchURIWallet = async (wallet: string): Promise<URIWalletState> => {
    const response = await axiosPublic.get(`/brand/wallet/${wallet}`);
    return response.data;
};