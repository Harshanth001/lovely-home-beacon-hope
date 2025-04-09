
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, MapPin, ArrowRight } from "lucide-react";

// Event schedule data
const events = [
  {
    type: "motivational",
    items: [
      {
        title: "Finding Your Inner Strength",
        speaker: "Dr. Rajesh Kumar",
        date: "August 15, 2023",
        time: "3:00 PM - 4:30 PM",
        location: "Main Hall",
        description: "An inspiring session on discovering your inner potential and building resilience.",
      },
      {
        title: "Turning Challenges into Opportunities",
        speaker: "Priya Sharma",
        date: "August 22, 2023",
        time: "4:00 PM - 5:30 PM",
        location: "Garden Area",
        description: "Learn how to transform life's obstacles into stepping stones for growth.",
      },
      {
        title: "The Power of Positive Thinking",
        speaker: "Amit Patel",
        date: "September 5, 2023",
        time: "3:30 PM - 5:00 PM",
        location: "Main Hall",
        description: "Explore how positive thoughts can reshape your reality and future.",
      },
    ],
  },
  {
    type: "mentorship",
    items: [
      {
        title: "Career Guidance Session",
        speaker: "Sunita Reddy",
        date: "August 18, 2023",
        time: "2:00 PM - 4:00 PM",
        location: "Study Room",
        description: "One-on-one mentoring sessions to help plan your educational and career path.",
      },
      {
        title: "Skill Development Workshop",
        speaker: "Vikram Singh",
        date: "August 25, 2023",
        time: "10:00 AM - 12:00 PM",
        location: "Workshop Area",
        description: "Hands-on workshop focusing on practical skills for employment.",
      },
      {
        title: "Digital Literacy Program",
        speaker: "Anjali Gupta",
        date: "September 8, 2023",
        time: "11:00 AM - 1:00 PM",
        location: "Computer Lab",
        description: "Learn essential computer and internet skills for the modern world.",
      },
    ],
  },
  {
    type: "psychological",
    items: [
      {
        title: "Emotional Wellbeing Workshop",
        speaker: "Dr. Maya Desai",
        date: "August 16, 2023",
        time: "4:00 PM - 5:00 PM",
        location: "Quiet Room",
        description: "Strategies for managing emotions and maintaining mental wellness.",
      },
      {
        title: "Stress Management Techniques",
        speaker: "Dr. Samuel Thomas",
        date: "August 23, 2023",
        time: "3:00 PM - 4:00 PM",
        location: "Garden Area",
        description: "Practical approaches to recognize and reduce stress in daily life.",
      },
      {
        title: "Building Healthy Relationships",
        speaker: "Dr. Leela Krishnan",
        date: "September 6, 2023",
        time: "4:30 PM - 5:30 PM",
        location: "Main Hall",
        description: "Learn how to foster positive connections with others.",
      },
    ],
  },
];

const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState("motivational");

  return (
    <section id="schedule" className="py-16 bg-white">
      <div className="section-container">
        <div className="flex items-center justify-center mb-4">
          <Calendar className="h-8 w-8 text-lovely-purple mr-2" />
          <h2 className="section-title mb-0">Upcoming Sessions</h2>
        </div>
        <p className="section-subtitle">
          Join our scheduled sessions with experts providing guidance, motivation, and support.
        </p>
        
        <Tabs 
          defaultValue="motivational" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger 
              value="motivational"
              className="data-[state=active]:bg-lovely-purple data-[state=active]:text-white"
            >
              Motivational Speakers
            </TabsTrigger>
            <TabsTrigger 
              value="mentorship"
              className="data-[state=active]:bg-lovely-purple data-[state=active]:text-white"
            >
              Mentors
            </TabsTrigger>
            <TabsTrigger 
              value="psychological"
              className="data-[state=active]:bg-lovely-purple data-[state=active]:text-white"
            >
              Psychologists
            </TabsTrigger>
          </TabsList>
          
          {events.map((category) => (
            <TabsContent key={category.type} value={category.type} className="mt-0">
              <div className="space-y-6">
                {category.items.map((event, index) => (
                  <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-7">
                        <div className="md:col-span-2 bg-lovely-purple-light p-6 flex flex-col justify-center">
                          <div className="flex items-center mb-3">
                            <Calendar className="h-5 w-5 text-lovely-purple mr-2" />
                            <span className="font-medium text-lovely-purple-dark">{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-lovely-purple mr-2" />
                            <span className="font-medium text-lovely-purple-dark">{event.time}</span>
                          </div>
                        </div>
                        
                        <div className="md:col-span-5 p-6">
                          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                          
                          <div className="flex items-center mb-3">
                            <User className="h-5 w-5 text-lovely-purple mr-2" />
                            <span className="text-lovely-gray-dark">{event.speaker}</span>
                          </div>
                          
                          <div className="flex items-center mb-4">
                            <MapPin className="h-5 w-5 text-lovely-purple mr-2" />
                            <span className="text-lovely-gray-dark">{event.location}</span>
                          </div>
                          
                          <p className="text-lovely-gray-dark mb-4">{event.description}</p>
                          
                          <Button variant="outline" className="border-lovely-purple text-lovely-purple hover:bg-lovely-purple-light/30">
                            Register
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-lovely-purple to-lovely-purple-dark hover:opacity-90 text-white">
            View Full Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
