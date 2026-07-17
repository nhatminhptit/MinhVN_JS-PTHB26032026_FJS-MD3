import React from "react";
import { useGetProductsQuery } from "../stores/apis/product.api";

const ProductList: React.FC = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <h3>Đang tải danh sách sản phẩm...</h3>;
  }

  if (isError) {
    return (
      <h3 style={{ color: "red" }}>Lỗi hệ thống: {JSON.stringify(error)}</h3>
    );
  }

  const products = data?.products || [];
  if (products.length === 0) {
    return <h3>Chưa có sản phẩm nào.</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh Sách Sản Phẩm</h2>
      <ul>
        {products.map((product: any) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
