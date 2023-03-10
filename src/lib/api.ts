import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),

  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),

  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),

  delete: (url: string) => instance.delete(url).then(responseBody),
};

export default requests;
