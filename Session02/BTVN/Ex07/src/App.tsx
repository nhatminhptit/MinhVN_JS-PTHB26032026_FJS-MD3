import "./App.css";
import useCountdown from "./useCountdown";

const FlashSale = () => {
  const { timeLeft, start, pause, reset } = useCountdown(3600);

  const formatTime = (totalSeconds: number) => {
    const h = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (totalSeconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "2px dashed #ff4d4f",
        borderRadius: "8px",
        marginBottom: "20px",
        backgroundColor: "#fff1f0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#ff4d4f", margin: "0 0 10px 0" }}>
        SĂN SALE CHỚP NHOÁNG
      </h2>
      <h1 style={{ fontSize: "48px", color: "#cf1322", margin: "40px 0" }}>
        {formatTime(timeLeft)}
      </h1>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={start}
          style={{
            padding: "8px 16px",
            background: "#ff4d4f",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Bắt đầu Sale
        </button>
        <button
          onClick={pause}
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Tạm dừng
        </button>
        <button
          onClick={reset}
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Reset lại
        </button>
      </div>

      {timeLeft === 0 && (
        <p style={{ color: "red", fontWeight: "bold" }}>Hết giờ săn sale!!</p>
      )}
    </div>
  );
};

const QuizTest = () => {
  const { timeLeft, start, pause, reset } = useCountdown(900);

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (totalSeconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const isWarning = timeLeft > 0 && timeLeft <= 60;

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #d9d9d9",
        borderRadius: "8px",
        backgroundColor: "#fafafa",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>Đề thi môn: Cấu trúc dữ liệu & Giải thuật</h3>

        <div
          style={{
            padding: "10px 20px",
            backgroundColor: isWarning ? "#fff1f0" : "#f6ffed",
            border: `1px solid ${isWarning ? "#ffa39e" : "#b7eb8f"}`,
            borderRadius: "4px",
            color: isWarning ? "#cf1322" : "#389e0d",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Thời gian còn lại: {formatTime(timeLeft)}
        </div>
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={start}
          style={{
            padding: "8px 16px",
            background: "#1890ff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Bắt đầu làm bài
        </button>
        <button
          onClick={pause}
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Nộp bài sớm (Dừng)
        </button>
        <button
          onClick={reset}
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          Thi lại
        </button>
      </div>

      {timeLeft === 0 && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Hết giờ làm bài! Hệ thống đang tự động nộp bài...
        </p>
      )}
    </div>
  );
};

function App() {
  return (
    <>
      <FlashSale></FlashSale>
      <QuizTest></QuizTest>
    </>
  );
}

export default App;
