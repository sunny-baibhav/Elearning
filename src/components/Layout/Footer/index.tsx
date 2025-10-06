import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";

const footer = () => {
  return (
    <footer className="bg-deepSlate py-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='col-span-4 md:col-span-12 lg:col-span-4'>
            <Logo />
            <div className='flex items-center gap-4'>
              <Link href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-facebook"
                />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-twitter"
                />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-3xl'>
                <Icon
                  icon="tabler:brand-instagram"
                />
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Links</h3>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="mb-2 text-black/50 hover:text-primary w-fit">
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-2xl font-medium">Other</h3>
            <ul>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="/about-us">
                  About Us
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="/about-us">
                  Our Team
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="/Career-Section">
                  career
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="/service-s">
                  Services
                </Link>
              </li>
              <li className="mb-2 text-black/50 hover:text-primary w-fit">
                <Link href="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            <div className="flex items-center gap-2">
              <Icon
                icon="tabler:brand-google-maps"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">Near Tibba road , Ludhiana</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:phone"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">+91 88745-55478</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <Icon
                icon="tabler:folder"
                className="text-primary text-3xl inline-block me-2"
              />
              <h5 className="text-lg text-black/60">cybertechcreation@gmail.com</h5>
            </div>
          </div>
        </div>

        <div className='mt-10 lg:flex items-center justify-between'>
          <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>@2025 Agency. All Rights Reserved by <Link href="https://getnextjstemplates.com/" target="_blank" className="hover:text-primary"> GetNextJsTemplates.com</Link></h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <Link href="/Privacy-policy" className='text-black/50 text-sm font-normal hover:text-primary'>Privacy policy</Link>
            <Link href="/terms-condition" className='text-black/50 text-sm font-normal hover:text-primary'>Terms & conditions</Link>
          </div>
          <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>Distributed by <Link href="https://themewagon.com/" target="_blank" className="hover:text-primary"> ThemeWagon</Link></h4>
        </div>
      </div>
    </footer>
  )
}

export default footer;
