import React, { useState, useMemo, useCallback } from "react";

type Student = {
  id: number;
  name: string;
  classCode: string;
};

const MOCK_DATA: Array<Student> = [];
for (let i = 0; i < 5000; i++) {
  MOCK_DATA.push({
    id: i + 1,
    name: `Học viên thứ ${i + 1}`,
    classCode: `LỚP-${Math.floor(Math.random() * 100) + 1}`,
  });
}

const ITEMS_PER_PAGE = 50;

export default function StudentDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isHeaderChecked, setIsHeaderChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  }, []);

  const handleToggle = useCallback(() => {
    setIsHeaderChecked((prev) => !prev);
  }, []);

  const filtered = useMemo(() => {
    if (!searchTerm.trim()) return MOCK_DATA;

    const term = searchTerm.toLowerCase();
    return MOCK_DATA.filter(
      (s) =>
        s.name.toLowerCase().includes(term) ||
        s.classCode.toLowerCase().includes(term),
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "30px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Quản lý Học viên</h2>

      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Nhập tên hoặc mã lớp..."
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleToggle}
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: isHeaderChecked ? "#d9f7be" : "#f5f5f5",
          }}
        >
          {isHeaderChecked ? "Đã kiểm tra" : "Đánh dấu"}
        </button>
      </div>

      <table
        style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
      >
        <thead style={{ backgroundColor: "#fafafa" }}>
          <tr>
            <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
              ID
            </th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
              Họ và tên
            </th>
            <th style={{ padding: "12px", borderBottom: "2px solid #ddd" }}>
              Mã lớp
            </th>
          </tr>
        </thead>
        <tbody>
          {paginated.length === 0 ? (
            <tr>
              <td colSpan={3} style={{ padding: "30px", textAlign: "center" }}>
                Không tìm thấy kết quả.
              </td>
            </tr>
          ) : (
            paginated.map((s) => (
              <tr key={s.id}>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  #{s.id}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  {s.name}
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  {s.classCode}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {totalPages > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            style={{
              padding: "6px 12px",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            Trang trước
          </button>

          <span style={{ fontSize: "14px" }}>
            Trang {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            style={{
              padding: "6px 12px",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            Trang sau
          </button>
        </div>
      )}
    </div>
  );
}
