const Footer = () => {
  return (
    <footer className="relative bg-black py-12 overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(79,70,229,0.03),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <a
              href="#"
              className="flex items-center gap-2 group mb-4 relative px-4 py-2 w-fit"
            >
              <div className="absolute inset-0 bg-white/5 rounded-lg backdrop-blur-sm group-hover:bg-white/10 transition-colors"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>
              <div className="relative flex items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-60 group-hover:opacity-85 transition-opacity"></div>
                  <span className="w-2 h-2 rounded-full bg-white relative z-10 block group-hover:scale-110 transition-transform"></span>
                </div>
                <span className="text-xl font-bold font-display tracking-wider">
                  Genesis
                  <span className="text-white">AI</span>
                </span>
              </div>
            </a>
            <p className="text-white/60 max-w-sm">
              Empowering businesses with AI automation. Transform your client
              experience and focus on what truly matters.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Guides
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 GenesisAI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
