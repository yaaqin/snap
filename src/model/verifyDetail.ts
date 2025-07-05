export interface VerifyDetailProps {
  success: boolean
  data: Data
}

export interface Data {
  series_id: number
  serial_number: number
  uri: Uri
  url: string
  verify_code: string
  is_collected: boolean
  wallet_collector: any
  created_at: string
}

export interface Uri {
  name: string
  image: string
  attributes: Attribute[]
  description: string
}

export interface Attribute {
  value: string
  trait_type: string
}
