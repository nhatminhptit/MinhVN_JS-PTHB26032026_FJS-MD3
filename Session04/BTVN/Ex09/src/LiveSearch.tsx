import React, { useState, useEffect } from "react";
import axios from "axios";

const LiveSearch: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!keyword.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    const controller = new AbortController();

    const fetchSearchResults = async () => {

      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${keyword}`,
          { signal: controller.signal },
        );

        setResults(response.data.products);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(
            `Hủy request tìm kiếm cho từ khóa: "${keyword}" do gõ quá nhanh.`,
          );
        } else {
          console.error("Lỗi mạng hoặc sập server:", error);
          setLoading(false);
        }
      }
    };

    fetchSearchResults();

    return () => {
      controller.abort(); 
    };
  }, [keyword]);

  return (
    <div
      style={{ maxWidth: "500px", margin: "30px", fontFamily: "sans-serif" }}
    >
      <h2>Tìm kiếm</h2>

      <input
        type="text"
        placeholder="Gõ tên sản phẩm"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "15px",
        }}
      />

      {loading && <p style={{ color: "blue" }}>Đang tìm kiếm...</p>}

      <ul style={{ paddingLeft: "20px" }}>
        {results.map((item) => (
          <li key={item.id} style={{ marginBottom: "8px" }}>
            {item.title} - <strong>${item.price}</strong>
          </li>
        ))}
      </ul>

      {!loading && keyword && results.length === 0 && (
        <p style={{ color: "red" }}>Không tìm thấy sản phẩm nào.</p>
      )}
    </div>
  );
};

export default LiveSearch;
