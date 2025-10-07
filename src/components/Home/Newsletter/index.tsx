import { getImagePrefix } from "@/utils/util";
import Image from "next/image";

const Newsletter = () => {
    const isProd = process.env.NODE_ENV === "production";

    return (
        <section className="py-12 lg:py-20">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
                    <div className={`col-span-12 ${isProd ? 'bg-newsletter-bg-2' : 'bg-newsletter-bg'} bg-cover bg-center bg-no-repeat rounded-2xl`}>
                        <div className="py-12 lg:py-16 px-6 lg:px-16">
                            <div className="max-w-2xl mx-auto text-center">
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white mb-4">Newsletter.</h3>
                                <h3 className="text-sm sm:text-base lg:text-lg font-normal text-white/75 mb-8">
                                    Subscribe our newsletter for discounts, <br className="hidden sm:block" /> promo and many more.
                                </h3>
                                <div className="max-w-md mx-auto">
                                    <div className="relative text-white focus-within:text-white flex flex-row-reverse rounded-full">
                                        <input 
                                            type="Email address" 
                                            name="q" 
                                            className="py-4 lg:py-6 xl:py-8 text-sm lg:text-base xl:text-lg w-full mx-2 text-black rounded-full pl-6 lg:pl-8 focus:outline-none focus:text-black" 
                                            placeholder="Enter your email address" 
                                            autoComplete="off" 
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 lg:pr-6">
                                            <button type="submit" className="p-2 lg:p-3 xl:p-5 focus:outline-none focus:shadow-outline bg-ultramarine hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                                <Image 
                                                    src={`${getImagePrefix()}/images/newsletter/send.svg`} 
                                                    alt="send-icon" 
                                                    width={24} 
                                                    height={24} 
                                                    className="w-5 h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;