
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Heart, Home, Calendar, Gift, Award, UserCircle } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="h-5 w-5 mr-1.5" /> },
    { name: "Donate", path: "#donate", icon: <Gift className="h-5 w-5 mr-1.5" /> },
    { name: "Schedule", path: "#schedule", icon: <Calendar className="h-5 w-5 mr-1.5" /> },
    { name: "Talent", path: "#talent", icon: <Award className="h-5 w-5 mr-1.5" /> },
    { name: "Admin", path: "/admin", icon: <UserCircle className="h-5 w-5 mr-1.5" /> },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-lovely-purple fill-lovely-purple animate-pulse-gentle" />
              <span className="ml-2 text-xl font-display font-bold bg-gradient-to-r from-lovely-purple to-lovely-purple-dark bg-clip-text text-transparent">
                Lovely Home
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-lovely-purple transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="ml-4 bg-gradient-to-r from-lovely-purple to-lovely-purple-dark hover:opacity-90">
              Get Involved
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-lovely-gray-dark hover:text-lovely-purple hover:bg-lovely-purple-light focus:outline-none transition-colors"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-lovely-purple hover:bg-lovely-purple-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Button className="w-full bg-gradient-to-r from-lovely-purple to-lovely-purple-dark hover:opacity-90">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
