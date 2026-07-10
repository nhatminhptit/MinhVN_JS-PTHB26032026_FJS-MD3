import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EWalletSecurityForm = () => {
  return (
    <Formik
      initialValues={{
        newPassword: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        newPassword: Yup.string()
          .required("Mật khẩu cấp 2 là bắt buộc!")
          .min(6, "Mật khẩu phải có tối thiểu 6 kí tự"),
        confirmPassword: Yup.string()
          .required("Vui lòng xác nhận mật khẩu!")
          .oneOf([Yup.ref("newPassword")], "Mật khẩu xác nhận không khớp"),
      })}
      onSubmit={(values) => {
        console.log("Dữ liệu hợp lệ chuẩn bị gửi đi:", values);
        alert("Đã tạo mật khẩu cấp 2 thành công.");
      }}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "300px",
          margin: "30px auto",
        }}
      >
        <h2>Tạo mật khẩu cấp 2</h2>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Bảo mật giao dịch ví điện tử của bạn
        </p>
        <Field
          name="newPassword"
          type="password"
          placeholder="Nhập mật khẩu cấp 2"
          style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
        />
        <ErrorMessage name="newPassword">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <Field
          name="confirmPassword"
          type="password"
          placeholder="Xác nhận lại mật khẩu"
          style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
        />
        <ErrorMessage name="confirmPassword">
          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
        </ErrorMessage>

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Xác nhận tạo mật khẩu
        </button>
      </Form>
    </Formik>
  );
};

export default EWalletSecurityForm;

// import { useFormik } from "formik";
// import React from "react";
// import * as Yup from "yup";

// interface Level2PasswordForm {
//   newPassword: string;
//   confirmPassword: string;
// }

// const PasswordSchema = Yup.object({
//   newPassword: Yup.string()
//     .required("Mật khẩu cấp 2 là bắt buộc!")
//     .min(6, "Mật khẩu phải có tối thiểu 6 kí tự"),
//   confirmPassword: Yup.string()
//     .required("Vui lòng xác nhận mật khẩu!")
//     .oneOf([Yup.ref("newPassword")], "Mật khẩu xác nhận không khớp"),
// });

// export default function EWalletSecurityForm() {
//   const formik = useFormik({
//     initialValues: {
//       newPassword: "",
//       confirmPassword: "",
//     },
//     validationSchema: PasswordSchema,
//     onSubmit: (values) => {
//       console.log("Dữ liệu hợp lệ chuẩn bị gửi đi:", values);
//       alert("Đã tạo mật khẩu cấp 2 thành công.");
//     },
//   });

//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "30px auto",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h2>Tạo mật khẩu cấp 2</h2>
//       <p style={{ fontSize: "14px", color: "#666" }}>
//         Bảo mật giao dịch ví điện tử của bạn
//       </p>

//       <form
//         onSubmit={formik.handleSubmit}
//         style={{ display: "flex", flexDirection: "column", gap: "15px" }}
//       >
//         <div>
//           <input
//             type="password"
//             name="newPassword"
//             placeholder="Nhập mật khẩu cấp 2"
//             value={formik.values.newPassword}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
//           />
//           {formik.touched.newPassword && formik.errors.newPassword ? (
//             <div style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>
//               {formik.errors.newPassword}
//             </div>
//           ) : null}
//         </div>

//         <div>
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Xác nhận lại mật khẩu"
//             value={formik.values.confirmPassword}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
//           />

//           {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
//             <div style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>
//               {formik.errors.confirmPassword}
//             </div>
//           ) : null}
//         </div>

//         <button
//           type="submit"
//           style={{
//             padding: "12px",
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//             fontWeight: "bold",
//           }}
//         >
//           Xác nhận tạo mật khẩu
//         </button>
//       </form>
//     </div>
//   );
// }
