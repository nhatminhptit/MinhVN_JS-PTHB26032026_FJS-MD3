import { useState } from "react";
import axios from "axios";
import { AppApi } from "./api/api";

function App() {
  const [log, setLog] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const executeApi = async (
    serviceName: string,
    apiCall: () => Promise<any>,
  ) => {
    setLoading(true);
    setLog(`Đang gửi yêu cầu đến ${serviceName}...`);

    try {
      await apiCall();
      setLog(`Lấy dữ liệu thành công từ ${serviceName}.`);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          setLog(`Lỗi: Dịch vụ ${serviceName} bị Timeout!`);
        } else if (error.response) {
          setLog(`Lỗi từ Server: Mã ${error.response.status}`);
        } else if (error.request) {
          setLog(`Lỗi mạng: Không thể kết nối tới Server.`);
        } else {
          setLog(`Lỗi Axios khác: ${error.message}`);
        }
      } else {
        setLog(`Lỗi hệ thống nội bộ!`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Bảng điều khiển hệ thống</h2>

      <div>
        <button
          disabled={loading}
          onClick={() => executeApi("Kho hàng", AppApi.inventory.getProducts)}
        >
          Kiểm tra kho hàng
        </button>

        <button
          disabled={loading}
          onClick={() =>
            executeApi("Thanh toán", AppApi.payment.getTransactions)
          }
        >
          Lịch sử thanh toán
        </button>

        <button
          disabled={loading}
          onClick={() => executeApi("Người dùng", AppApi.user.getProfile)}
        >
          Truy xuất người dùng
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        <strong>Trạng thái: </strong>
        <span>
          {log || "Hệ thống đã sẵn sàng. Chưa có yêu cầu nào được gửi đi."}
        </span>
      </div>
    </div>
  );
}

export default App;
