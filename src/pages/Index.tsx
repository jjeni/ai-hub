import { Music, Code, FileText, Video, Image, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  const projects = [
    {
      title: "Music",
      description: "Generate and compose music using artificial intelligence",
      path: "/music",
      icon: <Music className="w-8 h-8 text-white" />,
      contributors: ["Jeni", "Karthik", "Rishaban","Bhuvaneshwaran", "Chiranjeevi","Thamilavan", "Harish"]
    },
    {
      title: "Code", 
      description: "Intelligent code generation and programming assistance",
      path: "/code",
      icon: <Code className="w-8 h-8 text-white" />,
      contributors: ["Kohila", "Vijaya Priya", "Haritha Tharini", "Sai Vikas", "Venkata Srinu", "Rajasekaran"]
    },
    {
      title: "Text",
      description: "Advanced text generation and natural language processing",
      path: "/text", 
      icon: <FileText className="w-8 h-8 text-white" />,
      contributors: ["Vishwa","KalaiSelvan", "Tamilselvan", "Vishnu","Kirubakaran","Hassan Riyas"]
    },
    {
      title: "Video",
      description: "Create and edit videos with artificial intelligence",
      path: "/video",
      icon: <Video className="w-8 h-8 text-white" />,
      contributors: ["Sanjay", "Esakkiraj", "Muthuselvam", "Balakrishnan", "Hariram", "Venkatesh", "Yokesh"]
    },
    {
      title: "Image", 
      description: "Generate and manipulate images using AI technology",
      path: "/image",
      icon: <Image className="w-8 h-8 text-white" />,
      contributors: ["Karthika", "Kaviya", "Supriya", "Badma Sri", "Tamil Selvi", "Pankaj Kumar Jena", "Pathan Mohammed khan"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-3xl"></div>
              <h1 className="relative text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
                AI Project Portal
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our cutting-edge artificial intelligence projects. From music generation to code assistance, 
              discover the future of AI technology.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* AI Hub CTA */}
          <div className="text-center">
            <div className="glass-dark rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Join the AI Community</h2>
              <p className="text-muted-foreground mb-6">
                Connect with fellow AI enthusiasts, share ideas, tools, and learning updates in our community hub.
              </p>
              <Link to="/hub">
                <Button variant="hub" size="lg" className="px-8 py-3">
                  Go to AI Hub 🚀
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
