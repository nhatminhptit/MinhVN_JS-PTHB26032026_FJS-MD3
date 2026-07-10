import { Formik, Form, Field } from "formik";

const PaymentForm = () => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "30px auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Thanh toán hóa đơn</h2>

      <Formik
        initialValues={{ cardNumber: "" }}
        onSubmit={async (values) => {
          console.log("Bắt đầu gọi API thanh toán...");
          await new Promise((resolve) => setTimeout(resolve, 3000));
          alert("Thanh toán thành công thẻ: " + values.cardNumber);
        }}
      >
        {({ isSubmitting }) => (
          <Form
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Field
              type="text"
              name="cardNumber"
              placeholder="Nhập số thẻ..."
              style={{ padding: "10px" }}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "12px",
                backgroundColor: isSubmitting ? "#ccc" : "#28a745",
                color: "white",
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontWeight: "bold",
              }}
            >
              {isSubmitting ? "Đang xử lý..." : "Thanh toán"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentForm;
