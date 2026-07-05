import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Dashboard = () => (
  <div style={{ padding: "20px" }}>
    <h2>Trang chủ</h2>
    <p>Chào mừng bạn đến với Cổng thông tin Sinh viên PTIT.</p>
  </div>
);

const Schedule = () => (
  <div style={{ padding: "20px" }}>
    <h2>Lịch học</h2>
    <p>Hiển thị thời khóa biểu tuần này của sinh viên...</p>
  </div>
);

const Profile = () => (
  <div style={{ padding: "20px" }}>
    <h2>Hồ sơ cá nhân</h2>
    <p>Thông tin cá nhân, ngành học và điểm số.</p>
  </div>
);

const NotFound = () => (
  <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
    <h2>404 - Không tìm thấy nội dung</h2>
    <p>Đường dẫn bạn nhập không tồn tại trên hệ thống.</p>
  </div>
);

const Navbar = () => {
  const navStyle = ({ isActive }: { isActive: boolean }) => ({
    margin: "0 15px",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#ff6b6b" : "#333",
    paddingBottom: isActive ? "5px" : "0",
    borderBottom: isActive ? "2px solid #ff6b6b" : "none",
  });

  return (
    <nav
      style={{
        padding: "20px",
        backgroundColor: "#f4f4f9",
        borderBottom: "1px solid #ddd",
      }}
    >
      <NavLink to="/" style={navStyle}>
        Trang Chủ
      </NavLink>
      <NavLink to="/schedule" style={navStyle}>
        Lịch Học
      </NavLink>
      <NavLink to="/profile" style={navStyle}>
        Hồ Sơ
      </NavLink>
    </nav>
  );
};

export default function StudentPortal() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
