import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";

const footer = () => {
  return (
    <footer className="bg-deepSlate py-12 lg:py-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className='col-span-1 sm:col-span-2 lg:col-span-4'>
            <Logo />
            <div className='flex items-center gap-4 mt-6'>
              <Link href="#" className='hover:text-primary text-black text-2xl lg:text-3xl transition-colors'>
                <Icon icon="tabler:brand-facebook" />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-2xl lg:text-3xl transition-colors'>
                <Icon icon="tabler:brand-twitter" />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-2xl lg:text-3xl transition-colors'>
                <Icon icon="tabler:brand-instagram" />
              </Link>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="mb-4 text-lg lg:text-2xl font-medium">Links</h3>
            <ul className="space-y-2">
              {headerData.map((item, index) => (
                <li key={index} className="text-black/50 hover:text-primary w-fit transition-colors">
                  <Link href={item.href} className="text-sm lg:text-base">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h3 className="mb-4 text-lg lg:text-2xl font-medium">Other</h3>
            <ul className="space-y-2">
              <li className="text-black/50 hover:text-primary w-fit transition-colors">
                <Link href="/about-us" className="text-sm lg:text-base">
                  About Us
                </Link>
              </li>
              <li className="text-black/50 hover:text-primary w-fit transition-colors">
                <Link href="/about-us" className="text-sm lg:text-base">
                  Our Team
                </Link>
              </li>
              <li className="text-black/50 hover:text-primary w-fit transition-colors">
                <Link href="/Career-Section" className="text-sm lg:text-base">
                  Career
                </Link>
              </li>
              <li className="text-black/50 hover:text-primary w-fit transition-colors">
                <Link href="/service-s" className="text-sm lg:text-base">
                  Services
                </Link>
              </li>
              <li className="text-black/50 hover:text-primary w-fit transition-colors">
                <Link href="/contact-us" className="text-sm lg:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-1 sm:col-span-2 lg:col-span-4'>
            <div className="flex items-start gap-3 mb-6">
              <Icon
                icon="tabler:brand-google-maps"
                className="text-primary text-xl lg:text-2xl mt-1 flex-shrink-0"
              />
              <h5 className="text-sm lg:text-base text-black/60 leading-relaxed">Near Tibba road, Ludhiana</h5>
            </div>
            <div className="flex items-start gap-3 mb-6">
              <Icon
                icon="tabler:phone"
                className="text-primary text-xl lg:text-2xl mt-1 flex-shrink-0"
              />
              <h5 className="text-sm lg:text-base text-black/60">+91 88745-55478</h5>
            </div>
            <div className="flex items-start gap-3">
              <Icon
                icon="tabler:folder"
                className="text-primary text-xl lg:text-2xl mt-1 flex-shrink-0"
              />
              <h5 className="text-sm lg:text-base text-black/60 break-all">cybertechcreation@gmail.com</h5>
            </div>
          </div>
        </div>

        <div className='mt-12 pt-8 border-t border-gray-300'>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <h4 className='text-black/50 text-xs lg:text-sm text-center lg:text-left font-normal'>
              @2025 Agency. All Rights Reserved by <Link href="https://getnextjstemplates.com/" target="_blank" className="hover:text-primary transition-colors"> GetNextJsTemplates.com</Link>
            </h4>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/Privacy-policy" className='text-black/50 text-xs lg:text-sm font-normal hover:text-primary transition-colors'>Privacy policy</Link>
              <Link href="/terms-condition" className='text-black/50 text-xs lg:text-sm font-normal hover:text-primary transition-colors'>Terms & conditions</Link>
            </div>
            <h4 className='text-black/50 text-xs lg:text-sm text-center lg:text-left font-normal'>
              Distributed by <Link href="https://themewagon.com/" target="_blank" className="hover:text-primary transition-colors"> ThemeWagon</Link>
            </h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer;
