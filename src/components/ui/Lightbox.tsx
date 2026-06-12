import { useEffect, useRef } from "react";

interface LightboxProps {
  isOpen: boolean;
  image: string;
  title: string;
  subtitle?: string;
  onClose: () => void;
}

export default function Lightbox({ isOpen, image, title, subtitle, onClose }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key close
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="animate-fadeIn fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-xs md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image preview`}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        className="absolute right-6 top-6 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close preview"
      >
        <svg
          className="h-6 w-6 fill-none stroke-current stroke-2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="animate-scaleUp relative max-h-[85vh] max-w-[95vw] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={title}
          className="max-h-[70vh] max-w-full rounded-lg border border-white/10 object-contain shadow-2xl"
          decoding="async"
        />

        <div className="mt-4 text-center text-white">
          <h3 className="m-0 text-xl font-bold tracking-tight">{title}</h3>
          {subtitle && (
            <p className="m-0 mt-1.5 text-sm font-semibold uppercase tracking-wider text-slate-300">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
