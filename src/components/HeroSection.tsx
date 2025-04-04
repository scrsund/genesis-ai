import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube } from "lucide-react";

const HeroSection = () => {
  const shapes = [
    { top: "10%", left: "5%", size: "300px", color: "bg-primary", delay: "0s" },
    {
      top: "60%",
      left: "80%",
      size: "200px",
      color: "bg-purple-500",
      delay: "2s",
    },
    {
      bottom: "10%",
      left: "30%",
      size: "250px",
      color: "bg-blue-500",
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
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/5 to-purple-500/5 backdrop-blur-sm px-5 py-2.5 rounded-full mb-4 border border-white/5 hover:border-primary/20 transition-colors group">
            <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:animate-ping"></span>
            <span className="text-xs font-medium tracking-wider uppercase text-white/70 group-hover:text-primary transition-colors">
              Now Automating Client Experiences
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-8 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6">
              We <span className="text-primary">automate</span> your foundation.
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Genesis installs an AI-powered assistant that automates your
              client intake and appointment booking — so you can focus on
              building your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-medium"
              >
                Try Genesis Live
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="border border-white/10 rounded-xl p-1 shadow-xl">
            <div className="relative pb-[56.25%] overflow-hidden rounded-lg bg-black/50">
              {/* Placeholder for video */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Youtube className="w-8 h-8 text-primary" />
                </div>
                <p className="mt-4 text-white/70 text-center">
                  Watch how Genesis AI works
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bot Widget */}
      <div className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center cursor-pointer shadow-lg animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-black"
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
