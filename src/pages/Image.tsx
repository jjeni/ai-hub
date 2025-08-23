import { Image, Download, RefreshCw, Palette, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorAvatars } from "@/components/ContributorAvatars";
import Navbar from "@/components/Navbar";

const ImagePage = () => {
  const contributors = ["Karthika", "Kaviya", "Supriya", "Badma Sri", "Tamil Selvi", "Pankaj Kumar Jena", "Pathan Mohammed khan"];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-secondary rounded-xl mb-6 mx-auto animate-glow">
              <Image className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4 p-3">
              AI Image
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn imagination into visuals with AI.
            </p>
          </div>

          {/* Demo Area */}
          <div className="glass-dark rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">AI Generated Image</h2>
            {/* Image Gallery */}
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Abstract Art",
                  "Portrait",
                  "Landscape", 
                  "Architecture",
                  "Abstract Art",
                  "Portrait",
                  "Landscape", 
                  "Architecture",
                ].map((title, index) => (
                  <div key={title} className="group relative">
                    <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-white/10 flex items-center justify-center hover:shadow-glow transition-all duration-300 cursor-pointer">
                      <Image className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-center">{title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gradient-primary/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-foreground mb-2">Multiple Styles</h4>
                <p className="text-sm text-muted-foreground">20+ artistic styles</p>
              </div>
              <div className="bg-gradient-secondary/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-foreground mb-2">High Resolution</h4>
                <p className="text-sm text-muted-foreground">Up to 2K quality</p>
              </div>
              <div className="bg-gradient-accent/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-foreground mb-2">Fast Generation</h4>
                <p className="text-sm text-muted-foreground">3-5 seconds</p>
              </div>
              <div className="bg-gradient-primary/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-foreground mb-2">Commercial Use</h4>
                <p className="text-sm text-muted-foreground">Full rights included</p>
              </div>
            </div>
          </div>

          {/* Contributors */}
          <div className="glass-dark rounded-xl p-6 mb-6 mt-8 border border-white/20">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contributors</h2>
            <ContributorAvatars contributors={contributors} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {contributors.map((contributor, index) => (
                <div key={contributor} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
                    {contributor.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-foreground">{contributor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImagePage;