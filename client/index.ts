export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export interface axiosProps {
  baseURL: string;
  timeout?: number;
  headers: Record<string, string>;
  withCredentials: boolean;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface Size {
  totalArea: number;
}

export interface PropertyData {
  _id: number;
  name: string;
  images: string[];
  listingPrice: number;
  category: string;
  address: Address;
  bedrooms: number;
  bathrooms: number;
  size: Size;
  description: string;
  status: string;
  floors: number;
  garage: number;
  LaundryRoom: number;
  // Add other properties as needed
}

