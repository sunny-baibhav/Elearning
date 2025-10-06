import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutUs from "@/components/Auth/Aboutus";

export const metadata = {
  title: "About Us",
};

export default function AboutUsPage() {
  return (
    <>
      <Breadcrumb pageName="About Us" pageDescription="Learn more about Cyber Tech Creations and our mission." />
      <AboutUs />
    </>
  );
}
