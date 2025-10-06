import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import CareerSection from "@/components/Auth/CareerSection";

export const metadata = {
  title: "Career - Join Our Team",
};

export default function CareerPage() {
  return (
    <>
      <Breadcrumb pageName="Career" pageDescription="Join our creative tech team" />
      <CareerSection />
    </>
  );
}
