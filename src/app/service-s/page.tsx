import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import CoursesOrServicesSection from "@/components/Auth/Services"; // or correct path if different

export const metadata = {
  title: "Our Services",
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb
        pageName="Our Services"
        pageDescription="Explore the wide range of digital solutions we offer to help your business grow."
      />
      <CoursesOrServicesSection />
    </>
  );
}
