import axios from "axios";
import { getSession, signOut } from "next-auth/react";

export const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/v1.0.1/`;
const api = axios.create({ baseURL });
api.interceptors.request.use(
  async (config) => {
    try {
      const session = await getSession();

      if (session?.user?.accessToken) {
        config.headers["x-access-token"] = session?.user?.accessToken;
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    if (response.data.errorCode === 601) {
      signOut();
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
