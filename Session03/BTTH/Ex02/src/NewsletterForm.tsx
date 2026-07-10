import { useFormik } from "formik";

const NewsletterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors: { email?: string } = {};
      if (!values.email) {
        errors.email = "Vui lòng nhập email để đăng ký.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Định dạng email không hợp lệ.";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert("Đăng ký thành công: " + values.email);
    },
  });

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Đăng ký nhận bản tin</h2>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Nhập email của bạn..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{ padding: "8px" }}
        />

        {formik.touched.email && formik.errors.email ? (
          <div className="error" style={{ color: "red", fontSize: "14px" }}>
            {formik.errors.email}
          </div>
        ) : null}

        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
