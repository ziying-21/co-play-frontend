import axios, { AxiosResponse } from "axios";

const network = axios.create({
  baseURL: "",
});

export class NetworkError extends Error {
  response: AxiosResponse<any, any>;
  constructor(_response: AxiosResponse<any, any>) {
    super();
    this.response = _response;
  }
}

export const request = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
) => {
  const response = await network.request({ method, url, data }).catch((err) => {
    /**
     * @note token expired 表明token已过期，需要跳转到登录界面
     */
    throw new NetworkError(err.response);
  });
  if (response?.data.code === 0) {
    return { ...response };
  } else {
    throw new NetworkError(response?.data.info);
  }
};