import { useState } from "react";
import FaqItem from "./FaqItem";

const FaqList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "ReactJS là gì?",
      a: "Là một thư viện JavaScript dùng để xây dựng giao diện người dùng.",
    },
    {
      q: "Virtual DOM hoạt động thế nào?",
      a: "Nó tạo một bản sao DOM trong bộ nhớ để tối ưu việc cập nhật UI.",
    },
    {
      q: "Props khác gì State?",
      a: "Props là dữ liệu truyền từ ngoài vào, State là dữ liệu tự quản lý bên trong.",
    },
    {
      q: "Lifting State Up là gì?",
      a: "Là việc chuyển State từ Component Con lên Component Cha chung gần nhất.",
    },
    {
      q: "Học React có khó không?",
      a: "Lúc đầu hơi ngợp do tư duy Component, nhưng hiểu bản chất sẽ rất nhàn.",
    },
  ];

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        CÂU HỎI THƯỜNG GẶP (FAQ)
      </h2>

      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.q}
          answer={faq.a}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FaqList;
