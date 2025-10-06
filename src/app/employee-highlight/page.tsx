import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import EmployeeHighlights from "@/components/Auth/EmplyeeHighlights";

export const metadata = {
  title: "Employee Highlights",
};

export default function EmployeeHighlightPage() {
  return (
    <>
      <Breadcrumb
        pageName="Employee Highlights"
        pageDescription="Meet our top-performing team members and their achievements."
      />
      <EmployeeHighlights />
    </>
  );
}
