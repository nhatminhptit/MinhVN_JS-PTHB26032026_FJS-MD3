import ThemeProvider from "./contexts/ThemeContext";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
