
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Welcome to Albrecht Indutherm
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your Partner for <span className="text-primary">Industrial Boiler System</span> Planning and Design
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
              Innovative solutions for the chemical, non-ferrous and environmental industry
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 rounded-full bg-primary/10 w-72 h-72 -top-10 -right-10 blur-3xl"></div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="/assets/boiler-hero.jpg" 
                alt="Industrial Boiler System" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";
                  e.currentTarget.alt = "Industrial landscape fallback image";
                }}
              />
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center md:items-start p-6 rounded-lg bg-background shadow-sm border">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Engineering</h3>
            <p className="text-muted-foreground text-center md:text-left">Over 20 years of specialized experience in industrial boiler design</p>
          </div>
          <div className="flex flex-col items-center md:items-start p-6 rounded-lg bg-background shadow-sm border">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Reliable Systems</h3>
            <p className="text-muted-foreground text-center md:text-left">Tailored solutions that comply with all technical standards</p>
          </div>
          <div className="flex flex-col items-center md:items-start p-6 rounded-lg bg-background shadow-sm border">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
            <p className="text-muted-foreground text-center md:text-left">Contributing to sustainability with energy-saving designs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
