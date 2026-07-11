import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const CreditCardForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      cccd: "",
      income: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Họ tên không được để trống."),

      cccd: Yup.string()
        .required("CCCD không được để trống.")
        .matches(/^[0-9]{12}$/, "CCCD bắt buộc phải là chuỗi đúng 12 chữ số."),

      income: Yup.number()
        .typeError("Thu nhập bắt buộc phải là số thực, không chứa chữ.")
        .required("Thu nhập hàng tháng không được để trống.")
        .moreThan(5000000, "Thu nhập phải lớn hơn 5.000.000 VNĐ để mở thẻ."),
    }),

    onSubmit: (values) => {
      alert("Mở thẻ thành công! Kiểm tra Console để xem dữ liệu.");
      console.log("Dữ liệu đẩy lên Server:", values);
    },
  });

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Đăng ký Mở thẻ Tín dụng</h2>

      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Họ và tên
          </label>
          <input
            type="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: "100%", padding: "8px" }}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              {formik.errors.fullName}
            </div>
          ) : null}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Căn cước công dân (12 số)
          </label>
          <input
            type="text"
            name="cccd"
            value={formik.values.cccd}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: "100%", padding: "8px" }}
          />
          {formik.touched.cccd && formik.errors.cccd ? (
            <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              {formik.errors.cccd}
            </div>
          ) : null}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Thu nhập hàng tháng (VNĐ)
          </label>
          <input
            type="text"
            name="income"
            value={formik.values.income}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: "100%", padding: "8px" }}
          />
          {formik.touched.income && formik.errors.income ? (
            <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              {formik.errors.income}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#b91c1c",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Gửi Yêu Cầu
        </button>
      </form>
    </div>
  );
};

export default CreditCardForm;
