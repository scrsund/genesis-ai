import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube } from "lucide-react";

const HeroSection = () => {
  const shapes = [
    {
      top: "10%",
      left: "5%",
      size: "300px",
      color: "bg-indigo-600/30",
      delay: "0s",
    },
    {
      top: "60%",
      left: "80%",
      size: "200px",
      color: "bg-purple-500/20",
      delay: "2s",
    },
    {
      bottom: "10%",
      left: "30%",
      size: "250px",
      color: "bg-pink-500/20",
      delay: "4s",
    },
  ];

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden">
      {/* Animated shapes */}
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`shape-blob ${shape.color}`}
          style={{
            top: shape.top,
            left: shape.left,
            bottom: shape.bottom,
            width: shape.size,
            height: shape.size,
            animationDelay: shape.delay,
          }}
        />
      ))}

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-purple-400/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-4 border border-white/5 hover:border-white/30 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 group-hover:animate-ping blink-animation"></span>
            <span className="text-xs font-medium tracking-wider uppercase text-white/80 group-hover:text-white transition-colors">
              Now Automating Client Experiences
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-8 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-in-up order-1 md:order-1">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                automate
              </span>{" "}
              your foundation.
            </h1>

            <p
              className="text-lg text-white/70 mb-8 max-w-lg opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Genesis installs an AI-powered assistant that automates your
              client intake and appointment booking — so you can focus on
              building your vision.
            </p>

            <div
              className="hidden md:flex flex-row gap-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 font-medium"
              >
                Try Genesis Live
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/10 text-white hover:bg-white/5"
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Video */}
          <div
            className="border border-white/5 rounded-xl p-1 shadow-xl bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent opacity-0 animate-fade-in-up order-2"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="relative pb-[56.25%] overflow-hidden rounded-lg bg-black/30">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/xgNLpxTaBKY?autoplay=0&rel=0&modestbranding=1"
                title="Genesis AI Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Mobile-only Buttons */}
          <div
            className="flex md:hidden flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up order-3"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 font-medium"
            >
              Try Genesis Live
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/10 text-white hover:bg-white/5"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Bot Widget */}
      <div className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center cursor-pointer shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white/90"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
