import React from "react";
import { useFormikContext } from "formik";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="w-full py-2 bg-blue-500 text-white rounded"
    >
      {title}
    </button>
  );
}

export default SubmitButton;
