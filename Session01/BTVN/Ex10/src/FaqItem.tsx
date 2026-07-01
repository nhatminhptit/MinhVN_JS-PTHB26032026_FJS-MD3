interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div
      style={{
        borderBottom: "1px solid #ccc",
        marginBottom: "10px",
        paddingBottom: "10px",
      }}
    >
      <div
        onClick={onClick}
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          color: "#007bff",
        }}
      >
        <span>{question}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div style={{ marginTop: "10px", color: "#555", lineHeight: "1.5" }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
