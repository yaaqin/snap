export interface URIWalletState {
  success: boolean
  message: string
  data: Data
}

export interface Data {
  metadata_uri: string
}