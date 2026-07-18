import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetProductsQuery,
  useCreateOrderMutation,
} from "../stores/apis/ecommerceApi";
import { addToCart, clearCart } from "../stores/slices/cartSlice";
import { setCheckoutInfo } from "../stores/slices/checkoutSlice";
import type { StoreType } from "../stores";

const MiniEcommerce = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductsQuery();
  const [createOrder, { isLoading: isSubmitting }] = useCreateOrderMutation();

  const cartItems = useSelector((state: StoreType) => state.cart.items);
  const checkoutInfo = useSelector((state: StoreType) => state.checkout);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    const orderPayload = {
      items: cartItems,
      shippingAddress: checkoutInfo.address,
      phone: checkoutInfo.phone,
      userId: 1,
    };

    try {
      await createOrder(orderPayload).unwrap();
      dispatch(clearCart());
      dispatch(setCheckoutInfo({ address: "", phone: "" }));
      alert("Đặt hàng thành công! Giỏ hàng đã được làm trống.");
    } catch (error) {
      alert("Đặt hàng thất bại. Vui lòng thử lại.");
    }
  };

  if (isLoading) return <p>Đang tải sản phẩm</p>;

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ flex: 1 }}>
        <h2>Danh sách sản phẩm</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
          }}
        >
          {data?.products?.slice(0, 4).map((product: any) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h4 style={{ margin: "0 0 10px 0" }}>{product.title}</h4>
              <button
                onClick={() => handleAddToCart(product)}
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ flex: 1, borderLeft: "2px solid #eee", paddingLeft: "40px" }}
      >
        <h2>Giỏ hàng & Thanh toán</h2>
        <p>
          Tổng số lượng: <strong>{cartItems.length}</strong> sản phẩm
        </p>

        <form
          onSubmit={handleCheckout}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Địa chỉ giao hàng"
            required
            value={checkoutInfo.address}
            onChange={(e) =>
              dispatch(setCheckoutInfo({ address: e.target.value }))
            }
            style={{ padding: "10px" }}
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            required
            value={checkoutInfo.phone}
            onChange={(e) =>
              dispatch(setCheckoutInfo({ phone: e.target.value }))
            }
            style={{ padding: "10px" }}
          />
          <button
            type="submit"
            disabled={isSubmitting || cartItems.length === 0}
            style={{
              padding: "12px",
              backgroundColor:
                isSubmitting || cartItems.length === 0 ? "#ccc" : "#28a745",
              color: "white",
              border: "none",
              cursor:
                isSubmitting || cartItems.length === 0
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            {isSubmitting ? "Đang xử lý thanh toán..." : "Xác nhận Thanh toán"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MiniEcommerce;
