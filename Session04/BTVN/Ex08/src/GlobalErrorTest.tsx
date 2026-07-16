import React, { useState } from "react";
import apiClient from "./apiConfig";

const GlobalErrorTest: React.FC = () => {
  const [data, setData] = useState<any>(null);

  const handleSuccessCall = async () => {
    try {
      const res = await apiClient.get("/products/1");
      setData(res.data);
      alert("Gọi API thành công! Dữ liệu đã về Component.");
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  const handleFailCall = async () => {
    try {

      const res = await apiClient.get("/auth/me");
      setData(res.data);
    } catch (error) {

      console.log(
        "Dòng code này có thể chạy",
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        fontFamily: "sans-serif",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Test Lỗi</h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={handleSuccessCall}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Gọi API Thành Công
        </button>

        <button
          onClick={handleFailCall}
          style={{
            padding: "10px 20px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Gọi API Thất Bại
        </button>
      </div>

      <div
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          borderRadius: "4px",
          minHeight: "100px",
        }}
      >
        <h4>Dữ liệu trả về:</h4>
        {data ? (
          <pre style={{ fontSize: "14px", color: "#333" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <p style={{ fontStyle: "italic", color: "#6c757d" }}>
            Chưa có dữ liệu.
          </p>
        )}
      </div>
    </div>
  );
};

export default GlobalErrorTest;
