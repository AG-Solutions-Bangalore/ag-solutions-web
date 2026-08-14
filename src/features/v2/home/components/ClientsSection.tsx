const clients = [
  {
    name: "indiamart",
    content: (
      <span className="text-lg font-black tracking-tight text-red-600">
        indiamart
      </span>
    ),
  },
  {
    name: "justdial",
    content: (
      <span className="text-lg font-black tracking-tight text-blue-600">
        Just<span className="text-orange-500">dial</span>
      </span>
    ),
  },
  {
    name: "paytm",
    content: (
      <span className="text-xl font-black tracking-tighter text-[#00b9f1]">
        Pay<span className="text-[#002e6e]">tm</span>
      </span>
    ),
  },
  {
    name: "policyx",
    content: (
      <span className="text-base font-extrabold tracking-tight text-blue-900">
        PolicyX<span className="text-sky-500">.com</span>
      </span>
    ),
  },
  {
    name: "lenskart",
    content: (
      <span className="text-lg font-black lowercase tracking-tighter text-slate-800">
        lenskart
      </span>
    ),
  },
  {
    name: "myteam11",
    content: (
      <span className="text-base font-black tracking-widest text-blue-700">
        MYTEAM11
      </span>
    ),
  },
];

function ClientsSection() {
  // Duplicate array 4x for continuous seamless infinite marquee looping across all screens
  const marqueeItems = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="bg-white py-12 md:py-16 border-t border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ag-yellow">
            <span>· · ·</span>
            <span>OUR CLIENTS</span>
            <span>· · ·</span>
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-ag-dark md:text-3xl">
            Trusted by Businesses Worldwide
          </h2>
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track Container */}
      <div className="relative mt-10 overflow-hidden py-4">
        {/* Left & Right Fade Edge Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Continuous Marquee Motion */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-16">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-200"
            >
              {client.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
