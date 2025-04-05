import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const VisionSection = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation
            entry.target.classList.remove("translate-x-[200px]", "opacity-0");
            entry.target.classList.add(
              "translate-x-[var(--final-translate)]",
              "opacity-100"
            );
          } else {
            // Reset animation without transition
            entry.target.classList.add("duration-0");
            entry.target.classList.add("translate-x-[200px]", "opacity-0");
            entry.target.classList.remove(
              "translate-x-[var(--final-translate)]",
              "opacity-100"
            );
            // Force a reflow to apply the changes immediately
            void (entry.target as HTMLElement).offsetWidth;
            // Restore transition duration
            entry.target.classList.remove("duration-0");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.add("translate-x-[200px]", "opacity-0");
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className="relative bg-black py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.1),transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(124,58,237,0.1),transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left side - Main heading */}
          <div className="md:col-span-5 md:sticky md:top-20">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">
              Automate the foundation.
              <span className="block mt-2 text-purple-500">
                Build the future.
              </span>
            </h2>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-purple-500 text-white hover:bg-purple-600 font-medium"
              >
                Start Building
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side - Vision cards */}
          <div className="md:col-span-7">
            <div className="space-y-8">
              {/* Vision Card 1 */}
              <div
                ref={(el) => (cardRefs.current[0] = el)}
                className="group border border-white/10 bg-black/50 p-8 rounded-lg hover:border-purple-500/40 transition-[transform,opacity] duration-[2000ms] ease-out"
                style={
                  {
                    transitionDelay: "0.1s",
                    "--final-translate": "0px",
                    transitionProperty: "transform, opacity",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "2000ms, 1000ms",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-12 bg-purple-500/50 rounded-full"></div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    For the Visionaries
                  </h3>
                </div>
                <p className="text-lg text-white/80">
                  We believe the best ideas deserve more than admin work.
                  Genesis exists to clear the path for visionaries, creators,
                  and builders.
                </p>
              </div>

              {/* Vision Card 2 */}
              <div
                ref={(el) => (cardRefs.current[1] = el)}
                className="group border border-white/10 bg-black/50 p-8 rounded-lg hover:border-purple-500/40 transition-[transform,opacity] duration-[2000ms] ease-out"
                style={
                  {
                    transitionDelay: "0.2s",
                    "--final-translate": isMobile ? "0px" : "2rem",
                    transitionProperty: "transform, opacity",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "2000ms, 1000ms",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-12 bg-purple-500/50 rounded-full"></div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Beyond Automation
                  </h3>
                </div>
                <p className="text-lg text-white/80">
                  By automating the tasks that slow you down, we empower you to
                  focus on what truly matters — creating something
                  extraordinary.
                </p>
              </div>

              {/* Vision Card 3 */}
              <div
                ref={(el) => (cardRefs.current[2] = el)}
                className="group border border-white/10 bg-black/50 p-8 rounded-lg hover:border-purple-500/40 transition-[transform,opacity] duration-[2000ms] ease-out"
                style={
                  {
                    transitionDelay: "0.3s",
                    "--final-translate": isMobile ? "0px" : "4rem",
                    transitionProperty: "transform, opacity",
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDuration: "2000ms, 1000ms",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-1 w-12 bg-purple-500/50 rounded-full"></div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    Your Future Begins
                  </h3>
                </div>
                <p className="text-lg text-white/80">
                  This is where your future begins. Let AI lay the groundwork,
                  while you focus on building your breakthrough vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
