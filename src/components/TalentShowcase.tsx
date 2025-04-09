
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Music, BookOpen, Shield, PenTool, Code, Camera, Palette, ChevronLeft, ChevronRight } from "lucide-react";

// Talent data
const talents = [
  {
    category: "arts",
    items: [
      {
        name: "Ram",
        talent: "Singer",
        description: "Ram has a beautiful voice and performs traditional folk songs that bring joy to everyone.",
        icon: <Music className="h-10 w-10 text-lovely-purple" />,
      },
      {
        name: "Chellatha",
        talent: "Storyteller",
        description: "Chellatha weaves magical stories that captivate audiences of all ages with cultural tales.",
        icon: <BookOpen className="h-10 w-10 text-lovely-purple" />,
      },
      {
        name: "Lakshmi",
        talent: "Painter",
        description: "Lakshmi creates vibrant paintings that express emotions and beauty through colors.",
        icon: <Palette className="h-10 w-10 text-lovely-purple" />,
      },
    ]
  },
  {
    category: "skills",
    items: [
      {
        name: "Mariyappan",
        talent: "Self-defence",
        description: "Mariyappan teaches important self-defense techniques that empower others with confidence.",
        icon: <Shield className="h-10 w-10 text-lovely-purple" />,
      },
      {
        name: "Kavita",
        talent: "Calligraphy",
        description: "Kavita's beautiful handwriting transforms simple words into artistic masterpieces.",
        icon: <PenTool className="h-10 w-10 text-lovely-purple" />,
      },
      {
        name: "Arjun",
        talent: "Programming",
        description: "Arjun is developing computer skills and creating simple applications to solve problems.",
        icon: <Code className="h-10 w-10 text-lovely-purple" />,
      },
    ]
  },
  {
    category: "performance",
    items: [
      {
        name: "Divya",
        talent: "Dancer",
        description: "Divya performs traditional and contemporary dance forms with grace and expression.",
        icon: <Music className="h-10 w-10 text-lovely-purple" />,
      },
      {
        name: "Rajan",
        talent: "Photographer",
        description: "Rajan captures beautiful moments through his lens, telling stories through images.",
        icon: <Camera className="h-10 w-10 text-lovely-purple" />,
      },
      {
        name: "Meena",
        talent: "Yoga Instructor",
        description: "Meena shares yoga practices that promote physical health and mental wellbeing.",
        icon: <Shield className="h-10 w-10 text-lovely-purple" />,
      },
    ]
  }
];

const TalentShowcase = () => {
  const [activeTab, setActiveTab] = useState("arts");
  
  return (
    <section id="talent" className="py-16 bg-lovely-purple-light/30">
      <div className="section-container">
        <div className="flex items-center justify-center mb-4">
          <Award className="h-8 w-8 text-lovely-purple mr-2" />
          <h2 className="section-title mb-0">Talent Showcase</h2>
        </div>
        <p className="section-subtitle">
          Celebrating the diverse talents and skills of our amazing residents.
        </p>
        
        <Tabs 
          defaultValue="arts" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="max-w-5xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger 
              value="arts"
              className="data-[state=active]:bg-lovely-purple data-[state=active]:text-white"
            >
              Arts & Culture
            </TabsTrigger>
            <TabsTrigger 
              value="skills"
              className="data-[state=active]:bg-lovely-purple data-[state=active]:text-white"
            >
              Life Skills
            </TabsTrigger>
            <TabsTrigger 
              value="performance"
              className="data-[state=active]:bg-lovely-purple data-[state=active]:text-white"
            >
              Performance
            </TabsTrigger>
          </TabsList>
          
          {talents.map((category) => (
            <TabsContent key={category.category} value={category.category} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((talent, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 bg-lovely-purple-light p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
                          {talent.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-1">{talent.name}</h3>
                        <div className="text-lg text-lovely-purple font-medium mb-3">{talent.talent}</div>
                        <p className="text-lovely-gray-dark">{talent.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-lovely-purple text-lovely-purple hover:bg-lovely-purple-light/30"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-lovely-purple text-lovely-purple hover:bg-lovely-purple-light/30"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-8">
          <p className="text-lovely-gray-dark max-w-2xl mx-auto mb-6">
            Our residents have amazing talents that deserve to be celebrated and nurtured. 
            These showcases help build confidence and provide opportunities for growth.
          </p>
          <Button className="bg-gradient-to-r from-lovely-purple to-lovely-purple-dark hover:opacity-90 text-white">
            Support Talent Development
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TalentShowcase;
