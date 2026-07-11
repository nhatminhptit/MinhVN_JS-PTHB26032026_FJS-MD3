import axios from "axios";

export default function CreateUser() {
  const handleCreateUser = async () => {
    try {
      const newUser = {
        fullName: "Nguyen Van A",
        age: 25,
        gender: "male",
      };

      const response = await axios.post(
        "https://dummyjson.com/users/add",
        newUser,
      );

      const statusCode = response.status;
      const createdUserId = response.data.id;

      console.log(`Mã trạng thái: ${statusCode}`);
      console.log(`ID của user vừa được tạo: ${createdUserId}`);

      if (statusCode >= 200 && statusCode < 300) {
        alert("Tạo thành công!");
      }
    } catch {
      alert("Có lỗi!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tạo tài khoản mới</h2>
      <button
        onClick={handleCreateUser}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        Tạo User
      </button>
    </div>
  );
}
