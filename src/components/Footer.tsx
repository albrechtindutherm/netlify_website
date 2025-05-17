
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Albrecht Indutherm</h3>
            <p className="text-muted-foreground mb-4">
              Your Partner for Industrial Boiler System Planning and Design
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Albrecht Indutherm GmbH. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#references" className="text-muted-foreground hover:text-primary transition-colors">
                  References
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact Information</h4>
            <address className="not-italic text-muted-foreground">
              <p>Robert Schuman-Str. 6</p>
              <p>44263 Dortmund</p>
              <p>Germany</p>
              <p className="mt-2">
                <a 
                  href="mailto:info@albrecht-indutherm.com" 
                  className="text-primary hover:underline"
                >
                  info@albrecht-indutherm.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            Albrecht Indutherm GmbH - Engineering for industrial boiler systems
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/imprint" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
