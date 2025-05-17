
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      image: "/assets/image6.png",
      title: 'Reactors/Boilers for Nitric Acid Plants',
      description: 'For all licensors',
    },
    {
      image: "/assets/image7.jpeg",
      title: 'Boilers Downstream Grate Systems',
      description: 'Vertical and horizontal design',
    },
    {
      image: "/assets/image8.png",
      title: 'Non-ferrous Waste Heat Boilers',
      description: 'For IsaSmelt-, Flashsmelt-, Ausmelt- process and other processes',
    },
    {
      image: "/assets/image8.png",
      title: 'Boilers Downstream Gas Turbines HRSG',
      description: '',
    },
    {
      image: "/assets/image10.png",
      title: 'Boilers for Sulfuric Acid Plants',
      description: 'Water tube and smoke tube type',
    },
    {
      image: "/assets/image11.png",
      title: 'Smoke Tube Boiler Downstream an Incinerator',
      description: '',
    },
  ];

  // Add specs item at the beginning
  const allItems = [
    { isSpecs: true },
    ...products
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative Boiler Systems for Industrial Applications
          </p>
          <div className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            <p>We design and engineer a comprehensive range of industrial boiler systems tailored to your specific requirements.</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto bg-background rounded-xl shadow-lg overflow-hidden border border-border">
          <div className="p-6 min-h-[500px] flex items-center justify-center">
            {allItems.map((item, idx) => (
              <div 
                key={idx}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 flex items-center justify-center p-6 ${
                  currentIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {item.isSpecs ? (
                  <div className="w-full">
                    <div className="flex items-center mb-6 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"></path><path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8"></path><path d="M15 2v5h5"></path></svg>
                      <h3 className="text-2xl font-semibold">Typical Boiler Types and Applications</h3>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-medium mb-3">Water Tube Boilers for Natural and Forced Circulations</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-center">
                          <span className="font-semibold mr-2">Capacity:</span> 5 - 200 t/h
                        </li>
                        <li className="flex items-center">
                          <span className="font-semibold mr-2">Steam Temperature:</span> &lt; 500°C
                        </li>
                        <li className="flex items-center">
                          <span className="font-semibold mr-2">Steam Pressure:</span> &lt; 120 bar
                        </li>
                        <li className="flex items-center">
                          <span className="font-semibold mr-2">Design Codes:</span> PED, ASME, GB, IVR and others
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Smoke Tube Boilers</h4>
                      <p>Custom-engineered for industrial applications</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 h-64 md:h-80 bg-muted/20 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/400x300?text=Product+Image";
                        }}
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                      {item.description && <p className="text-muted-foreground">{item.description}</p>}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="absolute top-1/2 left-4 right-4 -mt-4 flex justify-between z-20">
            <button 
              onClick={prevSlide} 
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 py-4">
            {allItems.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === idx ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary rounded-lg p-8 text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Find the Perfect Solution for Your Industry</h3>
          <p className="mb-6">Our engineering team can design custom boiler systems to meet your specific requirements</p>
          <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-background text-primary font-medium hover:bg-muted transition-colors">
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
