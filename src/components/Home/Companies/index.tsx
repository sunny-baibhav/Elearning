"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TruestedCompanies } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

// CAROUSEL SETTINGS
const Companies = () => {

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
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <section className='text-center py-8 lg:py-16' >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <h2 className="text-midnight_text text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 lg:mb-12">Trusted by companies of all sizes</h2>
                <div className="py-8 lg:py-14 border-b">
                    <Slider {...settings}>
                        {TruestedCompanies.map((item, i) =>
                            <div key={i} className="px-2">
                                <div className="flex items-center justify-center h-16 lg:h-20">
                                    <Image 
                                        src={`${getImagePrefix()}${item.imgSrc}`} 
                                        alt={item.imgSrc} 
                                        width={116} 
                                        height={36} 
                                        className="max-h-12 lg:max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </section>
    )

}

export default Companies;