import { useEffect, useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import BrandLogo from "./BrandLogo";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import TopBar from "./TopBar";
import DrawerButton from "./DrawerButton";
import RequirementDrawer from "./RequirementDrawer";
import { navbarContainerClass } from "./styles";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isNavCompact, setIsNavCompact] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    function applyNavSpacing(shouldCompact: boolean) {
      document.documentElement.dataset.navCompact = shouldCompact
        ? "true"
        : "false";

      document
        .querySelectorAll(".nav-desktop-menu")
        .forEach((element) =>
          element.classList.toggle("nav-desktop-menu-compact", shouldCompact),
        );
      document
        .querySelectorAll(".nav-desktop-link")
        .forEach((element) =>
          element.classList.toggle("nav-desktop-link-compact", shouldCompact),
        );

      setIsNavCompact((current) =>
        current === shouldCompact ? current : shouldCompact,
      );
    }

    function updateNavSpacing() {
      frame = 0;
      const shouldCompact = window.scrollY > 24;

      applyNavSpacing(shouldCompact);
    }

    function scheduleNavSpacingUpdate() {
      if (frame) {
        return;
      }

      frame = requestAnimationFrame(updateNavSpacing);
    }

    const timeout = window.setTimeout(scheduleNavSpacingUpdate, 0);
    const interval = window.setInterval(scheduleNavSpacingUpdate, 200);

    window.addEventListener("scroll", scheduleNavSpacingUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleNavSpacingUpdate);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", scheduleNavSpacingUpdate);
      window.removeEventListener("resize", scheduleNavSpacingUpdate);
    };
  }, []);

  return (
    <>
      <TopBar />
      <nav
        id="site-header"
        className="site-header navigation navigation-justified sticky-top navigation-landscape sticky top-0 z-[999] bg-white/95"
        aria-label="Main navigation"
      >
        <div
          className={`${navbarContainerClass} relative flex h-[86px] items-center justify-between`}
        >
          <BrandLogo />
          <DesktopNavigation isCompact={isNavCompact} />
          <div className="hidden h-11 w-11 place-items-center rounded-full bg-[#132d3e] text-white transition-colors hover:bg-[#1289bc] focus-within:ring-2 focus-within:ring-[#1289bc] focus-within:ring-offset-4 max-[1080px]:grid">
            <Hamburger
              toggled={isMobileOpen}
              toggle={setIsMobileOpen}
              size={22}
              color="#ffffff"
              label={isMobileOpen ? "Close navigation" : "Open navigation"}
            />
          </div>

          {/* Drawer Button hanging off the bottom of the navbar */}
          <div className="absolute right-6 max-[640px]:right-3 xl:right-0 top-full -translate-y-1/2 z-[1000]">
            <DrawerButton isOpen={isDrawerOpen} isNavbarCompact={isNavCompact} onClick={() => setIsDrawerOpen(true)} />
          </div>
        </div>
        <div id="mobile-navigation">
          <MobileNavigation
            isOpen={isMobileOpen}
            onNavigate={() => setIsMobileOpen(false)}
          />
        </div>
      </nav>
      <RequirementDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}

export default Navbar;
