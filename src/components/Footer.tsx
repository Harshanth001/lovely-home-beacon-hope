
import { Link } from "react-router-dom";
import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-lovely-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-lovely-purple fill-lovely-purple animate-pulse-gentle" />
              <span className="ml-2 text-xl font-display font-bold text-white">
                Lovely Home
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6">
              Supporting individuals in homes and orphanages with compassion and care.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-lovely-purple transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-lovely-purple transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-lovely-purple transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-lovely-purple transition-colors">Home</Link>
              </li>
              <li>
                <a href="#donate" className="text-gray-300 hover:text-lovely-purple transition-colors">Donate</a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-300 hover:text-lovely-purple transition-colors">Schedule</a>
              </li>
              <li>
                <a href="#talent" className="text-gray-300 hover:text-lovely-purple transition-colors">Talent Showcase</a>
              </li>
              <li>
                <Link to="/admin" className="text-gray-300 hover:text-lovely-purple transition-colors">Admin</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-lovely-purple mr-2 mt-0.5" />
                <span className="text-gray-300">123 Care Street, Compassion City, 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-lovely-purple mr-2" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-lovely-purple mr-2" />
                <span className="text-gray-300">care@lovelyhome.org</span>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on events and opportunities.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-lovely-purple hover:bg-lovely-purple-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Lovely Home. All rights reserved.</p>
          <p className="mt-2">
            <span className="mx-2">Privacy Policy</span>
            <span className="mx-2">·</span>
            <span className="mx-2">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
