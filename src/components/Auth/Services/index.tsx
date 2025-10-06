"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Services Data
const services = [
  {
    title: "Digital Marketing",
    description:
      "From SEO to social media, we craft tailored marketing strategies that elevate your brand visibility, boost traffic, and drive measurable results across digital channels.",
    image: "/images/services/digital-marketing.jpg",
  },
  {
    title: "Website Development",
    description:
      "We design and develop responsive, fast-loading websites that deliver seamless user experiences and help you establish a strong digital presence.",
    image: "/images/services/web-dev.jpg",
  },
  {
    title: "Work with AI",
    description:
      "Integrate intelligent automation with our AI solutions to optimize your workflows, personalize user experiences, and stay ahead in the digital age.",
    image: "/images/services/ai.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "Whether it's a logo, brochure, or branding kit — our designers create stunning visuals that align with your vision and resonate with your audience.",
    image: "/images/services/graphic.jpg",
  },
  {
    title: "SEO & SMM",
    description:
      "Boost your search engine rankings and social media reach through our effective SEO practices and engaging content marketing strategies.",
    image: "/images/services/seo.jpg",
  },
  {
    title: "WordPress Solutions",
    description:
      "We build and customize powerful WordPress websites that are easy to manage, scalable, and designed to convert.",
    image: "/images/services/wordpress.jpg",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const CoursesOrServicesSection = () => {
  return (
    <section className="py-20 bg-[#f9f9ff]">
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the range of services we offer to empower your business or career journey.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
              custom={index}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-xl object-cover w-full h-auto shadow-md"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesOrServicesSection;
