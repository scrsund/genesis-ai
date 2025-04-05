import { Clock, AlertTriangle, ArrowDown, Users } from "lucide-react";

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
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Icon side */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-square flex items-center justify-center border border-white/10 bg-black/50 rounded-lg p-8 hover:border-purple-500/40 transition-all">
                    <div className="p-4 rounded-full bg-purple-500/10">
                      {problem.icon}
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
