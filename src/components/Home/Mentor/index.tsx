"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Mentor = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="bg-deepSlate py-12 lg:py-20" id="mentor" >
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative'>
                <h2 className="text-midnight_text text-3xl sm:text-4xl lg:text-5xl font-semibold text-center lg:text-left mb-8 lg:mb-12">
                    Meet with our <br className="hidden sm:block" /> mentor.
                </h2>

                <Slider {...settings}>
                    {MentorData.map((items, i) => (
                        <div key={i}>
                            <div className='m-2 lg:m-3 py-8 lg:py-14 text-center'>
                                <div className="relative max-w-xs mx-auto">
                                    <Image 
                                        src={`${getImagePrefix()}${items.imgSrc}`} 
                                        alt="user-image" 
                                        width={306} 
                                        height={306} 
                                        className="w-full h-auto rounded-full object-cover" 
                                    />
                                    <div className="absolute right-4 lg:right-[84px] bottom-4 lg:bottom-[102px] bg-white rounded-full p-2 lg:p-4 shadow-lg">
                                        <Image 
                                            src={`${getImagePrefix()}/images/mentor/linkedin.svg`} 
                                            alt="linkedin-image" 
                                            width={20} 
                                            height={20} 
                                            className="w-5 h-5 lg:w-6 lg:h-6"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 lg:-mt-10">
                                    <h3 className='text-xl lg:text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                    <h4 className='text-base lg:text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Mentor