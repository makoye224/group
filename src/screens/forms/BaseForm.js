import React, { useState } from "react";
import { useFormikContext } from "formik";
import * as Yup from "yup";
import UploadScreen from "../UploadScreen";
import { Form, FormField, FormImagePicker, SubmitButton } from "../../components/forms";

const baseValidationSchema = {
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().min(1).max(10000000).label("Price"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image."),
};

function BaseForm({ initialValues, onSubmit, validationSchema, children }) {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    await onSubmit(listing);
    setUploadVisible(false);
    resetForm();
  };

  return (
    <>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField name="title" placeholder="Title" />
        {children}
        <SubmitButton title="Post" />
      </Form>
    </>
  );
}

export { baseValidationSchema, BaseForm };
