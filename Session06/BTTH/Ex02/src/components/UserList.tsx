import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { type StoreType } from "../stores/index"; // Nhớ trỏ đúng đường dẫn file index.ts
import { fetchUsers } from "../stores/slices/user.slice";

const UserList: React.FC = () => {
  const dispatch = useDispatch<any>();

  const { data, isLoading, error } = useSelector(
    (state: StoreType) => state.userStore,
  );

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  if (isLoading) {
    return <h3 style={{ color: "blue" }}>Đang gọi API</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>Lỗi: {error}</h3>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Danh Sách Khách Hàng</h2>

      <button
        onClick={() => dispatch(fetchUsers())}
        style={{ padding: "8px 12px", marginBottom: "20px", cursor: "pointer" }}
      >
        Tải lại danh sách
      </button>

      <ul style={{ listStyleType: "square" }}>
        {data && data.length > 0 ? (
          data.map((user: any) => (
            <li key={user.id} style={{ marginBottom: "10px" }}>
              <strong>
                {user.firstName} {user.lastName}
              </strong>{" "}
              - {user.email}
            </li>
          ))
        ) : (
          <p>Không có khách nào cả.</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
