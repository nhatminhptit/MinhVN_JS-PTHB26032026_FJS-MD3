import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  courseCode: yup
    .string()
    .transform((value) => (value ? value.toUpperCase() : value))
    .required("Mã môn học là bắt buộc"),

  studentCount: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? undefined : value))
    .required("Vui lòng nhập sĩ số lớp")
    .positive("Sĩ số không hợp lệ (Phải lớn hơn 0)")
    .integer("Sĩ số phải là số nguyên"),

  grades: yup
    .array()
    .of(
      yup.object({
        score: yup
          .number()
          .transform((value) => (Number.isNaN(value) ? undefined : value))
          .required("Vui lòng nhập điểm")
          .min(0, "Điểm tối thiểu là 0.0")
          .max(10, "Điểm tối đa là 10.0"),
      }),
    )
    .required(),
});

type IGradingForm = yup.InferType<typeof schema>;

const GradingKiosk: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IGradingForm>({
    resolver: yupResolver(schema as any),
    defaultValues: {
      courseCode: "",
      studentCount: 0,
      grades: [],
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "grades",
  });

  const currentStudentCount = watch("studentCount");

  useEffect(() => {
    const count = Number(currentStudentCount);
    const currentLength = fields.length;

    if (!count || count <= 0) {
      if (currentLength > 0) replace([]);
    } else {
      if (count > currentLength) {
        const itemsToAdd = Array(count - currentLength).fill({
          score: undefined,
        });
        append(itemsToAdd);
      } else if (count < currentLength) {
        const indicesToRemove = Array.from(
          { length: currentLength - count },
          (_, i) => currentLength - 1 - i,
        );
        remove(indicesToRemove);
      }
    }
  }, [currentStudentCount, fields.length, append, remove, replace]);

  const onSubmit = (data: IGradingForm) => {
    alert("Vào điểm thành công! F12 để xem dữ liệu chuẩn.");
    console.log("Dữ liệu gửi lên Server:", data);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Kiosk Quản Lý Chấm Điểm Cuối Kỳ</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: "bold" }}>Mã môn học:</label>
            <input
              type="text"
              placeholder="VD: INT1234"
              {...register("courseCode")}
              style={{
                width: "100%",
                padding: "8px",
                textTransform: "uppercase",
              }}
            />
            {errors.courseCode && (
              <div style={{ color: "red", fontSize: "14px" }}>
                {errors.courseCode.message}
              </div>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: "bold" }}>Sĩ số sinh viên:</label>
            <input
              type="number"
              {...register("studentCount")}
              style={{ width: "100%", padding: "8px" }}
            />
            {errors.studentCount && (
              <div style={{ color: "red", fontSize: "14px" }}>
                {errors.studentCount.message}
              </div>
            )}
          </div>
        </div>

        <hr />

        <h4 style={{ margin: "15px 0" }}>Danh sách vào điểm:</h4>

        {fields.length === 0 && (
          <div style={{ color: "gray", fontStyle: "italic" }}>
            (Vui lòng nhập sĩ số hợp lệ để mở khóa danh sách nhập điểm)
          </div>
        )}

        {fields.map((item, index) => (
          <div
            key={item.id}
            style={{
              marginBottom: "15px",
              padding: "10px",
              background: "#f9f9f9",
              border: "1px solid #ddd",
            }}
          >
            <label
              style={{
                display: "inline-block",
                width: "120px",
                fontWeight: "bold",
              }}
            >
              Sinh viên #{index + 1}:
            </label>
            <input
              type="number"
              step="0.1"
              placeholder="Nhập điểm (0.0 - 10.0)"
              {...register(`grades.${index}.score`)}
              style={{ padding: "6px", width: "200px" }}
            />
            {errors.grades?.[index]?.score && (
              <span
                style={{ color: "red", marginLeft: "10px", fontSize: "14px" }}
              >
                {errors.grades[index]?.score?.message}
              </span>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={fields.length === 0}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: fields.length === 0 ? "#ccc" : "#0056b3",
            color: "white",
            border: "none",
            cursor: fields.length === 0 ? "not-allowed" : "pointer",
          }}
        >
          Hoàn tất vào điểm
        </button>
      </form>
    </div>
  );
};

export default GradingKiosk;
