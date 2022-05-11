import { Typography } from "@mui/material";
import React from "react";
import { Stacked } from "../../pages";
import { useCurrentLocation } from "../../utility/useCurrentLocation";
import { ContactForm } from "./contact/contactForm";

export const Contact = () => {
  const [formData, setFormData] = React.useState({
    company: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [company, setCompany] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { country, setCountry } = useCurrentLocation();
  // const { country, setCountry } = React.useState();

  return (
    <>
      <Stacked>
        <Typography variant="h4">Contact</Typography>
        <ContactForm
          country={country?.toString().toLowerCase()}
          submitted={submitted}
          setSubmitted={setSubmitted}
          setFormData={setFormData}
          formData={formData}
          setCompany={setCompany}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
        />
      </Stacked>
    </>
  );
};
