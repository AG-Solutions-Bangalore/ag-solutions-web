import { Link } from "react-router-dom";
import { SEO } from "@/components/seo";
import { PageHero, Section } from "@/components/layout";

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found - AG Solutions"
        description="The requested AG Solutions page could not be found."
        robots="noindex, follow"
      />
      <PageHero
        title="Page Not Found"
        bgImage="/images/pattern-bg-grey.jpg"
        bgColorClass="bg-[#fafafa]"
        textColorClass="text-[#1b2c38]"
        breadcrumbs={[
          { label: "Homepage", path: "/" },
          { label: "Page Not Found" },
        ]}
      />
      <Section
        className="bg-white py-20 text-center text-[#1b2c38] max-[760px]:py-14"
        ariaLabel="Page not found guidance"
      >
        <p className="mx-auto max-w-[620px] text-base leading-relaxed text-[#4f5a62]">
          The page you are looking for may have moved. Continue with our core
          services or explore recent work from AG Solutions.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/web-development"
            className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#1289bc] px-6 text-sm font-bold text-white no-underline transition-colors hover:bg-[#0f77a5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-2"
          >
            Web Development
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex h-12 items-center justify-center rounded-[8px] border-2 border-[#1289bc] px-6 text-sm font-bold text-[#1289bc] no-underline transition-colors hover:bg-[#1289bc] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1289bc] focus-visible:ring-offset-2"
          >
            Portfolio
          </Link>
        </div>
      </Section>
    </>
  );
}
