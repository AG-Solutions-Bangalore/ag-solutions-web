
import { motion } from "framer-motion";
import SEO from "@/components/seo/SEO";
import FlipButton from "@/components/ui/FlipButton";

export default function NotFoundPageV2() {
  return (
    <>
      <SEO
        title="Page Not Found - AG Solutions"
        description="The requested AG Solutions page could not be found."
      />
      <div className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-wide text-accent-pink uppercase">
            404 Error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-accent-dark sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-accent-muted max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <FlipButton to="/" variant="teal" className="px-6 py-3">
              Go to Homepage
            </FlipButton>
            <FlipButton to="/services" variant="pink" className="px-6 py-3">
              Our Services
            </FlipButton>
          </div>
        </motion.div>
      </div>
    </>
  );
}
