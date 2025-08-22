import { Image, Download, RefreshCw, Palette, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorAvatars } from "@/components/ContributorAvatars";
import Navbar from "@/components/Navbar";

const ImagePage = () => {
  const contributors = ["Mia Johnson", "Noah Davis", "Olivia Wilson"];
  
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
            <h1 className="text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4">
              AI Image Generation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create stunning, original images from text descriptions using advanced AI models.
            </p>
          </div>

          {/* Contributors */}
          <div className="glass-dark rounded-xl p-6 mb-8 border border-white/20">
            <h2 className="text-xl font-semibold text-foreground mb-4">Project Contributors</h2>
            <ContributorAvatars contributors={contributors} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {contributors.map((contributor, index) => (
                <div key={contributor} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
                    {contributor.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-foreground">{contributor}</p>
                  <p className="text-xs text-muted-foreground">
                    {index === 0 ? "Visual AI Expert" : index === 1 ? "Digital Artist" : "ML Engineer"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Area */}
          <div className="glass-dark rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Image Generation Studio</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Controls */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground mb-4">Generation Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-foreground block mb-2">Style</label>
                    <select className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground">
                      <option>Photorealistic</option>
                      <option>Digital Art</option>
                      <option>Oil Painting</option>
                      <option>Anime/Manga</option>
                      <option>Abstract</option>
                      <option>Minimalist</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-foreground block mb-2">Aspect Ratio</label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="glass" size="sm" className="text-xs">1:1</Button>
                      <Button variant="glass" size="sm" className="text-xs">16:9</Button>
                      <Button variant="glass" size="sm" className="text-xs">9:16</Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-foreground block mb-2">Quality</label>
                    <select className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground">
                      <option>High (1024x1024)</option>
                      <option>Ultra (2048x2048)</option>
                      <option>Standard (512x512)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-foreground block mb-2">Prompt</label>
                    <textarea 
                      className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground placeholder-muted-foreground resize-none"
                      rows={4}
                      placeholder="Describe the image you want to generate..."
                      defaultValue="A futuristic cityscape at sunset with flying cars and neon lights, cyberpunk style"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm text-foreground block mb-2">Negative Prompt</label>
                    <textarea 
                      className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground placeholder-muted-foreground resize-none"
                      rows={2}
                      placeholder="What to avoid in the image..."
                    />
                  </div>
                  
                  <Button variant="gradient" className="w-full flex items-center gap-2">
                    <Wand2 className="w-4 h-4" />
                    Generate Image
                  </Button>
                </div>
              </div>

              {/* Generated Image Display */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Generated Image</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg border border-white/10 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Palette className="w-16 h-16 text-primary mb-4 mx-auto animate-pulse" />
                    <p className="text-foreground font-medium">AI Generated Image</p>
                    <p className="text-sm text-muted-foreground">Your image will appear here</p>
                  </div>
                </div>
                
                <div className="bg-muted/20 rounded-lg p-4">
                  <p className="text-sm text-foreground mb-2">
                    <strong>Prompt:</strong> A futuristic cityscape at sunset with flying cars and neon lights, cyberpunk style
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Generated in 3.2 seconds • 1024x1024 • Photorealistic style
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Generations</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "Abstract Art",
                  "Portrait",
                  "Landscape", 
                  "Architecture",
                  "Fantasy Scene",
                  "Digital Art"
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
        </div>
      </main>
    </div>
  );
};

export default ImagePage;