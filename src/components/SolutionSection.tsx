
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    "Captures leads & books appointments automatically",
    "Syncs directly with your CRM",
    "Aligns with your brand and site styling",
    "Delivers a seamless, professional customer experience from day one"
  ];

  return (
    <section id="solution" className="relative bg-black py-20 overflow-hidden">
      {/* Subtle shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We help you start strong — with automation as your foundation.
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto border border-white/10 bg-black/50 p-8 md:p-10">
          <p className="text-xl mb-8">
            Genesis equips your website with an AI assistant that:
          </p>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 p-1 rounded-full bg-primary/20">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-lg text-white/90">{feature}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-medium"
            >
              Experience Genesis – Try It Live
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
