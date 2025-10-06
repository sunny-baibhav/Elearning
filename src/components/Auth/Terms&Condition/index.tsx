"use client";
import React from "react";

// If you use global styles, you can keep these imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TermsCondition = () => {
  return (
    <section className="py-16 bg-[#f9f9ff]">
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">📜 Terms & Conditions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our platform.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md max-w-4xl mx-auto text-gray-700 space-y-6 text-justify leading-relaxed text-base">
          <div>
            <h2 className="text-xl font-semibold text-black mb-2">1. Introduction</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-2">2. Eligibility</h2>
            <p>
              You must be at least 13 years of age to use our platform. By agreeing to these terms, you represent that you are eligible.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-2">3. Account Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account and for all activities under your account. Notify us immediately of unauthorized use.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-2">4. Intellectual Property</h2>
            <p>
              All content on the platform, including logos, text, graphics, and code, is our property and protected by copyright laws. You may not reproduce or redistribute it without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-2">5. Limitation of Liability</h2>
            <p>
              We are not liable for any damages resulting from the use or inability to use our platform, even if we have been advised of such damages.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-2">6. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms at any time without prior notice. Changes will be effective immediately upon posting.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-2">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-2">8. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms, please contact us at: <strong>support@yourdomain.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsCondition;
