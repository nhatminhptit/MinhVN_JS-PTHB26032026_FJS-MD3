import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface IBlogForm {
  title: string;
  content: string;
}

const BlogEditor: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBlogForm>();

  const onSubmit: SubmitHandler<IBlogForm> = (data) => {
    alert("Đăng bài thành công! Xem console để thấy dữ liệu.");
    console.log("Dữ liệu bài viết:", data);
  };

  return (
    <div
      style={{
        width: "600px",
        margin: "40px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Soạn thảo</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Tiêu đề
          </label>
          <input
            type="text"
            {...register("title", {
              required: "Tiêu đề không được để trống",
            })}
            style={{ width: "100%", padding: "10px" }}
            placeholder="Nhập tiêu đề..."
          />
          {errors.title && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.title.message}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Nội dung bài viết
          </label>
          <textarea
            rows={10}
            {...register("content", {
              required: "Nội dung bài viết không được để trống",
              minLength: {
                value: 50,
                message: "Bài viết quá ngắn, yêu cầu tối thiểu 50 ký tự!",
              },
            })}
            style={{ width: "100%", padding: "10px" }}
            placeholder="Viết nội dung blog của bạn vào đây..."
          />
          {errors.content && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.content.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Xuất bản bài viết
        </button>
      </form>
    </div>
  );
};

export default BlogEditor;
