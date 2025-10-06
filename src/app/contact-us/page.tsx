
import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactUs from "@/components/Auth/Contactus";

export const metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb pageName="Contact" pageDescription="Get in touch with our team" />
      <ContactUs />
    </>
  );
}
