/** @format */

import BRAND_ABI from "../abi/brands.json";
import SERIES_ABI from "../abi/series.json"

export const contracts = {
  brand: {
    address: "0xa5B52e741102df0894DF9fd8dBc963a3000b285e" as const,
    abi: BRAND_ABI,
  },
  series: {
    address: "0x95171b9D0041aCc73Bd44Ed1c8Ed1729f391647e" as const,
    abi: SERIES_ABI,
  }
} as const;
