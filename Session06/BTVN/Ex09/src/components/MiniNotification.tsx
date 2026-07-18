import { useLazyGetAuthErrorQuery } from "../stores/apis/error.api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MiniNotification = () => {
  const [triggerError, { isFetching }] = useLazyGetAuthErrorQuery();

  return (
    <div style={{ padding: "30px" }}>
      <h2>Mini Global Error Notification</h2>

      <button
        onClick={() => triggerError()}
        disabled={isFetching}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        {isFetching ? "Đang gọi API" : "Gọi API"}
      </button>

      <ToastContainer />
    </div>
  );
};

export default MiniNotification;
