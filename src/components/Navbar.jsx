import { Menu, ShieldCheck, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-sky-500 via-cyan-400 to-blue-600 shadow shadow-cyan-500/30">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <span className="text-white/90 font-semibold tracking-tight">VanishAuth</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#code" className="hover:text-white transition">Code</a>
          <a href="#trust" className="hover:text-white transition">Trust</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#waitlist" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 hover:from-indigo-400 hover:to-cyan-300 px-4 py-2 rounded-md shadow-lg shadow-cyan-500/20 transition">
            Get early access <ArrowRight className="h-4 w-4" />
          </a>
          <button className="md:hidden text-white/80 p-2 rounded hover:bg-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
