import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function FormField({ name, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <div className="mb-4">
      <input
        onBlur={() => setFieldTouched(name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        value={values[name]}
        {...otherProps}
        className="w-full p-2 border rounded"
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
}

export default FormField;
