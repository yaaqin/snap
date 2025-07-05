import './App.css'
import {
  QueryClient,
} from "@tanstack/react-query";
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider, type Chain } from '@rainbow-me/rainbowkit'
import { QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi';
import { ApolloProvider } from '@apollo/client';
import { Toaster } from "react-hot-toast";
import { apolloClient } from './libs/graphql';
import { RouterProvider } from 'react-router-dom';
import AppRoutes from './routes';

const monadTestnet: Chain = {
  id: 10143,
  name: 'Monad Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'MON',
    symbol: 'MON',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.monad.xyz/'],
    },
    public: {
      http: ['https://testnet-rpc.monad.xyz/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'MonadScan',
      url: 'https://testnet.monadexplorer.com',
    },
  },
  testnet: true,
};

export const config = getDefaultConfig({
  appName: 'Simple DEX',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Dapatkan dari https://cloud.walletconnect.com
  chains: [monadTestnet],
  ssr: true,
});

function App() {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <ApolloProvider client={apolloClient}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <div className="min-h-screen">
              <RouterProvider router={AppRoutes} />
            </div>
            <Toaster position="top-center" />
          </RainbowKitProvider>
        </QueryClientProvider>
      </ApolloProvider>

    </WagmiProvider>
  )
}

export default App
