import React, { useState } from "react";
import api from "./apiClient";

const TestApiClient: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [responseView, setResponseView] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGet = async () => {
    setLoading(true);
    try {
      const dirtyParams = {
        q: keyword,
        category: undefined,
        page: null,
        limit: 2,
      };

      const data = await api.get("/products/search", dirtyParams);
      setResponseView(data);
    } catch (error) {
      setResponseView({ error: "Đã xảy ra lỗi khi gọi GET" });
    } finally {
      setLoading(false);
    }
  };

  const handleTestError401 = async () => {
    setLoading(true);
    try {
      const data = await api.get("/auth/me");
      setResponseView(data);
    } catch (error: any) {
      setResponseView({
        message: "Bị server chặn!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "30px auto",
        fontFamily: "sans-serif",
        color: "#333",
      }}
    >
      <h2 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px" }}>
        Test
      </h2>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #ddd",
          marginBottom: "20px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              fontWeight: "bold",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Nhập từ khóa tìm kiếm
          </label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Ví dụ: phone, laptop..."
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-around",
          }}
        >
          <button
            onClick={handleGet}
            disabled={loading}
            style={{
              padding: "10px 15px",
              backgroundColor: "#0056b3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {loading ? "Đang gửi..." : "Gửi GET & Dọn Params"}
          </button>

          <button
            onClick={handleTestError401}
            disabled={loading}
            style={{
              padding: "10px 15px",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {loading ? "Đang gửi..." : "Gửi GET (Test Lỗi 401)"}
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "20px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      >
        <h4 style={{ marginTop: 0, color: "#333" }}>
          Dữ liệu trả về (Response Data):
        </h4>
        {responseView ? (
          <pre
            style={{
              margin: 0,
              fontSize: "14px",
              overflowX: "auto",
              color: "#d63384",
            }}
          >
            {JSON.stringify(responseView, null, 2)}
          </pre>
        ) : (
          <p style={{ color: "#888", fontStyle: "italic", margin: 0 }}>
            Chưa có dữ liệu. Hãy bấm nút gửi request!
          </p>
        )}
      </div>
    </div>
  );
};

export default TestApiClient;
