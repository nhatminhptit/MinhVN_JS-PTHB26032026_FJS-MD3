import React, { useState } from "react";

interface LoginFormProps {
  setIsLoggedIn: (value: boolean) => void;
}

export default function LoginForm({ setIsLoggedIn }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      username.includes(" ")
    ) {
      setMessage("Vui lòng kiểm tra lại thông tin!");
      return;
    }

    setMessage("");
    console.log("Tên đăng nhập: ", username);
    console.log("Mật khẩu: ", password);
    setIsLoggedIn(true);
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Đăng nhập</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <div>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="username"
          >
            Tên đăng nhập
          </label>
          <input
            style={{ padding: "8px" }}
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="password"
          >
            Mật khẩu
          </label>
          <input
            style={{ padding: "8px" }}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Ẩn" : "Hiện"}
          </button>
        </div>
        {message && (
          <p style={{ color: "red", margin: 0, fontWeight: "bold" }}>
            {message}
          </p>
        )}
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
