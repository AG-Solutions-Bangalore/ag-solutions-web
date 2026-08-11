import type { NavItem } from "./types";


export const navItems: readonly NavItem[] = [
  { label: "Home", path: "/", title: "AG Solutions Home" },
  { label: "About", path: "/about", title: "About AG Solutions" },
  {
    label: "Services",
    path: "/services",
    title: "AG Solutions Services",
    children: [
      {
        label: "Web Development",
        path: "/web-development",
        title: "Web Development Services",
        description: "Responsive websites, portals, and business platforms.",
        badge: "WD",
        accentClass: "bg-[#e7f7ff] text-[#1289bc]",
        icon: "web",
      },
      {
        label: "Mobile App Development",
        path: "/mobile-app-development",
        title: "Mobile App Development Services",
        description: "Android and cross-platform apps built for daily use.",
        badge: "MA",
        accentClass: "bg-[#fff4d6] text-[#bd7b00]",
        icon: "mobile",
      },
      {
        label: "Desktop Applications",
        path: "/desktop-applications",
        title: "Desktop Application Development Services",
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
    title: "AG Solutions Products",
  },
  { label: "Portfolio", path: "/portfolio", title: "AG Solutions Portfolio" },
  { label: "Blogs", path: "/blogs", title: "AG Solutions Blogs" },
  { label: "Contacts", path: "/contacts", title: "Contact AG Solutions" },
];
