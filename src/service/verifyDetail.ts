
import { axiosPublic } from "../libs/instance";
import type { VerifyDetailProps } from "../model/verifyDetail";
export const FetchDetailVerify = async (id: string): Promise<VerifyDetailProps> => {
    const response = await axiosPublic.get(`/nfts/verify/${id}`);
    return response.data;
};