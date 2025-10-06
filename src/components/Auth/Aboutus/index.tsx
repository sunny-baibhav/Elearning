"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  return (
    <section className="py-16 bg-[#f9f9ff]">
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">👋 About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover who we are, what we do, and why we’re passionate about empowering learners and businesses through technology.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto text-gray-700 space-y-6 text-justify leading-relaxed text-base">
          <p>
            At <strong>Cyber Tech Creations</strong>, we believe in the transformative power of education and innovation. Founded in Ludhiana, Punjab, our mission is to bridge the gap between traditional learning and modern industry requirements. We do this by offering cutting-edge training programs, project-based learning, and real-world exposure.
          </p>

          <p>
            We specialize in web development, digital marketing, cybersecurity, and creative design. Our hands-on training model ensures that students not only learn theoretical concepts but also build practical solutions using the latest technologies.
          </p>

          <p>
            Our dedicated team of educators and developers continuously work to keep our content and services aligned with current industry trends. Whether you're a fresher, job seeker, or a business looking to upskill your team, we have tailored programs to meet your goals.
          </p>

          <p>
            We also work with organizations and colleges to conduct seminars, industrial training, and skill-building workshops. Our goal is to make quality technical education accessible, engaging, and career-oriented.
          </p>

          <p>
            Thank you for trusting Cyber Tech Creations. We look forward to being a part of your journey toward success.
          </p>

          <div>
            <p>
              📍 <strong>Location:</strong> Cyber Tech Creations, Ludhiana, Punjab
              <br />
              📧 <strong>Email:</strong> support@yourdomain.com
              <br />
              🌐 <strong>Website:</strong> www.cybertechcreations.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
