import { FileText, Sparkles, RefreshCw, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorAvatars } from "@/components/ContributorAvatars";
import Navbar from "@/components/Navbar";

const TextPage = () => {
  const contributors = ["Vishwa","KalaiSelvan", "Tamilselvan", "Vishnu","Kirubakaran","Hassan Riyas"];
  
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
              AI Text
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contents powered by AI, tailored for you.
            </p>
          </div>

          {/* Demo Area */}
          <div className="glass-dark rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">AI Generated Text</h2>
            
            {/* Output */}
              <div className="lg:col-span-2">
                <div className="bg-muted/30 rounded-lg p-6 border border-white/10 min-h-[400px]">
                  <div className="text-foreground leading-relaxed">
                    <h4 className="text-xl font-bold mb-4">Heading</h4>
                    
                    <p className="mb-4">
                      {/*text goes here*/}
                    </p>
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

          {/* Contributors */}
          <div className="glass-dark rounded-xl p-6 mb-8 mt-8 border border-white/20">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contributors</h2>
            <ContributorAvatars contributors={contributors} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
              {contributors.map((contributor, index) => (
                <div key={contributor} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
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

export default TextPage;