import React from "react";
import * as Yup from "yup";
import { BaseForm, baseValidationSchema } from "./BaseForm";
import { FormField } from "../../components/forms";
import { postData } from "../../api/listings";

const roommateValidationSchema = Yup.object().shape({
  ...baseValidationSchema,
  price: Yup.number().required().label("Price"),
  location: Yup.string().required().label("Location"),
  availabilityDate: Yup.date().required().label("Availability Date"),
  contactInfo: Yup.string().required().label("Contact Information"),
});

function RoommateForm() {
  const initialValues = {
    title: "",
    price: "",
    description: "",
    images: [],
    category: "Roommate",
    location: "",
    availabilityDate: "",
    contactInfo: "",
  };

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={roommateValidationSchema}
      onSubmit={(values) => postData(values)}
    >
      <FormField name="price" placeholder="Price" />
      <FormField name="description" placeholder="Description" />
      <FormField name="location" placeholder="Location" />
      <FormField name="availabilityDate" placeholder="Availability Date" />
      <FormField name="contactInfo" placeholder="Contact Information" />
    </BaseForm>
  );
}

export default RoommateForm;
