import { useNavigate, useLocation } from "react-router-dom";

interface LoginProps {
  setIsAuthenticated: (status: boolean) => void;
}

export default function Login({ setIsAuthenticated }: LoginProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate(from, { replace: true });
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "60px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Đăng nhập</h2>

      <div
        style={{
          backgroundColor: "#fff3cd",
          color: "#856404",
          padding: "15px",
          borderRadius: "4px",
          marginBottom: "25px",
          fontSize: "14px",
        }}
      >
        Vui lòng xác thực tài khoản để truy cập vào nội dung bên trong.
      </div>

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "12px",
          background: "#0056b3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Xác nhận đăng nhập
      </button>
    </div>
  );
}
