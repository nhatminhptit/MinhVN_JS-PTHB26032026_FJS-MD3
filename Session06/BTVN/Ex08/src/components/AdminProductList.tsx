import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../stores/apis/adminProduct.api";

const AdminProductList = () => {
  const { data, isLoading } = useGetProductsQuery();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const handleDelete = async (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      try {
        await deleteProduct(id).unwrap();
        alert("Xóa thành công!");
      } catch (error) {
        alert("Xóa thất bại, vui lòng kiểm tra lại!");
      }
    }
  };

  if (isLoading) return <p>Đang tải dữ liệu</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Quản lý Sản phẩm</h2>

      <table
        border={1}
        cellPadding={10}
        style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px" }}
      >
        <thead style={{ background: "#f4f4f4" }}>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.slice(0, 5).map((product: any) => (
            <tr key={product.id}>
              <td style={{ textAlign: "center" }}>{product.id}</td>
              <td>{product.title}</td>
              <td style={{ textAlign: "center" }}>
                <button
                  onClick={() => handleDelete(product.id)}
                  disabled={isDeleting}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "6px 12px",
                    border: "none",
                    cursor: isDeleting ? "not-allowed" : "pointer",
                  }}
                >
                  {isDeleting ? "Đang xóa..." : "Xóa"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;
