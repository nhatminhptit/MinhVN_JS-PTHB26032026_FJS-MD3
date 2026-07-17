import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, changePage } from "../stores/slices/post.slice";

const PostList = () => {
  const dispatch = useDispatch<any>();

  const { items, currentPage, totalPages, isLoading, error } = useSelector(
    (state: any) => state.postStore,
  );

  useEffect(() => {
    dispatch(fetchPosts(currentPage));
  }, [dispatch, currentPage]);

  const handleNextPage = () => {
    dispatch(changePage(currentPage + 1));
  };

  const handlePrevPage = () => {
    dispatch(changePage(currentPage - 1));
  };

  if (error) {
    return <div style={{ color: "red", padding: "20px" }}>Lỗi: {error}</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách bài viết</h2>

      {isLoading && <p>Đang tải dữ liệu...</p>}

      <ul>
        {items.map((post: any) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            {post.title}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1 || isLoading}
          style={{ marginRight: "10px", padding: "5px 10px" }}
        >
          Trang trước
        </button>

        <span style={{ marginRight: "10px" }}>
          Trang {currentPage} / {totalPages || 1}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || isLoading}
          style={{ padding: "5px 10px" }}
        >
          Trang sau
        </button>
      </div>
    </div>
  );
};

export default PostList;
