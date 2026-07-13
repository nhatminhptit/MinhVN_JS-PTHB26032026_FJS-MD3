import React, { useEffect, useState } from "react";
import axios from "axios";

interface IContact {
  id: string;
  name: string;
  phone: string;
}

const API_URL = "http://localhost:3004/contacts";

const ContactManager: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [testFakeId, setTestFakeId] = useState("999");

  const fetchContacts = async () => {
    try {
      const response = await axios.get<IContact[]>(API_URL);
      setContacts(response.data);
      setErrorMsg("");
    } catch (error) {
      console.error("Lỗi lấy danh sách:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleAddContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      await axios.post(API_URL, { name, phone });

      setName("");
      setPhone("");
      fetchContacts();
    } catch (error) {
      console.error("Lỗi thêm danh bạ:", error);
    }
  };

  const handleDeleteContact = async (id: string) => {
    try {
      setErrorMsg("");
      await axios.delete(`${API_URL}/${id}`);
      fetchContacts();
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        setErrorMsg(
          `Lỗi ${error.response.status}: Không tồn tại liên hệ có ID là "${id}" trên hệ thống!`,
        );
      } else {
        setErrorMsg("Đã xảy ra lỗi không xác định.");
      }
    }
  };

  return (
    <div
      style={{ maxWidth: "600px", margin: "20px", fontFamily: "sans-serif" }}
    >
      <h2>Quản Lý Danh Bạ (Mock API)</h2>

      <form onSubmit={handleAddContact} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Tên liên hệ"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Thêm</button>
      </form>

      {errorMsg && (
        <div style={{ color: "red", fontWeight: "bold", marginBottom: "15px" }}>
          {errorMsg}
        </div>
      )}

      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: "0 0 10px 0" }}>Test:</p>
        <input
          type="text"
          value={testFakeId}
          onChange={(e) => setTestFakeId(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button type="button" onClick={() => handleDeleteContact(testFakeId)}>
          DELETE contact có ID này
        </button>
      </div>

      <h4>Danh sách liên hệ:</h4>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} style={{ marginBottom: "10px" }}>
            {contact.name} - {contact.phone} (ID: {contact.id})
            <button
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
              style={{ marginLeft: "10px" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactManager;
