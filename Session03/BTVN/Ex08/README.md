## Báo cáo Hiệu năng: Formik vs React Hook Form

Dưới đây là bảng so sánh kiểm tra hiệu năng thực tế trên 2 thư viện quản lý Form. Test: Gõ 10 ký tự liên tiếp vào 1 trường input.

| Tiêu chí                                | Formik (Controlled Component)                                                         | React Hook Form (Uncontrolled Component)                                          |
| :-------------------------------------- | :------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------- |
| **Cơ chế quản lý dữ liệu**              | Trói buộc dữ liệu trực tiếp vào biến State của React.                                 | Giao phó dữ liệu cho thẻ HTML (DOM) tự quản lý ngầm qua ref.                    |
| **Số lần Render khi tải trang**         | 1 lần                                                                                 | 2 lần (Nhịp 1 vẽ HTML, nhịp 2 đồng bộ Ref)                                        |
| **Render khi gõ 1 ký tự**               | **2 lần** (1 lần cập nhật State value, 1 lần do tiến trình Validate ngầm kích hoạt) | **0 lần** (Lưu ngầm trong DOM, không đánh thức React Re-render)                |
| **Tổng Render khi gõ 10 ký tự**         | **Khoảng 21 lần** (1 khởi tạo + 20 lần khi gõ)                                        | **Đúng 2 lần** (Chỉ ở bước khởi tạo, khi gõ không tăng thêm)                      |
| **Hiệu năng với form lớn (100+ input)** | Giật lag nặng nề do cây Component phải vẽ lại liên tục với mỗi thao tác phím.         | Cực kỳ mượt mà, tối ưu bộ nhớ tuyệt đối do loại bỏ được việc Re-render thừa thãi. |
| **Kết luận kiến trúc**                  | Chỉ nên dùng cho form nhỏ lẻ (Login, Contact).                                        | **Giải pháp bắt buộc** cho dự án ERP, Admin Dashboard có cấu trúc phức tạp.       |
