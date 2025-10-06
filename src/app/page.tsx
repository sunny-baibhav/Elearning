import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonials";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
import StudentsHighlight from "@/components/Auth/StudentsHighlight";
import EmployeeHighlights from "@/components/Auth/EmplyeeHighlights";
import ResumeBuilder from "@/components/Auth/Resume-builder";
export const metadata: Metadata = {
  title: "eLearning",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Courses />
      <Mentor />
      <ResumeBuilder/>
    {/* <StudentsHighlight/>
      <EmployeeHighlights/> */}
      <Testimonial />
      <Newsletter />
    </main>
  );
}