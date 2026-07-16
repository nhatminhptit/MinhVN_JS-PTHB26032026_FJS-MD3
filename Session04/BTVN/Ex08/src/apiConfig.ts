import axios, { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {

    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        console.error(
          "Phiên đăng nhập đã hết hạn.",
        );

        alert("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại!"); 
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
