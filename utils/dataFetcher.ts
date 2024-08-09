import axios from "axios";
import { getValueFor } from "./secureStore";

const baseURL = process.env.EXPO_PUBLIC_BASE_URL as string;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getValueFor("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const DataFetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);
