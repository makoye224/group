import React from "react";
import * as Yup from "yup";
import { BaseForm, baseValidationSchema } from "./BaseForm";
import { FormField } from "../../components/forms";
import { postData } from "../../api/listings";

const feedValidationSchema = Yup.object().shape({
  ...baseValidationSchema,
  description: Yup.string().required().label("Description"),
});

function FeedForm() {
  const initialValues = {
    title: "",
    description: "",
    images: [],
    category: "Feed",
  };

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={feedValidationSchema}
      onSubmit={(values) => postData(values)}
    >
      <FormField name="description" placeholder="Description" />
    </BaseForm>
  );
}

export default FeedForm;
