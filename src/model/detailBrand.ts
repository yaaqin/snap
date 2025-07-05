export interface DetailBransProps {
  message: string;
  data: Data;
}

interface Data {
  _id: string;
  wallet: string;
  brand_name: string;
  logo: string;
  deskripsi: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  uri: Uri;
}

interface Uri {
  name: string;
  description: string;
  image: string;
  attributes: Attribute[];
}

interface Attribute {
  trait_type: string;
  value: string;
}