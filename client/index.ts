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
}
