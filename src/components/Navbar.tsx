import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-display tracking-wider">Genesis<span className="text-primary">AI</span></span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#problem" className="text-white/80 hover:text-white transition-colors">Problem</a>
          <a href="#solution" className="text-white/80 hover:text-white transition-colors">Solution</a>
          <a href="#foundation" className="text-white/80 hover:text-white transition-colors">Foundation Kit</a>
          <a href="#vision" className="text-white/80 hover:text-white transition-colors">Vision</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            className="bg-primary text-black hover:bg-primary/90"
          >
            Book a Demo
          </Button>
        </div>
        
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a 
              href="#problem" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Problem
            </a>
            <a 
              href="#solution" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solution
            </a>
            <a 
              href="#foundation" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Foundation Kit
            </a>
            <a 
              href="#vision" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vision
            </a>
            <div className="pt-2">
              <Button 
                className="bg-primary text-black hover:bg-primary/90 w-full"
              >
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
