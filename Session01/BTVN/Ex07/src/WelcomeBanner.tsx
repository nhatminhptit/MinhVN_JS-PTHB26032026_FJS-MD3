import { useState } from "react";
import LoginForm from "./LoginForm";

const WelcomeBanner = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Chào mừng!</h2>
          <button
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setIsLoggedIn(false)}
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default WelcomeBanner;
