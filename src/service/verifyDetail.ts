
import { axiosPublic } from "../libs/instance";
import type { verifyTest } from "../model/verify";
export const FetchDetailVerify = async (id: string): Promise<verifyTest> => {
    const response = await axiosPublic.get(`/series/${id}`);
    return response.data;
};