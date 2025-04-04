import { Check } from "lucide-react";

const ValueSection = () => {
  const features = [
    {
      title: "Setup & Design",
      items: [
        "Full setup, no code needed",
        "Custom design to match your brand",
        "Styling optimized for conversion",
      ],
    },
    {
      title: "Integration",
      items: [
        "CRM integration",
        "Automated lead capture",
        "Seamless appointment booking",
      ],
    },
    {
      title: "Support & Updates",
      items: [
        "Continuous AI updates",
        "Dedicated support",
        "Performance monitoring",
      ],
    },
  ];

  return (
    <section
      id="foundation"
      className="relative bg-black py-20 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything you need to launch with AI in 7 days
          </h2>
          <div className="inline-block py-2 px-6 rounded-full border border-purple-500/30 bg-purple-500/10 animate-pulse-light">
            <span className="text-sm font-medium">
              7-Day Implementation Guarantee
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((category, idx) => (
            <div key={idx} className="group">
              {/* Category Header */}
              <div className="border border-white/10 bg-black/50 p-6 rounded-lg mb-6 group-hover:border-purple-500/40 transition-all">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>

              {/* Category Features */}
              <div className="space-y-4">
                {category.items.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 border border-white/10 bg-black/50 p-4 rounded-lg hover:border-purple-500/40 transition-colors"
                  >
                    <div className="mt-1 p-1 rounded-full bg-purple-500/20">
                      <Check className="w-4 h-4 text-purple-500" />
                    </div>
                    <p className="text-base text-white/90">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
