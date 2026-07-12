import React from "react";
import { useFormik } from "formik";

const FormikForm: React.FC = () => {
  console.log("Rendered Component Formik");

  const formik = useFormik({
    initialValues: {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
    },
    validateOnChange: false,
    onSubmit: (values) => {
      console.log("Formik Submit:", values);
    },
  });

  return (
    <div>
      <h3>Chế bản 1: Formik Form</h3>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            name="field1"
            onChange={formik.handleChange}
            value={formik.values.field1}
            placeholder="Field 1"
          />
        </div>
        <div>
          <input
            name="field2"
            onChange={formik.handleChange}
            value={formik.values.field2}
            placeholder="Field 2"
          />
        </div>
        <div>
          <input
            name="field3"
            onChange={formik.handleChange}
            value={formik.values.field3}
            placeholder="Field 3"
          />
        </div>
        <div>
          <input
            name="field4"
            onChange={formik.handleChange}
            value={formik.values.field4}
            placeholder="Field 4"
          />
        </div>
        <div>
          <input
            name="field5"
            onChange={formik.handleChange}
            value={formik.values.field5}
            placeholder="Field 5"
          />
        </div>
        <button type="submit">Submit Formik</button>
      </form>
    </div>
  );
};

export default FormikForm;
