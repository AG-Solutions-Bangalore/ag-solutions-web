import type { ButtonHTMLAttributes } from "react";

type DrawerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean;
  isNavbarCompact: boolean;
};

export default function DrawerButton({ isOpen, isNavbarCompact, ...props }: DrawerButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      className={`group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-[4px] border-white bg-[#5c60f5] text-white transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isNavbarCompact
          ? "scale-0 opacity-0 pointer-events-none"
          : "scale-100 opacity-100 hover:scale-100 active:scale-95 hover:bg-[#4a4edb]"
      } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5c60f5] focus-visible:ring-offset-2`}
      {...props}
    >
      <div className="flex flex-col items-start gap-1.5">
        <span className="h-[2.5px] w-3.5 rounded-full bg-white transition-all duration-300 ease-out group-hover:w-6" />
        <span className="h-[2.5px] w-6 rounded-full bg-white transition-all duration-300 ease-out" />
        <span className="h-[2.5px] w-[18px] rounded-full bg-white transition-all duration-300 ease-out group-hover:w-6" />
      </div>
    </button>
  );
}
