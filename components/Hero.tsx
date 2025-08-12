import Link from 'next/link';

function OutlineIcon() {
  return (
    <svg className="mx-auto mb-10 h-24 w-24 text-blue-600" viewBox="0 0 200 120" fill="none">
      <rect x="10" y="20" width="180" height="80" rx="12" stroke="currentColor" strokeWidth="3"/>
      <rect x="60" y="55" width="80" height="20" rx="6" stroke="currentColor" strokeWidth="3"/>
      <circle cx="24" cy="34" r="3" fill="currentColor"/>
      <circle cx="176" cy="34" r="3" fill="currentColor"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <OutlineIcon />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Custom-Coded Websites Built to Convert
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Fast, responsive websites tailored for service pros, creatives, and growing businesses —
          built from scratch with zero builder fluff.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02]"
          >
            Start My Website
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
          >
            View Services & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
