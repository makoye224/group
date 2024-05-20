import React from "react";
import * as Yup from "yup";
import { BaseForm, baseValidationSchema } from "./BaseForm";
import { FormField } from "../../components/forms";
import { postData } from "../../api/listings";

const lostFoundValidationSchema = Yup.object().shape({
  ...baseValidationSchema,
  description: Yup.string().required().label("Description"),
  location: Yup.string().required().label("Location"),
  date: Yup.date().required().label("Date Lost/Found"),
  contactInfo: Yup.string().required().label("Contact Information"),
});

function LostFoundForm() {
  const initialValues = {
    title: "",
    description: "",
    images: [],
    category: "Lost & Found",
    location: "",
    date: "",
    contactInfo: "",
  };

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={lostFoundValidationSchema}
      onSubmit={(values) => postData(values)}
    >
      <FormField name="description" placeholder="Description" />
      <FormField name="location" placeholder="Location" />
      <FormField name="date" placeholder="Date Lost/Found" />
      <FormField name="contactInfo" placeholder="Contact Information" />
    </BaseForm>
  );
}

export default LostFoundForm;
