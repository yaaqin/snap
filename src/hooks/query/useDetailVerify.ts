
import { useQuery } from "@tanstack/react-query";
import { FetchDetailVerify } from "../../service/verifyDetail";
import type { verifyTest } from "../../model/verify";

export const useDetailVerify = (id: string) => {
    const {
        data,
        isLoading,
        error,
        refetch,
    } = useQuery<verifyTest>({
        queryKey: ["verify-detail", id],
        queryFn: () => FetchDetailVerify(id),
        enabled: !!id,
    });

    return { data, isLoading, error, refetch };
};
