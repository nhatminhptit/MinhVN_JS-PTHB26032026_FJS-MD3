import React from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/users";

const UserProfileUpdate: React.FC = () => {
  const userId = "1";

  const handlePutUpdate = async () => {
    try {
      const fullPayload = {
        fullName: "Nguyễn Văn A (PUT)",
        phone: "0111222333",
        email: "nva.cntt@example.com",
        address: "Hà Nội",
        dob: "2005-10-15",
        gender: "Nam",
        department: "Công nghệ Thông tin",
        position: "Thực tập sinh",
        salary: 5000000,
      };
      const response = await axios.put(`${API_URL}/${userId}`, fullPayload);
      alert("PUT thành công!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePatchUpdate = async () => {
    try {
      const patchPayload = {
        fullName: "Nguyễn Văn A (PATCH)",
        phone: "0999888777",
      };
      const response = await axios.patch(`${API_URL}/${userId}`, patchPayload);
      alert("PATCH thành công!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Test</h2>
      <button
        onClick={handlePutUpdate}
        style={{ marginRight: "10px", padding: "8px" }}
      >
        PUT
      </button>
      <button onClick={handlePatchUpdate} style={{ padding: "8px" }}>
        PATCH
      </button>
    </div>
  );
};

export default UserProfileUpdate;
