
import { useQuery } from "@tanstack/react-query";
import { FetchURIWallet } from "../../service/walletURI";
import type { URIWalletState } from "../../model/walletURI";
import { useAccount } from "wagmi";

export const useWalletURI = () => {
    const {address} = useAccount()
    const {
        data,
        isLoading,
        error,
        refetch,
    } = useQuery<URIWalletState>({
        queryKey: ["WalletURI"],
        queryFn: () => FetchURIWallet(address || ''),
    });

    return { data, isLoading, error, refetch };
};
