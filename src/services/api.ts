import { BASE_URL, TIMEOUT_SERVER } from "./../consts";
import axios, { AxiosInstance } from "axios";

export const createApi = (): AxiosInstance => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT_SERVER,
  });
};
