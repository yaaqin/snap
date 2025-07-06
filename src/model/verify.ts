export interface verifyTest {
  messsage: string;
  data: Data;
}

interface Data {
  _id: string;
  uri: Uri;
  series_name: string;
  id: number;
  prod_batch: string;
  wallet: string;
  verify_code: string;
  collector?: any;
  description: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
  logo: string;
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

