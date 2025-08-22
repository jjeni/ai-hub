import { Video, Play, Pause, SkipBack, SkipForward, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorAvatars } from "@/components/ContributorAvatars";
import Navbar from "@/components/Navbar";

const VideoPage = () => {
  const contributors = ["Jack Williams", "Kate Brown", "Liam Garcia"];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-xl mb-6 mx-auto animate-glow">
              <Video className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              AI Video Creation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate, edit, and enhance videos using cutting-edge artificial intelligence technology.
            </p>
          </div>

          {/* Contributors */}
          <div className="glass-dark rounded-xl p-6 mb-8 border border-white/20">
            <h2 className="text-xl font-semibold text-foreground mb-4">Project Contributors</h2>
            <ContributorAvatars contributors={contributors} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {contributors.map((contributor, index) => (
                <div key={contributor} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
                    {contributor.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-foreground">{contributor}</p>
                  <p className="text-xs text-muted-foreground">
                    {index === 0 ? "Video Engineer" : index === 1 ? "3D Specialist" : "AI Researcher"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Area */}
          <div className="glass-dark rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Video Generation Studio</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Video Player */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Generated Video Preview</h3>
                <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg aspect-video overflow-hidden border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <p className="text-foreground font-medium">AI Generated Video</p>
                      <p className="text-sm text-muted-foreground">Click to play preview</p>
                    </div>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                          <SkipBack className="w-4 h-4" />
                        </Button>
                        <Button variant="gradient" size="sm" className="rounded-full">
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                          <SkipForward className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-white/20 rounded-full h-1">
                          <div className="bg-gradient-primary h-1 rounded-full w-1/3"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm">0:42 / 2:15</span>
                        <Button variant="ghost" size="sm" className="text-white hover:text-primary">
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Generation Controls */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Video Generation</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-foreground block mb-2">Video Type</label>
                    <select className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground">
                      <option>Animated Explainer</option>
                      <option>Product Demo</option>
                      <option>Social Media</option>
                      <option>Educational</option>
                      <option>Marketing</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-foreground block mb-2">Style</label>
                    <select className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground">
                      <option>Modern Minimal</option>
                      <option>Corporate</option>
                      <option>Creative</option>
                      <option>Technical</option>
                      <option>Artistic</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-foreground block mb-2">Duration</label>
                    <select className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground">
                      <option>15 seconds</option>
                      <option>30 seconds</option>
                      <option>1 minute</option>
                      <option>2 minutes</option>
                      <option>5 minutes</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-foreground block mb-2">Script/Description</label>
                    <textarea 
                      className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground placeholder-muted-foreground resize-none"
                      rows={4}
                      placeholder="Describe your video content..."
                      defaultValue="Create a futuristic animation showcasing AI technology innovations in healthcare"
                    />
                  </div>
                  
                  <Button variant="gradient" className="w-full">
                    Generate Video
                  </Button>
                </div>
              </div>
            </div>

            {/* Recent Videos */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Recent Generations</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Tech Startup Pitch",
                  "Product Launch", 
                  "Tutorial Video",
                  "Brand Story"
                ].map((title, index) => (
                  <div key={title} className="bg-muted/20 rounded-lg p-3 hover:bg-muted/30 transition-colors cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded mb-2 flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{title}</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gradient-primary/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">4K Quality</h4>
                <p className="text-sm text-muted-foreground">Ultra-high definition output</p>
              </div>
              <div className="bg-gradient-secondary/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Auto Subtitles</h4>
                <p className="text-sm text-muted-foreground">AI-generated captions</p>
              </div>
              <div className="bg-gradient-accent/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Multi-Format</h4>
                <p className="text-sm text-muted-foreground">Export for any platform</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPage;