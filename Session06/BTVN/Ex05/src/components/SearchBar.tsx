import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setKeyword } from "../stores/slices/search.slice";
import { useSearchProductsQuery } from "../stores/apis/product.api";

const SearchBar = () => {
  const dispatch = useDispatch<any>();

  const [inputValue, setInputValue] = useState("");

  const keyword = useSelector((state: any) => state.searchStore.keyword);

  const { data, isFetching } = useSearchProductsQuery(keyword, {
    skip: keyword.trim() === "",
  });

  const handleSearch = () => {
    dispatch(setKeyword(inputValue));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Tìm kiếm Sản phẩm</h2>

      <div>
        <input
          type="text"
          placeholder="Nhập từ khóa (vd: laptop)..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: "8px", width: "200px" }}
        />
        <button
          onClick={handleSearch}
          style={{ padding: "8px 12px", marginLeft: "10px", cursor: "pointer" }}
        >
          Tìm kiếm
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {isFetching && <p style={{ color: "blue" }}>Đang tìm kiếm...</p>}

        {keyword.trim() === "" && keyword.length > 0 && (
          <p style={{ color: "red" }}>
            Vui lòng nhập từ khóa hợp lệ.
          </p>
        )}

        <ul>
          {data?.products?.map((product: any) => (
            <li key={product.id} style={{ marginBottom: "10px" }}>
              <strong>{product.title}</strong>
            </li>
          ))}
        </ul>

        {data?.products?.length === 0 && !isFetching && (
          <p>Không tìm thấy sản phẩm nào khớp với "{keyword}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
