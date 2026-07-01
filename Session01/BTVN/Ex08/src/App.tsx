import { useState, useEffect } from "react";
import ScoreBoard from "./ScoreBoard";

const App = () => {
  const [score, setScore] = useState<number>(85);

  useEffect(() => {
    const syncTimer = setInterval(() => {
      const fetchedScore = Math.random() > 0.5 ? 85 : 90;
      setScore(fetchedScore);
    }, 1000);

    return () => clearInterval(syncTimer);
  }, []);

  console.log("Điểm hiện tại:", score);

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333", marginTop: 0 }}>
          Hệ Thống Quản Lý Điểm Số
        </h2>
        <ScoreBoard score={score} />
      </div>
    </div>
  );
};

export default App;
