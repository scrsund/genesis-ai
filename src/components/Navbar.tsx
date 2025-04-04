import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#"
            className="text-2xl font-bold text-white flex items-center gap-2 group relative px-2 py-2"
          >
            <div className="absolute inset-0 bg-white/5 rounded-lg backdrop-blur-sm group-hover:bg-white/10 transition-colors"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>
            <div className="relative flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-60 group-hover:opacity-85 transition-opacity"></div>
                <span className="w-2 h-2 rounded-full bg-white relative z-10 block group-hover:scale-110 transition-transform"></span>
              </div>
              <span className="font-['DM_Sans'] font-black tracking-wide text-white/90 relative">
                Genesis
                <span className="text-white">AI</span>
              </span>
            </div>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#problem"
            className="text-white/60 hover:text-white transition-colors relative group"
          >
            Problem
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500/50 to-purple-500/50 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#solution"
            className="text-white/60 hover:text-white transition-colors relative group"
          >
            Solution
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500/50 to-purple-500/50 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#foundation"
            className="text-white/60 hover:text-white transition-colors relative group"
          >
            Foundation Kit
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500/50 to-purple-500/50 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#vision"
            className="text-white/60 hover:text-white transition-colors relative group"
          >
            Vision
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500/50 to-purple-500/50 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all">
            Book a Demo
          </Button>
        </div>

        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5 p-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#problem"
              className="text-white/60 hover:text-white transition-colors py-2 relative group"
              onClick={() => setMobileMenuOpen(false)}
            >
              Problem
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500/50 to-purple-500/50 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#solution"
              className="text-white/60 hover:text-white transition-colors py-2 relative group"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solution
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500/50 to-purple-500/50 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#foundation"
              className="text-white/60 hover:text-white transition-colors py-2 relative group"
              onClick={() => setMobileMenuOpen(false)}
            >
              Foundation Kit
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500/50 to-purple-500/50 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#vision"
              className="text-white/60 hover:text-white transition-colors py-2 relative group"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vision
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-indigo-500/50 to-purple-500/50 group-hover:w-full transition-all duration-300"></span>
            </a>
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
