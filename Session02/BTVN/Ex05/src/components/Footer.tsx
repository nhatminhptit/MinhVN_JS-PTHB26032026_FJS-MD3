import { useTheme } from "../contexts/ThemeContext";

export default function Footer() {
    const { theme } = useTheme();

  return (
    <footer
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: theme === "light" ? "#ddd" : "#111",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>© 2026 Bản quyền thuộc về Nền tảng học tập</p>
    </footer>
  );
}
