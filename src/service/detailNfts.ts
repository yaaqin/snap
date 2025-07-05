
import { axiosPublic } from "../libs/instance";
import type { nftsDetailProps } from "../model/nftsDetail";
export const FetchDetailNFTS = async (id: string): Promise<nftsDetailProps> => {
    const response = await axiosPublic.get(`/nfts/${id}`);
    return response.data;
};