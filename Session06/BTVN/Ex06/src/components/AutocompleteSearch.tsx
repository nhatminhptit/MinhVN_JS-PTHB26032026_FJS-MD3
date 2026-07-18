import React, { useState, useEffect } from "react";
import { useLazySearchProductsQuery } from "../stores/apis/product.api";

const AutocompleteSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const [trigger, { data, isFetching }] = useLazySearchProductsQuery();

  useEffect(() => {

    if (inputValue.trim() === "") return;

    const apiRequest = trigger(inputValue);

    return () => {
      apiRequest.abort();
    };
  }, [inputValue, trigger]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tìm kiếm sản phẩm (RTK Query)</h2>

      <input
        type="text"
        placeholder="Gõ 'Macbook' thật nhanh"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />

      <div style={{ marginTop: "20px" }}>
        {isFetching && (
          <p style={{ color: "blue" }}>Đang truy xuất dữ liệu</p>
        )}

        <ul>
          {data?.products?.map((item: any) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>

        {data?.products?.length === 0 && !isFetching && inputValue && (
          <p style={{ color: "red" }}>
            Không tìm thấy kết quả cho "{inputValue}".
          </p>
        )}
      </div>
    </div>
  );
};

export default AutocompleteSearch;
