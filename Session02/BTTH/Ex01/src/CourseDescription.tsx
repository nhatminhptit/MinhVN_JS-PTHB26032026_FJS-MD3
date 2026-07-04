import { useState } from "react";

export default function CourseDescription({
  description,
}: {
  description: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
    console.log("Trạng thái hiện tại:", isExpanded);
  };

  const isEmpty = !description || description.trim() === "";

  return (
    <div>
      <p>
        {isExpanded
          ? !isEmpty
            ? description
            : "Chưa có mô tả..."
          : "Mô tả ngắn gọn..."}
      </p>
      <button onClick={toggleDescription} disabled={isEmpty}>
        Xem chi tiết
      </button>
    </div>
  );
}
