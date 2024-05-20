import React from "react";
import * as Yup from "yup";
import { BaseForm, baseValidationSchema } from "./BaseForm";
import { FormField } from "../../components/forms";
import { postData } from "../../api/listings";

const campusEventsValidationSchema = Yup.object().shape({
  ...baseValidationSchema,
  price: Yup.number().required().label("Price"),
  eventDate: Yup.date().required().label("Event Date"),
  location: Yup.string().required().label("Location"),
  contactInfo: Yup.string().required().label("Contact Information"),
});

function CampusEventsForm() {
  const initialValues = {
    title: "",
    price: "",
    description: "",
    images: [],
    category: "Campus Events",
    eventDate: "",
    location: "",
    contactInfo: "",
  };  

  return (
    <BaseForm
      initialValues={initialValues}
      validationSchema={campusEventsValidationSchema}
      onSubmit={(values) => postData(values)}
    >
      <FormField name="price" placeholder="Price" />
      <FormField name="description" placeholder="Description" />
      <FormField name="eventDate" placeholder="Event Date" />
      <FormField name="location" placeholder="Location" />
      <FormField name="contactInfo" placeholder="Contact Information" />
    </BaseForm>
  );
}

export default CampusEventsForm;
