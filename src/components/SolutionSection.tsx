import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const SolutionSection = () => {
  const features = [
    "Captures leads & books appointments automatically",
    "Syncs directly with your CRM",
    "Aligns with your brand and site styling",
    "Delivers a seamless, professional customer experience from day one",
  ];

  return (
    <section id="solution" className="relative bg-black py-20 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(124,58,237,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(124,58,237,0.03),transparent_50%)]"></div>
        {/* Animated light beam */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent rotate-45 animate-beam"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Left content */}
          <div className="md:col-span-5 lg:col-span-4 flex items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              We help you start strong —
              <span className="block mt-2 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                with automation as your foundation.
              </span>
            </h2>
          </div>

          {/* Right content */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-purple-500/0 rounded-lg blur-lg opacity-75"></div>

              <div className="relative border border-white/10 bg-black/50 p-8 md:p-10 rounded-lg backdrop-blur-sm">
                <p className="text-xl mb-8 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                  Genesis equips your website with an AI assistant that:
                </p>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-4 p-4 rounded-lg border border-transparent hover:border-purple-500/20 hover:bg-purple-500/5 transition-all"
                    >
                      <div className="mt-1 p-1.5 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                        <Check className="w-4 h-4 text-purple-500" />
                      </div>
                      <p className="text-lg text-white/90 group-hover:text-white transition-colors">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button
                    size="lg"
                    className="bg-purple-500 text-white hover:bg-purple-600 font-medium relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative">
                      Experience Genesis – Try It Live
                      <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
