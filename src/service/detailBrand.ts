
import { axiosPublic } from "../libs/instance";
import type { DetailBransProps } from "../model/detailBrand";
export const FetchDetailBrand = async (id: string): Promise<DetailBransProps> => {
    const response = await axiosPublic.get(`/brands/${id}`);
    return response.data;
};