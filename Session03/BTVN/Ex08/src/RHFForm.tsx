import React from "react";
import { useForm } from "react-hook-form";

const RHFForm: React.FC = () => {
  console.log("Rendered Component RHF");

  const { register, handleSubmit } = useForm({
    defaultValues: {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("RHF Submit:", data);
  };

  return (
    <div>
      <h3>Chế bản 2: React Hook Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("field1")} placeholder="Field 1" />
        </div>
        <div>
          <input {...register("field2")} placeholder="Field 2" />
        </div>
        <div>
          <input {...register("field3")} placeholder="Field 3" />
        </div>
        <div>
          <input {...register("field4")} placeholder="Field 4" />
        </div>
        <div>
          <input {...register("field5")} placeholder="Field 5" />
        </div>
        <button type="submit">Submit RHF</button>
      </form>
    </div>
  );
};

export default RHFForm;
