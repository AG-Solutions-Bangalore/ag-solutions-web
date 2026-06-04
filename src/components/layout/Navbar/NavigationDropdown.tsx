import { NavLink } from "react-router-dom";
import { ArrowRightIcon } from "./HeaderIcons";
import ProductMenuIcon from "./ProductMenuIcon";
import ServiceMenuIcon from "./ServiceMenuIcon";
import type { NavItem } from "./types";

type NavigationDropdownProps = {
  item: NavItem;
  align?: "center" | "right";
};

function NavigationDropdown({ item, align = "center" }: NavigationDropdownProps) {
  if (!item.children?.length) {
    return null;
  }

  const positionClass =
    align === "right" ? "right-0" : "left-1/2 -translate-x-1/2";

  return (
    <div
      className={`invisible absolute top-full z-40 w-[356px] pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${positionClass}`}
    >
      <div className="rounded-[8px] border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(17,35,50,0.18)]">
        <div className="absolute top-2 h-4 w-4 rotate-45 border-l border-t border-slate-200 bg-white max-[1080px]:hidden left-1/2 -translate-x-1/2" />
        <div className="relative space-y-1">
          {item.children.map((child) => (
            <NavLink
              key={child.path}
              to={child.path}
              className={({ isActive }) =>
                `group/item relative flex items-center gap-3 overflow-hidden rounded-[7px] px-3 py-3 no-underline transition-colors before:absolute before:bottom-2 before:left-0 before:top-2 before:w-1 before:origin-center before:scale-y-0 before:rounded-r-full before:bg-[#1289bc] before:transition-transform before:duration-200 hover:before:scale-y-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:before:scale-y-100 ${
                  isActive
                    ? "bg-slate-100 text-[#1289bc] before:scale-y-100"
                    : "text-[#1d2d3b] hover:bg-slate-50"
                }`
              }
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-[7px] text-xs font-black ${child.accentClass}`}
              >
                {child.icon && <ServiceMenuIcon name={child.icon} />}
                {child.productIcon && <ProductMenuIcon name={child.productIcon} />}
                {!child.icon && !child.productIcon && child.badge}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-bold leading-tight">{child.label}</span>
                <span className="mt-1 block text-[12px] leading-snug text-slate-500">
                  {child.description}
                </span>
              </span>
              <ArrowRightIcon className="shrink-0 text-slate-300 transition-transform group-hover/item:translate-x-0.5 group-hover/item:text-[#1289bc]" />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavigationDropdown;
