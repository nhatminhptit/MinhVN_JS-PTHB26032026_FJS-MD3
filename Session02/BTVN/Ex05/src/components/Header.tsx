import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2 style={{ color: theme === "light" ? "#000" : "#fff" }}>
        Logo Nền Tảng Học Tập
      </h2>
      <button
        onClick={toggleTheme}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Đổi sang chế độ {theme === "light" ? "Tối" : "Sáng"}
      </button>
    </header>
  );
}
