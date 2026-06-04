import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "./HeaderIcons";
import NavigationDropdown from "./NavigationDropdown";
import { navItems } from "./navigation";

type DesktopNavigationProps = {
  isCompact: boolean;
};

function DesktopNavigation({ isCompact }: DesktopNavigationProps) {
  return (
    <div
      className={`nav-desktop-menu flex h-full items-center text-[16px] font-normal text-[#1d2d3b] transition-[gap] duration-500 ease-out max-[1080px]:hidden ${
        isCompact ? "nav-desktop-menu-compact" : ""
      }`}
    >
      {navItems.map((item) => {
        const hasDropdown = Boolean(item.children?.length);

        return (
          <div
            key={item.path}
            className="group relative flex h-full items-center"
          >
            <NavLink
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-desktop-link flex items-center whitespace-nowrap rounded-full py-2 no-underline transition-[color,padding,gap] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-4 ${
                  isCompact ? "nav-desktop-link-compact" : ""
                } ${
                  isActive
                    ? "text-[#1289bc]"
                    : "text-[#1d2d3b] hover:text-[#1289bc]"
                }`
              }
            >
              <span>{item.label}</span>
              {hasDropdown && (
                <ChevronDownIcon className="mt-0.5 text-slate-400 transition-transform group-hover:rotate-180 group-hover:text-[#1289bc]" />
              )}
            </NavLink>
            {hasDropdown && (
              <NavigationDropdown
                item={item}
                align={item.label === "Products" ? "right" : "center"}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DesktopNavigation;
