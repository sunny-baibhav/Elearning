"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ResumeBuilder = () => {
  return (
    <section className="py-20 bg-[#f0f4ff]">
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Build Your Resume for Free</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Craft a professional resume in minutes. No cost, no hassle – just results.
          </p>
        </div>

        {/* Resume Builder Content */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="images/resume.png" // <-- change to your actual image path
              alt="Resume Builder"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto shadow-lg"
            />
          </div>

          {/* Text and CTA */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Get Hired?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Stand out with a personalized, beautifully designed resume. Whether you're applying for your first job or your next big opportunity, our builder helps you create something employers will notice.
            </p>
            <a
              href="/resume-builder"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
            >
              Build Resume Now – It's Free!
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeBuilder;
