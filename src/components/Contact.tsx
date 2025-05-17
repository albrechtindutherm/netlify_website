
import { Mail, MapPin, User } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-background rounded-lg shadow-md p-6 border border-border">
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Our Address</h3>
            </div>
            <ul className="space-y-2 mb-6">
              <li>Albrecht Indutherm GmbH</li>
              <li>Robert Schuman-Str. 6</li>
              <li>44263 Dortmund</li>
              <li>Germany</li>
            </ul>
            <div className="aspect-video w-full rounded-md overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.7636434390814!2d7.507614!3d51.482681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91902b79f7539%3A0xdfef7b1ab5e1bfad!2sRobert-Schuman-Str.%206%2C%2044263%20Dortmund%2C%20Germany!5e0!3m2!1sen!2sus!4v1689015378383!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>
            <a 
              href="https://maps.google.com/?q=Robert+Schuman+Str+6+44263+Dortmund+Germany" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary text-sm hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
          
          <div className="bg-background rounded-lg shadow-md p-6 border border-border">
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Contact Person</h3>
            </div>
            <ul className="space-y-3 mb-8">
              <li>Andreas Albrecht</li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a 
                  href="mailto:info@albrecht-indutherm.com" 
                  className="text-primary hover:underline"
                >
                  info@albrecht-indutherm.com
                </a>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <h4 className="text-xl font-semibold mb-4">Ready to discuss your project?</h4>
              <p className="mb-6 text-muted-foreground">
                Our team of experienced engineers is here to help you with your industrial boiler system needs.
              </p>
              <a 
                href="mailto:info@albrecht-indutherm.com" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Email Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
