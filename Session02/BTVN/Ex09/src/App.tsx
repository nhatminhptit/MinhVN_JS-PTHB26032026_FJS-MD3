import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import VirtualClassroom from "./components/VirtualClassroom";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 30px",
            backgroundColor: "#f8f9fa",
            borderBottom: "1px solid #e9ecef",
          }}
        >
          <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              Trang chủ
            </Link>
            <Link
              to="/virtual-class"
              style={{ textDecoration: "none", color: "#333" }}
            >
              Phòng học
            </Link>
          </nav>

          {isAuthenticated ? (
            <button
              onClick={() => setIsAuthenticated(false)}
              style={{
                padding: "6px 15px",
                background: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Đăng xuất
            </button>
          ) : (
            <span
              style={{
                color: "#6c757d",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Chưa đăng nhập
            </span>
          )}
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div style={{ padding: "40px", textAlign: "center" }}>
                  <h3>Trang chủ hệ thống</h3>
                </div>
              }
            />
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />

            <Route
              element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/virtual-class" element={<VirtualClassroom />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
