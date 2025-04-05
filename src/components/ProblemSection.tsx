import { Clock, AlertTriangle, ArrowDown, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import React from "react";

const ProblemSection = () => {
  const problems = [
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: "Missed opportunities and lost leads",
      description:
        "Potential clients slip away while you're busy with other tasks or sleeping.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-purple-500" />,
      title: "Poor first impressions with potential clients",
      description:
        "Manual processes create delays that damage client confidence in your business.",
    },
    {
      icon: <ArrowDown className="w-6 h-6 text-purple-500" />,
      title: "Time lost on tasks AI can handle better",
      description:
        "Your creativity is wasted on repetitive administrative work.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Competitors are already automating the basics",
      description:
        "The future of business is here - those who don't adapt will be left behind.",
    },
  ];

  const problemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("animate-out");
            entry.target.classList.add("animate");
          } else {
            // Only animate out if it was previously animated in
            if (entry.target.classList.contains("animate")) {
              entry.target.classList.remove("animate");
              entry.target.classList.add("animate-out");
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    problemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="relative bg-black py-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="md:max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
              Don't delay your automation — the future won't wait.
            </h2>
          </div>

          {/* Problems grid */}
          <div className="grid gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                ref={(el) => (problemRefs.current[index] = el)}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
              >
                {/* Icon side */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-square flex items-center justify-center border border-white/10 bg-gradient-to-br from-black/50 via-purple-500/5 to-black/50 rounded-lg p-8 hover:border-purple-500/40 transition-all group">
                    <div className="p-6 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 group-hover:from-purple-500/20 group-hover:to-indigo-500/20 transition-all">
                      {React.cloneElement(problem.icon as React.ReactElement, {
                        className:
                          "w-12 h-12 text-purple-400 group-hover:text-purple-300 transition-colors",
                      })}
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`w-full md:w-2/3 ${
                    index % 2 === 1 ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                  <p className="text-lg text-white/70">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom quote */}
          <div className="mt-16 border-l-4 border-purple-500 pl-6">
            <p className="text-xl text-white/90 italic">
              AI is no longer optional. The businesses that automate the
              beginning will lead the next era of innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
