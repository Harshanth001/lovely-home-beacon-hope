
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-lovely-purple-light/50 to-white">
      <div className="section-container">
        <div className="relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-lovely-purple-dark mb-6 shadow-sm">
              <Heart className="h-5 w-5 fill-lovely-purple text-lovely-purple animate-pulse-gentle" />
              <span className="font-medium">Making a difference, one smile at a time</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-lovely-purple-dark via-lovely-purple to-lovely-blue bg-clip-text text-transparent mb-6">
              We Are Here To Hear
            </h1>
            
            <p className="mx-auto mt-5 max-w-xl text-xl text-lovely-gray-dark">
              Supporting individuals in homes and orphanages with care, 
              compassion, and opportunities to thrive.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-lovely-purple to-lovely-purple-dark hover:opacity-90 text-white rounded-full px-8 py-6 text-lg font-medium shadow-md flex items-center">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-lovely-purple text-lovely-purple-dark hover:bg-lovely-purple-light/30 rounded-full px-8 py-6 text-lg font-medium">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="hidden lg:block absolute top-40 left-10 w-32 h-32 rounded-full bg-lovely-orange-light opacity-60 animate-float"></div>
      <div className="hidden lg:block absolute bottom-20 right-10 w-40 h-40 rounded-full bg-lovely-green-light opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="hidden lg:block absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-lovely-blue-light opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Hero;
