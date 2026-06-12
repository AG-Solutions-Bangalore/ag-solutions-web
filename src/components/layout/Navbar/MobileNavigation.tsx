import { NavLink, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "./HeaderIcons";
import ProductMenuIcon from "./ProductMenuIcon";
import ServiceMenuIcon from "./ServiceMenuIcon";
import { navItems } from "./navigation";
import { navbarContainerClass } from "./styles";
import type { NavItem } from "./types";
import { preloadRoute } from "@/routes/lazyRoutes";

type MobileNavigationProps = {
  isOpen: boolean;
  onNavigate: () => void;
};

function isSectionActive(item: NavItem, pathname: string) {
  return pathname === item.path || pathname.startsWith(`${item.path}/`);
}

function MobileNavigation({ isOpen, onNavigate }: MobileNavigationProps) {
  const { pathname } = useLocation();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute left-0 top-full z-40 w-full border-t border-slate-200 bg-white shadow-[0_18px_35px_rgba(17,35,50,0.16)] min-[1081px]:hidden">
      <div
        className={`${navbarContainerClass} flex max-h-[calc(100vh-86px)] flex-col overflow-y-auto py-4`}
      >
        {navItems.map((item) => {
          const hasDropdown = Boolean(item.children?.length);
          const activeSection = isSectionActive(item, pathname);
          const isProducts = item.label === "Products";

          if (!hasDropdown) {
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={onNavigate}
                onFocus={() => preloadRoute(item.path)}
                className={({ isActive }) =>
                  `rounded-[8px] px-4 py-3 text-[15px] font-bold no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] ${
                    isActive ? "bg-slate-100 text-[#1289bc]" : "text-[#1d2d3b]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          }

          return (
            <details
              key={item.path}
              className="group rounded-[8px]"
              open={activeSection}
            >
              <summary
                className={`flex cursor-pointer list-none items-center justify-between rounded-[8px] px-4 py-3 text-[15px] font-bold [&::-webkit-details-marker]:hidden ${
                  activeSection
                    ? "bg-slate-100 text-[#1289bc]"
                    : "text-[#1d2d3b]"
                }`}
              >
                <span>{item.label}</span>
                <ChevronDownIcon className="text-slate-400 group-open:rotate-180" />
              </summary>
              <div className="space-y-1 px-2 pb-3 pt-1">
                <NavLink
                  to={item.path}
                  onClick={onNavigate}
                  onFocus={() => preloadRoute(item.children?.[0]?.path ?? item.path)}
                  className={({ isActive }) =>
                    `block rounded-[7px] px-3 py-2 text-sm font-bold no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] ${
                      isActive
                        ? "bg-slate-100 text-[#1289bc]"
                        : "text-slate-600"
                    }`
                  }
                >
                  {item.label} Overview
                </NavLink>
                {item.children?.map((child) => (
                  <NavLink
                    key={child.path}
                    to={child.path}
                    onClick={onNavigate}
                    onFocus={() => preloadRoute(child.path)}
                    className={({ isActive }) =>
                      `relative flex items-center gap-3 overflow-hidden rounded-[7px] px-3 py-2.5 no-underline before:absolute before:bottom-2 before:left-0 before:top-2 before:w-1 before:origin-center before:scale-y-0 before:rounded-r-full before:bg-[#1289bc] before:transition-transform before:duration-200 hover:before:scale-y-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:before:scale-y-100 ${
                        isActive
                          ? "bg-slate-100 text-[#1289bc] before:scale-y-100"
                          : "text-[#1d2d3b]"
                      }`
                    }
                  >
                    <span
                      className={
                        isProducts
                          ? "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#1d2d3b]/20 text-[11px] font-black bg-transparent text-[#1d2d3b]"
                          : `grid h-9 w-9 shrink-0 place-items-center rounded-[7px] text-[11px] font-black ${child.accentClass}`
                      }
                    >
                      {child.icon && (
                        <ServiceMenuIcon
                          name={child.icon}
                          className="h-7 w-7 shrink-0 fill-current"
                        />
                      )}
                      {child.productIcon && (
                        <ProductMenuIcon
                          name={child.productIcon}
                          className={
                            isProducts
                              ? "h-5 w-5 shrink-0 fill-current text-[#1d2d3b]"
                              : "h-7 w-7 shrink-0 fill-current"
                          }
                        />
                      )}
                      {!child.icon && !child.productIcon && child.badge}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold">
                        {child.label}
                      </span>
                      {!isProducts && (
                        <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                          {child.description}
                        </span>
                      )}
                    </span>
                  </NavLink>
                ))}
              </div>
            </details>
          );
        })}
        {/* Get In Touch Link */}
        <div className="mt-4 px-4 pb-2">
          <NavLink
            to="/contacts"
            onClick={onNavigate}
            onFocus={() => preloadRoute("/contacts")}
            className="flex w-full items-center justify-center rounded-[8px] bg-[#1289bc] px-4 py-3 text-center text-[15px] font-bold text-white no-underline transition-colors hover:bg-[#0f77a5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-2"
          >
            Get In Touch
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default MobileNavigation;
