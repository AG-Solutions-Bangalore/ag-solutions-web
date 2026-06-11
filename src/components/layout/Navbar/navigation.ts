import type { NavItem } from "./types";


export const navItems: readonly NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      {
        label: "Web Development",
        path: "/web-development",
        description: "Responsive websites, portals, and business platforms.",
        badge: "WD",
        accentClass: "bg-[#e7f7ff] text-[#1289bc]",
        icon: "web",
      },
      {
        label: "Mobile App Development",
        path: "/mobile-app-development",
        description: "Android and cross-platform apps built for daily use.",
        badge: "MA",
        accentClass: "bg-[#fff4d6] text-[#bd7b00]",
        icon: "mobile",
      },
      {
        label: "Desktop Applications",
        path: "/desktop-applications",
        description: "Reliable internal tools for teams and operations.",
        badge: "DA",
        accentClass: "bg-[#eef9e7] text-[#4f941a]",
        icon: "desktop",
      },
    ],
  },
  {
    label: "Products",
    path: "/products",
    children: [
      {
        label: "Export Documentation",
        path: "/products/export-documentation",
        description: "Documentation and management tools for export teams.",
        badge: "EX",
        accentClass: "bg-[#eaf0ff] text-[#435fc2]",
        productIcon: "export",
      },
      {
        label: "EASE Marketing",
        path: "/products/ease-marketing",
        description: "Marketing workflows made easier to run and track.",
        badge: "EM",
        accentClass: "bg-[#ffeaf0] text-[#bf3159]",
        productIcon: "marketing",
      },
      {
        label: "Grow Together",
        path: "/products/grow-together",
        description: "A simple collaboration space for business growth.",
        badge: "GT",
        accentClass: "bg-[#e9fbf3] text-[#13875f]",
        productIcon: "grow",
      },
    ],
  },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contacts", path: "/contacts" },
];
