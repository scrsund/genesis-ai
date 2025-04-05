import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,229,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.05),transparent_50%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-square border border-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              The future belongs to{" "}
              <span className="relative">
                <span className="relative z-10 text-white whitespace-nowrap">
                  the builders
                </span>
                <span className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-sm"></span>
              </span>
              .
            </h2>

            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Whether you're launching your first product or scaling your
              service, Genesis gives you a head start by automating what doesn't
              need your genius. Let AI handle the basics, so you can build the
              breakthrough.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 font-medium relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">
                  Try Genesis Live
                  <ArrowRight className="ml-2 h-4 w-4 inline-block" />
                </span>
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
      </div>
    </section>
  );
};

export default CTASection;
