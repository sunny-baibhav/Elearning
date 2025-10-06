"use client";
import React from "react";
import Image from "next/image";

const CareerSection = () => {
  return (
    <section className="py-16 bg-[#f9f9ff]">
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">🚀 We are hiring</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your career is one of the most important parts of your life. The right kind of work provides growth,
            inspiration, and fulfillment. We’re excited to have you explore opportunities with us!
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white p-6 rounded-xl shadow-md max-w-6xl mx-auto">
          
          {/* Left: Job Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-black">Frontend Developer (2 Positions)</h2>
            <p className="text-gray-700">
              We are looking for a passionate Frontend Developer with 1 to 2 years of experience. You will be a part of a creative team responsible for the development and design of modern web applications.
            </p>
            <div>
              <h3 className="font-semibold text-black mb-1">Responsibilities:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Develop user-facing features using React / Vue / Angular</li>
                <li>Build reusable components and front-end libraries</li>
                <li>Collaborate with designers and backend developers</li>
                <li>Ensure responsiveness and cross-browser compatibility</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-1">Requirements:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>1–2 years of experience in frontend development</li>
                <li>Familiar with RESTful APIs</li>
                <li>Experience with Git, HTML5, CSS3, JavaScript, and any modern JS framework</li>
                <li>Knowledge of Laravel or Node.js is a plus</li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            />
            <textarea
              rows={3}
              placeholder="Short Cover Letter or Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            ></textarea>
            <input
              type="file"
              accept=".pdf"
              className="w-full p-3 border border-gray-300 rounded-md text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition w-full">
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
