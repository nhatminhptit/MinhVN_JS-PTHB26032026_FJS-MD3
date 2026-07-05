import { useTheme } from "../contexts/ThemeContext";

export default function MainContent() {
  const { theme } = useTheme();

  return (
    <main
      style={{
        padding: "50px 20px",
        minHeight: "400px",
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#ddd",
      }}
    >
      <h3>Nội dung khóa học</h3>
      <p>
        Chi tiết khóa học...
      </p>
    </main>
  );
}
