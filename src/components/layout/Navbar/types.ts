export type ServiceIconName = "web" | "mobile" | "desktop";
export type ProductIconName = "export" | "marketing" | "grow";

export type NavSubItem = {
  label: string;
  path: string;
  description: string;
  badge: string;
  accentClass: string;
  icon?: ServiceIconName;
  productIcon?: ProductIconName;
};

export type NavItem = {
  label: string;
  path: string;
  children?: readonly NavSubItem[];
};
