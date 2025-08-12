import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <span className="text-xl font-bold text-[#1A2B4D] group-hover:text-[#2A3B5D] transition-colors">
                <span className="font-bold">Vicrod</span>
                <span className="font-normal">Tech</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-[#1A2B4D] font-medium underline decoration-2 underline-offset-4 hover:text-[#2A3B5D] transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-[#1A2B4D] font-medium hover:text-[#475569] transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1A2B4D] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/services" 
              className="text-[#1A2B4D] font-medium hover:text-[#475569] transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1A2B4D] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/projects" 
              className="text-[#1A2B4D] font-medium hover:text-[#475569] transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1A2B4D] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-[#1A2B4D] font-medium hover:text-[#475569] transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1A2B4D] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-[#1A2B4D] hover:text-[#475569] transition-colors p-2 rounded-lg hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
