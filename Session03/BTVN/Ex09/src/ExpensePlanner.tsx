import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    items: yup
      .array()
      .of(
        yup.object({
          name: yup.string().required("Bắt buộc nhập tên món đồ"),
          price: yup
            .number()
            .typeError("Giá tiền phải là số")
            .positive("Giá tiền phải lớn hơn 0")
            .required("Bắt buộc nhập giá tiền"),
        }),
      )
      .min(1, "Lỗi: Danh sách không được để trống! Hãy thêm ít nhất 1 món đồ."),
  })
  .required();

type IExpenseForm = yup.InferType<typeof schema>;

const ExpensePlanner: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IExpenseForm>({
    resolver: yupResolver(schema as any),
    defaultValues: {
      items: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const onSubmit = (data: IExpenseForm) => {
    alert("Submit thành công! F12 xem cấu trúc mảng Output.");
    console.log("Cấu trúc Output:", data);
  };

  return (
    <div>
      <h2>Lập Kế Hoạch Chi Tiêu</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "20px" }}>
          <button type="button" onClick={() => append({ name: "", price: 0 })}>
            + Thêm món đồ
          </button>
        </div>

        {errors.items && typeof errors.items.message === "string" && (
          <div
            style={{ color: "red", fontWeight: "bold", marginBottom: "15px" }}
          >
            {errors.items.message}
          </div>
        )}

        {fields.map((item, index) => (
          <div
            key={item.id}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px dashed black",
            }}
          >
            <span>Món {index + 1}: </span>

            <input
              type="text"
              placeholder="Tên món đồ"
              {...register(`items.${index}.name`)}
              style={{ marginRight: "10px" }}
            />

            <input
              type="number"
              placeholder="Giá tiền"
              {...register(`items.${index}.price`)}
              style={{ marginRight: "10px" }}
            />

            <button type="button" onClick={() => remove(index)}>
              Xóa món này
            </button>

            <div style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>
              {errors.items?.[index]?.name?.message}{" "}
              {errors.items?.[index]?.price?.message}
            </div>
          </div>
        ))}

        <button
          type="submit"
          style={{ marginTop: "20px", padding: "5px 15px" }}
        >
          Lưu danh sách
        </button>
      </form>
    </div>
  );
};

export default ExpensePlanner;
