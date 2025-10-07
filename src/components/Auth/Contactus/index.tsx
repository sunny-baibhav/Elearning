"use client";
import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="py-16 bg-[#f9f9ff]">
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">📞 Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to us — we’re here to answer your questions and start your journey with Cyber Tech Creations.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-xl shadow-md max-w-5xl mx-auto">
          
          {/* Left side image */}
          <div className="w-full">
            <Image
              src="/images/contactus.png"
              alt="Support"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Right side form */}
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
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            ></textarea>
            <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
