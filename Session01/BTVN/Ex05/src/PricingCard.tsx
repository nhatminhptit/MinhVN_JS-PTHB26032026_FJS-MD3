interface PricingCardProps {
  title: string;
  price: number | null;
  borderColor: string;
}

const PricingCard = (props: PricingCardProps) => {
  const displayPrice =
    props.price === 0 || props.price === null
      ? "Liên hệ"
      : `${props.price.toLocaleString()} VNĐ`;

  return (
    <div
      style={{
        border: `3px solid ${props.borderColor}`,
        borderRadius: "8px",
        padding: "20px",
        width: "250px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h2>{props.title}</h2>
      <p style={{ fontSize: "18px", fontWeight: "bold", flexGrow: "1" }}>
        Giá: {displayPrice}
      </p>
      <button
        style={{
          backgroundColor: props.borderColor,
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Đăng ký ngay
      </button>
    </div>
  );
};

export default PricingCard;
