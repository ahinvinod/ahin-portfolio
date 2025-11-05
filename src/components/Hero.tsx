import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="text-center py-16 px-5 text-white animate-fade-in">
      <div className="w-72 h-72 mx-auto mb-6 rounded-full border-4 border-white overflow-hidden shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
          alt="Ahin Vinod"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg">
        Ahin Vinod
      </h1>
      <p className="text-xl md:text-2xl mb-8 opacity-95">
        MCA Student | Data Science Enthusiast | LPU
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button
          size="lg"
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white shadow-lg transition-all duration-300 hover:scale-105"
          onClick={() => scrollToSection("projects")}
        >
          View Projects
        </Button>
        <Button
          size="lg"
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white shadow-lg transition-all duration-300 hover:scale-105"
          onClick={() => scrollToSection("contact")}
        >
          Get in Touch
        </Button>
      </div>
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="mailto:ahinvinod04@gmail.com"
          className="text-white hover:scale-110 transition-transform duration-300"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/ahin-vinod-b422ba2b5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:scale-110 transition-transform duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/ahinvinod"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:scale-110 transition-transform duration-300"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="tel:+917994014080"
          className="text-white hover:scale-110 transition-transform duration-300"
          aria-label="Phone"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
};

export default Hero;
