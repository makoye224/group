import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function FormPicker({ items, name, placeholder, ...otherProps }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <div className="mb-4">
      <select
        onChange={(e) => setFieldValue(name, e.target.value)}
        value={values[name]}
        {...otherProps}
        className="w-full p-2 border rounded"
      >
        <option value="" disabled>{placeholder}</option>
        {items.map((item) => (
          <option key={item.value} value={item.label}>
            {item.label}
          </option>
        ))}
      </select>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
}

export default FormPicker;
