import type { DetailBransProps } from "../model/detailBrand";

export function convertUriToMetadata(detail: DetailBransProps) {
  const metadata = JSON.stringify(detail.data.uri);
  return metadata;
}