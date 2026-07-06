import React from "react";
import { useSearchParams } from "react-router-dom";

export default function CourseList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentKeyword = searchParams.get("keyword") || "";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const newParams = new URLSearchParams(searchParams);

    if (value.trim() === "") newParams.delete("keyword");
    else newParams.set("keyword", value);

    setSearchParams(newParams);
  };

  return (
    <div>
      <h2>Danh sách Khóa học</h2>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Tìm kiếm:
        </label>
        <input
          type="text"
          value={currentKeyword}
          onChange={handleSearchChange}
          placeholder="Nhập tên khóa học..."
          style={{
            padding: "8px",
            width: "300px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div
        style={{
          padding: "15px",
          backgroundColor: "#f9f9f9",
          border: "1px dashed #aaa",
        }}
      >
        <p>
          <strong>Từ khóa đang lọc:</strong>{" "}
          {currentKeyword ? currentKeyword : <em>Chưa nhập từ khóa</em>}
        </p>
      </div>
    </div>
  );
}
