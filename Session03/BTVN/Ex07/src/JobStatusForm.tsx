import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    status: yup.string().required("Vui lòng chọn trạng thái việc làm"),

    company: yup
      .string()
      .optional()
      .when("status", {
        is: "Đã có việc",
        then: (schema) => schema.required("Bắt buộc nhập tên công ty hiện tại"),
        otherwise: (schema) => schema.notRequired(),
      }),
  })
  .required();

interface IJobForm {
  status: string;
  company?: string;
}

const JobStatusForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IJobForm>({
    resolver: yupResolver(schema as any),
    defaultValues: {
      status: "Đang tìm việc",
      company: "",
    },
  });

  const currentStatus = watch("status");

  const onSubmit = (data: IJobForm) => {
    alert("Gửi form thành công!");
    console.log("Dữ liệu nộp lên server:", data);
  };

  return (
    <div>
      <h2>Cập nhật hồ sơ ứng viên</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "15px" }}>
          <label>Trạng thái việc làm: </label>
          <select {...register("status")}>
            <option value="Đang tìm việc">Đang tìm việc</option>
            <option value="Đã có việc">Đã có việc</option>
          </select>
          {errors.status && (
            <div style={{ color: "red" }}>{errors.status.message}</div>
          )}
        </div>

        {currentStatus === "Đã có việc" && (
          <div style={{ marginBottom: "15px" }}>
            <label>Công ty hiện tại: </label>
            <input
              type="text"
              placeholder="Nhập tên công ty..."
              {...register("company")}
            />
            {errors.company && (
              <div style={{ color: "red" }}>{errors.company.message}</div>
            )}
          </div>
        )}

        <button type="submit">Lưu hồ sơ</button>
      </form>
    </div>
  );
};

export default JobStatusForm;
