import React from "react";
import * as Yup from "yup";
import { BaseForm, baseValidationSchema } from "./BaseForm";
import { FormField } from "../../components/forms";
import { postData } from "../../api/listings";

const forSaleValidationSchema = Yup.object().shape({
  ...baseValidationSchema,
  price: Yup.number().required().label("Price"),
  condition: Yup.string().required().label("Condition"),
  location: Yup.string().required().label("Location"),
  contactInfo: Yup.string().required().label("Contact Information"),
});

function ForSaleForm() {
  const initialValues = {
    title: "",
    price: "",
    description: "",
    images: [],
    category: "ForSale",
    condition: "",
    location: "",
    contactInfo: "",
  };

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={forSaleValidationSchema}
      onSubmit={(values) => postData(values)}
    >
      <FormField name="price" placeholder="Price" />
      <FormField name="description" placeholder="Description" />
      <FormField name="condition" placeholder="Condition" />
      <FormField name="location" placeholder="Location" />
      <FormField name="contactInfo" placeholder="Contact Information" />
    </BaseForm>
  );
}

export default ForSaleForm;
