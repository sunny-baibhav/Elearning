import { HeaderItem } from "@/types/menu";
export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Mentor", href: "/#mentor" },
  { label: "Group", href: "/#portfolio" },
{ label: "Student", href: "/student-highlight" },   // ✅ Full page route
  { label: "Employee", href: "/employee-highlight" },
  //  { label: "Student", href: `${baseUrl}/student-highlight` },
  // { label: "Employee", href: `${baseUrl}/employee-highlight` },


  // { label: "Docs", href: "/documentation" },
];
