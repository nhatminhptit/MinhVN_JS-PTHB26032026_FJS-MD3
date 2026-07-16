import axios, { type AxiosRequestConfig, type AxiosResponse, AxiosError } from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com", 
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    const token = "my_token"; 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        console.error(
          "401 Unauthorized: Hết hạn phiên",
        );
        // window.location.href = '/login';
      } else if (status === 500) {
        console.error(
          "500 Internal Error: Lỗi máy chủ",
        );
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Timeout: Máy chủ không phản hồi!");
    }

    return Promise.reject(error);
  },
);

const cleanParams = (params?: Record<string, any>) => {
  if (!params) return {};
  const cleaned: Record<string, any> = {};

  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (value !== undefined && value !== null && value !== "") {
      cleaned[key] = value;
    }
  });

  return cleaned;
};

const api = {
  get: (
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig,
  ) => {
    return instance.get(url, { ...config, params: cleanParams(params) });
  },

  post: (url: string, data?: any, config?: AxiosRequestConfig) => {
    return instance.post(url, data, config);
  },

  put: (url: string, data?: any, config?: AxiosRequestConfig) => {
    return instance.put(url, data, config);
  },

  remove: (url: string, config?: AxiosRequestConfig) => {
    return instance.delete(url, config);
  },
};

export default api;
