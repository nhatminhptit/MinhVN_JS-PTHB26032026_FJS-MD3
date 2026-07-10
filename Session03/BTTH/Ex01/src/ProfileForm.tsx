import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  age: string;
}

export default function ProfileForm() {
  const [formState, setFormState] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    age: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Đã cập nhật: ${JSON.stringify(formState, null, 2)}`);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Cập nhật hồ sơ</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          name="fullName"
          value={formState.fullName}
          onChange={handleChange}
          placeholder="Họ và tên"
        />

        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="tel"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
          placeholder="Số điện thoại"
        />

        <input
          type="text"
          name="address"
          value={formState.address}
          onChange={handleChange}
          placeholder="Địa chỉ"
        />

        <input
          type="number"
          name="age"
          value={formState.age}
          onChange={handleChange}
          placeholder="Tuổi"
        />

        <button
          type="submit"
          style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}
        >
          Lưu hồ sơ
        </button>
      </form>
    </div>
  );
}
