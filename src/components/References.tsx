
import { FileText, Edit } from "lucide-react";

const References = () => {
  const galleryImages = [
    { src: "/assets/image12.png", caption: "Ammonia Oxidation Project" },
    { src: "/assets/image13.png", caption: "Non-ferrous Boiler Design" },
    { src: "/assets/image14.png", caption: "HRSG Installation" },
    { src: "/assets/image15.png", caption: "Chemical Plant Solution" },
  ];

  return (
    <section id="references" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">References</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record of successful projects
          </p>
          <div className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            <p>With over two decades of experience, our engineering team has delivered innovative and reliable boiler solutions across various industries worldwide.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-background rounded-lg shadow-md p-6 border border-border">
            <div className="flex items-center mb-6">
              <FileText className="h-7 w-7 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Recent Projects (2022-2024)</h3>
            </div>
            <p className="mb-6">Boiler design for more than 20 boiler plants for the international market</p>
            
            <h4 className="text-lg font-medium mb-3">Product Lines of Recent References</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Ammonia Oxidation reactors/boilers</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Non-ferrous boilers</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Boiler behind a grate system</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Smoke tube boiler for a chemical plant</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>HRSG – boilers downstream a gas turbine</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Several feasibility studies for revamping</span>
              </li>
            </ul>
          </div>

          <div className="bg-background rounded-lg shadow-md p-6 border border-border">
            <div className="flex items-center mb-6">
              <Edit className="h-7 w-7 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Boiler Design Experience</h3>
            </div>
            <p className="mb-3">Boiler design experience for more than 20 years</p>
            <p className="mb-4">Design on approximately 40 boiler systems for:</p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Water tube boilers; natural and forced circulation</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Ammonia oxidation reactors/boilers</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Sulfuric acid boilers</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Boiler for non-ferrous industry</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Direct fired boilers; water tube type</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-primary"></div>
                <span>Boilers downstream incinerators</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Project Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative rounded-lg overflow-hidden shadow-md aspect-[4/3]"
              >
                <img 
                  src={image.src} 
                  alt={image.caption} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300?text=Project+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">{image.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-lg p-8 text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="mb-6">Leverage our expertise for your next boiler system design</p>
          <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-background text-primary font-medium hover:bg-muted transition-colors">
            Contact Our Engineers
          </a>
        </div>
      </div>
    </section>
  );
};

export default References;
