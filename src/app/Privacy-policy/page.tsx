import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import PrivacyPolicy from "@/components/Auth/PrivacyPolicy/Index";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        pageDescription="Understand how we handle your data and protect your privacy."
      />
      <PrivacyPolicy />
    </>
  );
}
