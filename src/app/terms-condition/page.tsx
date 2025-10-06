import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Termscondition from "@/components/Auth/Terms&Condition";

export const metadata = {
  title: "Terms Condition",
};

export default function termsCondition() {
  return (
    <>
      <Breadcrumb
        pageName="Terms Condition"
        pageDescription=""
      />
      <Termscondition />
    </>
  );
}
