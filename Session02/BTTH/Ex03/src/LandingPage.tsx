import { useRef } from "react";

export default function LandingPage() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  const isScrollingRef = useRef(false);

  const handleCTAClick = () => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;

    if (emailInputRef.current) {
      emailInputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      setTimeout(() => {
        emailInputRef.current?.focus();
      }, 500);
    }

    isScrollingRef.current = false;
  };

  return (
    <div>
      <section
        style={{ height: "400px", backgroundColor: "#f4f4f9", padding: "40px" }}
      >
        <h2>Chương Trình Đào Tạo - Form Tư Vấn</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Email của bạn:
          </label>
          <input
            type="email"
            ref={emailInputRef}
            placeholder="VD: name@example.com"
            style={{ padding: "10px", width: "300px", fontSize: "16px" }}
          />
          <button
            type="submit"
            style={{ padding: "10px 20px", marginLeft: "10px" }}
          >
            Gửi
          </button>
        </form>
      </section>

      <section
        style={{
          height: "1500px",
          padding: "40px",
          backgroundColor: "#ffffff",
        }}
      >
        <h3>Nội dung chi tiết...</h3>
      </section>

      <section
        style={{
          padding: "40px",
          backgroundColor: "#333",
          textAlign: "center",
        }}
      >
        <button
          onClick={handleCTAClick}
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#ff6b6b",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Đăng ký tư vấn ngay
        </button>
      </section>
    </div>
  );
}
