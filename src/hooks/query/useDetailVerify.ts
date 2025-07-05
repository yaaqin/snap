
import { useQuery } from "@tanstack/react-query";
import { FetchDetailVerify } from "../../service/verifyDetail";
import type { VerifyDetailProps } from "../../model/verifyDetail";

export const useDetailVerify = (id: string) => {
    const {
        data,
        isLoading,
        error,
        refetch,
    } = useQuery<VerifyDetailProps>({
        queryKey: ["verify-detail", id],
        queryFn: () => FetchDetailVerify(id),
        enabled: !!id,
    });

    return { data, isLoading, error, refetch };
};
