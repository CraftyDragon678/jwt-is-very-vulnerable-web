import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { apiResolver } from 'next/dist/server/api-utils';
import api from './api';

class FetchError extends Error {
  constructor(
    public statusText: string,
    public response: AxiosResponse<any>,
    public data: any,
  ) {
    super();
  }
}

export default async function fetchJson(
  url: string,
  config?: AxiosRequestConfig,
  method: Method = 'get',
) {
  try {
    const response = await api.request({
      url,
      method,
      ...config,
    });
    if (response.status >= 200 && response.status < 300) return response.data;
    const error = new FetchError(response.statusText, response, response.data);
    throw error;
  } catch (error) {
    if (error instanceof FetchError && !error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
}
