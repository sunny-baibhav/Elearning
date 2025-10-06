"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import Student from "@/components/Auth/StudentsHighlight";
import EmployeeHighlights from "@/components/Auth/EmplyeeHighlights"; // ✅ NEW
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isStudentOpen, setIsStudentOpen] = useState(false);
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false); // ✅ NEW

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const employeeRef = useRef<HTMLDivElement>(null); // ✅ NEW
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      studentRef.current &&
      !studentRef.current.contains(event.target as Node)
    ) {
      setIsStudentOpen(false);
    }
    if (
      employeeRef.current &&
      !employeeRef.current.contains(event.target as Node)
    ) {
      setIsEmployeeOpen(false); // ✅ NEW
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen, isStudentOpen, isEmployeeOpen]);

  useEffect(() => {
    if (
      isSignInOpen ||
      isSignUpOpen ||
      isStudentOpen ||
      isEmployeeOpen ||
      navbarOpen
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, isStudentOpen, isEmployeeOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 bg-white ${
        sticky ? " shadow-lg py-5" : "shadow-none py-6"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          <Logo />
          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden lg:block bg-primary text-white hover:bg-primary/15 hover:text-primary px-8 py-3 rounded-full text-lg font-medium"
              onClick={() => setIsSignInOpen(true)}
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="hidden lg:block bg-primary/15 hover:bg-primary text-primary hover:text-white px-8 py-3 rounded-full text-lg font-medium"
              onClick={() => setIsSignUpOpen(true)}
            >
              Sign Up
            </Link>
            {/* <Link
              href="#"
              className="hidden lg:block bg-yellow-100 hover:bg-yellow-300 text-yellow-900 hover:text-black px-8 py-3 rounded-full text-lg font-medium"
              onClick={() => setIsStudentOpen(true)}
            >
              Student
            </Link>
            <Link
              href="#"
              className="hidden lg:block bg-green-100 hover:bg-green-300 text-green-900 hover:text-black px-8 py-3 rounded-full text-lg font-medium"
              onClick={() => setIsEmployeeOpen(true)} // ✅ NEW
            >
              Employee
            </Link> */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
            </button>
          </div>
        </div>

        {/* Desktop Modals */}
        {isSignInOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
            <div
              ref={signInRef}
              className="relative mx-auto w-full max-w-md rounded-lg px-8 pt-14 pb-8 text-center bg-white"
            >
              <button
                onClick={() => setIsSignInOpen(false)}
                className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              >
                <Icon
                  icon="tabler:currency-xrp"
                  className="text-black hover:text-primary text-24"
                />
              </button>
              <Signin />
            </div>
          </div>
        )}

        {isSignUpOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
            <div
              ref={signUpRef}
              className="relative mx-auto w-full max-w-md rounded-lg bg-white px-8 pt-14 pb-8 text-center"
            >
              <button
                onClick={() => setIsSignUpOpen(false)}
                className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              >
                <Icon
                  icon="tabler:currency-xrp"
                  className="text-black hover:text-primary text-24"
                />
              </button>
              <SignUp />
            </div>
          </div>
        )}

        {isStudentOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
            <div
              ref={studentRef}
              className="relative mx-auto w-full max-w-5xl rounded-2xl bg-white px-6 md:px-12 pt-14 pb-10 text-left overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsStudentOpen(false)}
                className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              >
                <Icon
                  icon="tabler:currency-xrp"
                  className="text-black hover:text-primary text-2xl"
                />
              </button>
              <Student />
            </div>
          </div>
        )}

        {isEmployeeOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
            <div
              ref={employeeRef}
              className="relative mx-auto w-full max-w-6xl rounded-2xl bg-white px-6 md:px-12 pt-14 pb-10 text-left overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsEmployeeOpen(false)}
                className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
              >
                <Icon
                  icon="tabler:currency-xrp"
                  className="text-black hover:text-primary text-2xl"
                />
              </button>
              <EmployeeHighlights />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold">
              <Logo />
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close menu Modal"
            ></button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-4 flex flex-col space-y-4 w-full">
              <Link
                href="#"
                className="hidden lg:block bg-primary text-white hover:bg-primary/90 px-6 py-2 rounded-full text-base font-medium"
                onClick={() => setIsSignInOpen(true)}
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="hidden lg:block bg-purple-100 text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full text-base font-medium"
                onClick={() => setIsSignUpOpen(true)}
              >
                Sign Up
              </Link>
              <Link
                href="#"
                className="hidden lg:block bg-yellow-100 text-yellow-900 hover:bg-yellow-300 hover:text-black px-6 py-2 rounded-full text-base font-medium"
                onClick={() => setIsStudentOpen(true)}
              >
                Student
              </Link>
              <Link
                href="#"
                className="hidden lg:block bg-green-100 text-green-900 hover:bg-green-300 hover:text-black px-6 py-2 rounded-full text-base font-medium"
                onClick={() => setIsEmployeeOpen(true)}
              >
                Employee
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
