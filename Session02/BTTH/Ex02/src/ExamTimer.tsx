import { useEffect, useState } from "react";

export default function ExamTimer() {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft]);

  return <div>Thời gian thi còn lại: {timeLeft} giây</div>;
}
