
import { Check } from 'lucide-react';

const ValueSection = () => {
  const leftFeatures = [
    "Full setup, no code needed",
    "Custom design to match your brand",
    "CRM integration",
    "Automated lead capture & booking"
  ];

  const rightFeatures = [
    "Continuous AI updates",
    "Dedicated support",
    "Styling optimized for conversion and clarity"
  ];

  return (
    <section id="foundation" className="relative bg-black py-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Everything you need to launch with AI in 7 days
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left Column */}
          <div className="border border-white/10 bg-black/50 p-8 transition-all hover:border-primary/40">
            <div className="space-y-6">
              {leftFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-full bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-lg text-white/90">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className="border border-white/10 bg-black/50 p-8 transition-all hover:border-primary/40">
            <div className="space-y-6">
              {rightFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-full bg-primary/20">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-lg text-white/90">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Animated badge */}
        <div className="mt-12 text-center">
          <div className="inline-block py-2 px-6 rounded-full border border-primary/30 bg-primary/10 animate-pulse-light">
            <span className="text-sm font-medium">7-Day Implementation Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
