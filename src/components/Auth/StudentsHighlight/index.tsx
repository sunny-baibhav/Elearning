"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { Icon } from "@iconify/react";

// Import Slick styles globally (in _app.tsx or layout.tsx if not already)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const studentOfMonth = {
  name: "Aman Verma",
  image: "images/student1.png",
  description: "Aman consistently delivered top performance in frontend and backend projects.",
};

const topStudents = [
  {
    name: "Nisha Sharma",
    image: "images/student12.png",
    description: "Excellent in UI/UX and team leadership.",
  },
  {
    name: "Rohan Mehta",
    image: "images/rohan1.png",
    description: "Strong backend developer with Node.js expertise.",
  },
  {
    name: "Preeti Kaur",
    image: "images/preeti.png",
    description: "Quick learner and exceptional problem solver.",
  },
  {
    name: "Raj Singh",
    image: "images/raj.png",
    description: "Built a working ecommerce store solo.",
  },
  {
    name: "Simran Gill",
    image: "images/simran.png",
    description: "Excellent communication and content skills.",
  },
];

const studentProjects = [
  {
    name: "Aman Verma",
    image: "images/simran.png",
    project: "AI-Powered Lost & Found Portal",
  },
  {
    name: "Nisha Sharma",
    image: "images/simran.png",
    project: "Fashion Website with React",
  },
  {
    name: "Rohan Mehta",
    image: "images/simran.png",
    project: "Real-Time Chat App",
  },
  {
    name: "Simran Gill",
    image: "images/simran.png",
    project: "YouTube Clone with Tailwind",
  },
  {
    name: "Raj Singh",
    image: "images/simran.png",
    project: "E-commerce Website",
  },
];

const StudentsHighlight = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-[#f9f9ff]">
      <div className="container mx-auto px-4 lg:max-w-screen-xl">

        {/* Student of the Month */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">🎉 Student of the Month</h2>
          <div className="bg-white shadow-lg p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 max-w-3xl mx-auto">
            <Image
              src={studentOfMonth.image}
              alt={studentOfMonth.name}
              width={160}
              height={160}
              className="rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-black">{studentOfMonth.name}</h3>
              <p className="text-gray-600 mt-2">{studentOfMonth.description}</p>
            </div>
          </div>
        </div>

        {/* Top 5 Students */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">🏆 Top 5 Students</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {topStudents.map((student, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-md text-center">
                <Image
                  src={student.image}
                  alt={student.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto object-cover"
                />
                <h4 className="mt-4 font-bold text-lg">{student.name}</h4>
                <p className="text-gray-600 text-sm">{student.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Projects Slider */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-center">💡 Student Projects</h2>
          <Slider {...settings}>
            {studentProjects.map((project, i) => (
              <div key={i} className="px-2">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden relative group">
                  <div className="relative w-full h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                      <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
                        View
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold">{project.name}</h4>
                    <p className="text-gray-600">{project.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default StudentsHighlight;
