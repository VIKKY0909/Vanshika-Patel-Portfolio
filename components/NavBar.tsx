import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background py-4 shadow-md"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="link" className="text-4xl text-secondary-foreground font-bold">
            Vanshika Patel
          </Button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("about");
            }}
            className="text-secondary-foreground hover:text-primary"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("services");
            }}
            className="text-secondary-foreground hover:text-primary"
          >
            Services
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("experience");
            }}
            className="text-secondary-foreground hover:text-primary"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("projects");
            }}
            className="text-secondary-foreground hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("contact");
            }}
            className="text-secondary-foreground hover:text-primary"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <Button variant="outline" className="rounded-full p-2" onClick={handleToggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-90 flex flex-col items-center justify-center text-white"
        >
          <div className="flex justify-end w-full p-4">
            <Button variant="outline" className="rounded-full p-2 bg-secondary-foreground" onClick={handleToggleMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex flex-col space-y-6 w-80 h-72  text-secondary-foreground font-bold text-center bg-secondary">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("about");
              }}
              className="text-2xl"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("services");
              }}
              className="text-2xl"
            >
              Services
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("experience");
              }}
              className="text-2xl"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("projects");
              }}
              className="text-2xl"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("contact");
              }}
              className="text-2xl"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;
