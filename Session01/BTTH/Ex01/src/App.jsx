import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // Vì trong cú pháp của thực tập sinh không sử dụng cặp ngoặc nhọn {} cho các biến nên mặc định được hiểu là các chuỗi tĩnh  
  function UserProfile(props) {
    return (
      <div className="card">
        <h1>Tên nhân viên: {props.name}</h1>
        <p>Chức vụ: {props.role}</p>
      </div>
    );
  }

  return (
    <>
      <UserProfile name="Nguyễn Văn A" role="Lập trình viên" />
    </>
  );
}

export default App;
