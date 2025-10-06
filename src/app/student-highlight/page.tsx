import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import StudentsHighlight from "@/components/Auth/StudentsHighlight";

export const metadata = {
  title: "Student Highlights",
};

export default function StudentHighlightPage() {
  return (
    <>
      <Breadcrumb
        pageName="Student Highlights"
        pageDescription="Explore our most talented and hardworking students."
      />
      <StudentsHighlight />
    </>
  );
}
