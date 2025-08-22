import { FileText, Sparkles, RefreshCw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorAvatars } from "@/components/ContributorAvatars";
import Navbar from "@/components/Navbar";

const TextPage = () => {
  const contributors = ["Grace Thompson", "Henry Lee", "Ivy Martinez"];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-accent rounded-xl mb-6 mx-auto animate-glow">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              AI Text Generation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced natural language processing for content creation, editing, and analysis.
            </p>
          </div>

          {/* Contributors */}
          <div className="glass-dark rounded-xl p-6 mb-8 border border-white/20">
            <h2 className="text-xl font-semibold text-foreground mb-4">Project Contributors</h2>
            <ContributorAvatars contributors={contributors} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {contributors.map((contributor, index) => (
                <div key={contributor} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
                    {contributor.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-foreground">{contributor}</p>
                  <p className="text-xs text-muted-foreground">
                    {index === 0 ? "NLP Specialist" : index === 1 ? "Content Expert" : "Linguist"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Area */}
          <div className="glass-dark rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Text Generation Studio</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Controls */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-foreground mb-4">Generation Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-foreground block mb-2">Content Type</label>
                    <select className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground">
                      <option>Blog Post</option>
                      <option>Product Description</option>
                      <option>Email</option>
                      <option>Social Media</option>
                      <option>Technical Documentation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-foreground block mb-2">Tone</label>
                    <select className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground">
                      <option>Professional</option>
                      <option>Casual</option>
                      <option>Formal</option>
                      <option>Friendly</option>
                      <option>Persuasive</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-foreground block mb-2">Length</label>
                    <select className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground">
                      <option>Short (100-200 words)</option>
                      <option>Medium (300-500 words)</option>
                      <option>Long (600+ words)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-foreground block mb-2">Topic/Keywords</label>
                    <textarea 
                      className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground placeholder-muted-foreground resize-none"
                      rows={3}
                      placeholder="Enter your topic or keywords..."
                      defaultValue="AI technology trends and future applications"
                    />
                  </div>
                  
                  <Button variant="gradient" className="w-full flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Generate Content
                  </Button>
                </div>
              </div>

              {/* Output */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Generated Content</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6 border border-white/10 min-h-[400px]">
                  <div className="text-foreground leading-relaxed">
                    <h4 className="text-xl font-bold mb-4">The Future of AI Technology: Transforming Industries</h4>
                    
                    <p className="mb-4">
                      Artificial Intelligence is rapidly evolving, reshaping industries and revolutionizing how we work, 
                      communicate, and solve complex problems. From healthcare to finance, AI applications are becoming 
                      increasingly sophisticated and accessible.
                    </p>
                    
                    <p className="mb-4">
                      Machine learning algorithms are now capable of processing vast amounts of data, identifying patterns 
                      that humans might miss, and making predictions with remarkable accuracy. This capability is 
                      particularly valuable in fields like medical diagnosis, financial forecasting, and autonomous systems.
                    </p>
                    
                    <p className="mb-4">
                      As we look ahead, the integration of AI with emerging technologies like quantum computing and 
                      edge computing promises to unlock even greater potential. Organizations that embrace these 
                      technologies today will be well-positioned to lead in tomorrow's digital landscape.
                    </p>
                    
                    <p className="text-muted-foreground text-sm italic">
                      Generated in 2.3 seconds • 245 words • Professional tone
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-gradient-primary/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-foreground mb-2">Multi-Language</h4>
                <p className="text-sm text-muted-foreground">50+ languages supported</p>
              </div>
              <div className="bg-gradient-secondary/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-foreground mb-2">SEO Optimized</h4>
                <p className="text-sm text-muted-foreground">Search engine friendly</p>
              </div>
              <div className="bg-gradient-accent/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-foreground mb-2">Plagiarism Free</h4>
                <p className="text-sm text-muted-foreground">100% original content</p>
              </div>
              <div className="bg-gradient-primary/10 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-foreground mb-2">Real-time</h4>
                <p className="text-sm text-muted-foreground">Instant generation</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TextPage;