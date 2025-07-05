
import { useQuery } from "@tanstack/react-query";
import { FetchDetailBrand } from "../../service/detailBrand";
import type { DetailBransProps } from "../../model/detailBrand";
import { useAccount } from "wagmi";

export const useDetaiBrand = () => {

    const { address } = useAccount()

    const {
        data,
        isLoading,
        error,
        refetch,
    } = useQuery<DetailBransProps>({
        queryKey: ["brand-detail"],
        queryFn: () => FetchDetailBrand(address || '')
    });

    return { data, isLoading, error, refetch };
};
