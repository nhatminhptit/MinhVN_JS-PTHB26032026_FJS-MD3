import React, { useEffect, useState } from "react";
import { Api } from "./api/api";

const ProductSearch: React.FC = () => {
  const [keyword, setKeyword] = useState<string>("Kiwi");
  const [page, setPage] = useState<number>(1);

  const handleSearch = () => {
    Api.product
      .search({ search: keyword, page: page })
      .then((res) => {
        console.log("Dữ liệu nhận được:", res.data);
      })
      .catch((err) => {
        console.error("Lỗi 400 Bad Request đã được khắc phục:", err);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Tìm kiếm sản phẩm</h2>
      <button
        onClick={handleSearch}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        Kích hoạt tìm kiếm
      </button>
    </div>
  );
};

export default ProductSearch;
