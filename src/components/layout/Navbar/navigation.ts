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
  },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contacts", path: "/contacts" },
];
