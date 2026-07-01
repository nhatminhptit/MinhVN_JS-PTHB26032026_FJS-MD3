// import React from "react";
import PricingCard from "./PricingCard";

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Bảng Giá Dịch Vụ SaaS</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <PricingCard title="Basic" price={500000} borderColor="#808080" />

        <PricingCard title="Pro" price={1500000} borderColor="#007bff" />

        <PricingCard title="Enterprise" price={null} borderColor="#ffc107" />
      </div>
    </>
  );
};

export default App;
