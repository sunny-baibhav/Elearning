import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";
import { getImagePrefix } from '@/utils/util';

const Hero = () => {

    return (
        <section id="home-section" className='bg-slateGray'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20 pb-10">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center'>
                    <div className='col-span-1 lg:col-span-6 flex flex-col gap-6 lg:gap-8'>
                        <div className='flex gap-2 justify-center lg:justify-start'>
                            <Icon
                                icon="solar:verified-check-bold"
                                className="text-success text-xl inline-block me-2"
                            />
                            <p className='text-success text-sm font-semibold'>Get 30% off on first enroll</p>
                        </div>
                        <h1 className='text-midnight_text text-3xl sm:text-4xl lg:text-5xl font-semibold text-center lg:text-left leading-tight'>Advance your engineering skills with us.</h1>
                        <h3 className='text-black/70 text-base lg:text-lg text-center lg:text-left'>Build skills with our courses and mentor from world-class companies.</h3>
                        <div className="relative rounded-full">
                            <input type="Email address" name="q" className="py-4 lg:py-6 xl:py-8 pl-6 lg:pl-8 pr-16 lg:pr-20 text-base lg:text-lg w-full text-black rounded-full focus:outline-none shadow-input-shadow" placeholder="search courses..." autoComplete="off" />
                            <button className="bg-secondary p-3 lg:p-4 xl:p-5 rounded-full absolute right-1 lg:right-2 top-1 lg:top-2">
                                <Icon
                                    icon="solar:magnifer-linear"
                                    className="text-white text-2xl lg:text-3xl xl:text-4xl inline-block"
                                />
                            </button>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-4 lg:pt-4'>
                            <div className='flex gap-2 items-center'>
                                <Image src={`${getImagePrefix()}/images/banner/check-circle.svg`} alt="check-image" width={24} height={24} className='w-6 h-6' />
                                <p className='text-sm lg:text-base font-normal text-black'>Flexible</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image src={`${getImagePrefix()}/images/banner/check-circle.svg`} alt="check-image" width={24} height={24} className='w-6 h-6' />
                                <p className='text-sm lg:text-base font-normal text-black'>Learning path</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Image src={`${getImagePrefix()}/images/banner/check-circle.svg`} alt="check-image" width={24} height={24} className='w-6 h-6' />
                                <p className='text-sm lg:text-base font-normal text-black'>Community</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 lg:col-span-6 flex justify-center order-first lg:order-last'>
                        <Image 
                            src={`${getImagePrefix()}/images/banner/mahila.png`} 
                            alt="E-learning platform illustration" 
                            width={600} 
                            height={480} 
                            className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                        />
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Hero;
