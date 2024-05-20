import React from 'react';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';

function FormSelect({ name, data, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <select
        onBlur={() => setFieldTouched(name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        value={values[name]}
        {...otherProps}
        className="w-full p-2 border rounded"
      >
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormSelect;
