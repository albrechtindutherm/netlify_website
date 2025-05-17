
import { Code, Wrench, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Project Development",
      items: [
        "Concept engineering & feasibility studies",
        "Consulting",
        "Tenders and inquiry documentation"
      ],
      image: "/assets/image3.png"
    },
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Basic + Detail Boiler Engineering",
      items: [
        "Calculations and process design",
        "Thermal calculations",
        "Water/steam re-circulation calculations",
        "CFD studies",
        "Basic layout drawings",
        "Flow and P&I diagrams",
        "Strength calculation for pressure parts"
      ],
      image: "/assets/merged.png"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Partner Services",
      items: [
        "Plant design, Piping - with partner",
        "Steel structure - with partner"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Design for Tailor Made Boiler Systems
          </p>
          <div className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            <p>We provide comprehensive engineering services for industrial boiler systems with a focus on efficiency and sustainability.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg shadow-md p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {service.image && (
                <div className="mt-6 rounded-md overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary rounded-lg p-8 text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Need Engineering Expertise?</h3>
          <p className="mb-6">Contact our team of experienced engineers to discuss your project requirements.</p>
          <a href="#contact" className="inline-block px-6 py-3 rounded-md bg-background text-primary font-medium hover:bg-muted transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
