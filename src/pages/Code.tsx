import { Code, Terminal, Play, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorAvatars } from "@/components/ContributorAvatars";
import Navbar from "@/components/Navbar";

const CodePage = () => {
  const contributors = ["Kohila", "Vijaya Priya", "Haritha Tharini", "Sai Vikas", "Venkata Srinu", "Rajasekaran"];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-secondary rounded-xl mb-6 mx-auto animate-glow">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4">
              AI Code
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Intelligent code generation, debugging, and optimization powered by advanced AI models.
            </p>
          </div>

          {/* Demo Area */}
          <div className="glass-dark rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">AI Generated Code</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {/* Input */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Terminal className="w-5 h-5" />
                  Prompt
                </h3>
                <div className="bg-muted/30 rounded-lg p-4 border border-white/10">
                  <textarea 
                    className="w-full bg-transparent border-none resize-none text-foreground placeholder-muted-foreground focus:outline-none"
                    rows={6}
                    placeholder="Describe the code you want to generate..."
                    defaultValue="Your Prompt goes here"
                  />
                </div>
                
              </div>

              {/* Output */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Generated Code
                </h3>
                <div className="bg-slate-900 rounded-lg p-4 border border-white/10 font-mono text-sm overflow-x-auto">
                  <div className="text-gray-300">
                    Response from AI
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contributors */}
          <div className="glass-dark rounded-xl p-6 mt-8 mb-8 border border-white/20">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contributors</h2>
            <ContributorAvatars contributors={contributors} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4 mb-5">
              {contributors.map((contributor, index) => (
                <div key={contributor} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
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

export default CodePage;