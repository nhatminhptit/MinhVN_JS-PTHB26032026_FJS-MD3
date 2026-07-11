import { useState } from "react";
import { Api } from "./api/api";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    setErrorMessage("");

    try {
      const response = await Api.auth.login({ username, password });

      alert("Đăng nhập thành công! Chào " + response.data.firstName);
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(
          `Sai thông tin đăng nhập! (Mã lỗi: ${error.response.status})`,
        );
      } else if (error.request) {
        setErrorMessage(
          "Mất kết nối tới hệ thống. Vui lòng kiểm tra lại đường truyền mạng!",
        );
      } else {
        setErrorMessage(`Hệ thống gặp sự cố nội bộ: ${error.message}`);
      }
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <h2>Đăng nhập hệ thống</h2>

      {errorMessage && (
        <div style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</div>
      )}

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Tên đăng nhập..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          placeholder="Mật khẩu..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}
