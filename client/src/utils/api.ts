import axios from "axios";
import { axiosProps } from "../..";

const axiosInstance: axiosProps = {
  baseURL: import.meta.env.VITE_API_KEY || import.meta.env.VITE_LOCAL_KEY,
  headers: {
    "Content-Type": "applications/json",
  },
};

export default axios.create(axiosInstance);
