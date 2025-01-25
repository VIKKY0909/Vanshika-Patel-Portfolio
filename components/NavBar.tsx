import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close the menu on mobile after navigation
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background py-4 shadow-md"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Button variant="link" className="text-4xl font-bold">
            Vanshika Patel
          </Button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => scrollToSection("#about")}
                className="hover:text-primary transition duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#services")}
                className="hover:text-primary transition duration-300"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#experience")}
                className="hover:text-primary transition duration-300"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#projects")}
                className="hover:text-primary transition duration-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#contact")}
                className="hover:text-primary transition duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <Button variant="ghost" className="p-2" onClick={handleToggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center space-y-8">
          <ul className="text-center text-white text-2xl font-medium space-y-6">
            <li>
              <button
                onClick={() => scrollToSection("#about")}
                className="hover:text-primary transition duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#services")}
                className="hover:text-primary transition duration-300"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#experience")}
                className="hover:text-primary transition duration-300"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#projects")}
                className="hover:text-primary transition duration-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("#contact")}
                className="hover:text-primary transition duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default NavBar;
