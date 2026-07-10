import { Link } from "react-router-dom";

function BrandLogo() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-2.5 no-underline"
      aria-label="AG Solutions home"
    >
      <img
        className="h-[50px] w-[74px] object-contain"
        src="/images/logo.png"
        alt="AG Solutions Logo"
        title="AG Solutions"
      />
      <span className="leading-none text-[#1a2936]">
        <span className="block text-[28px] font-normal tracking-normal max-[480px]:text-[24px]">
          <span className="font-black">AG</span>Solutions
        </span>
        <span className="mt-1 block text-[10px] font-medium uppercase text-[#68737c]">
          Single Click Solution
        </span>
      </span>
    </Link>
  );
}

export default BrandLogo;
