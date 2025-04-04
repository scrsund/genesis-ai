
const VisionSection = () => {
  return (
    <section id="vision" className="relative bg-black py-20 overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
            Automate the foundation.<br/>Build the future.
          </h2>
          
          <div className="border border-white/10 bg-black/50 p-8 md:p-10 space-y-6">
            <p className="text-xl text-white/90">
              We believe the best ideas deserve more than admin work.
            </p>
            
            <p className="text-lg text-white/80">
              Genesis exists to clear the path for visionaries, creators, and builders — 
              by automating the tasks that slow you down.
            </p>
            
            <p className="text-lg text-white/80">
              This is where your future begins. Let AI lay the groundwork, 
              so you can create something extraordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
