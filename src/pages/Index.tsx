
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Products from "../components/Products";
import References from "../components/References";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  // Initialize intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Services />
        <Products />
        <References />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
