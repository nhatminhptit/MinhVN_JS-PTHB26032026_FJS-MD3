import React from "react";
import apiClient from "./apiConfig";

const TestInterceptor: React.FC = () => {
  const handleFetchData = async () => {
    try {
      const response = await apiClient.get("/products/20");
      console.log("Dữ liệu tải về từ server:", response.data);
    } catch (error) {
      console.error("Lỗi gọi API:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Test Axios Interceptor</h2>
      <button
        onClick={handleFetchData}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        Gửi Request
      </button>
    </div>
  );
};

export default TestInterceptor;
