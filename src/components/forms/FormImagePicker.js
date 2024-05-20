import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name] || [];

  const handleAdd = (event) => {
    const files = Array.from(event.target.files);
    const newUris = files.map((file) => URL.createObjectURL(file));
    setFieldValue(name, [...imageUris, ...newUris]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <div className="flex space-x-2">
        {imageUris.map((uri) => (
          <div key={uri} className="relative">
            <img src={uri} alt="Selected" className="w-20 h-20 object-cover rounded" />
            <button onClick={() => handleRemove(uri)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
              X
            </button>
          </div>
        ))}
        <label className="w-20 h-20 flex items-center justify-center border rounded cursor-pointer">
          Add
          <input type="file" multiple onChange={handleAdd} className="hidden" />
        </label>
      </div>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
