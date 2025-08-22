import { Code, Terminal, Play, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorAvatars } from "@/components/ContributorAvatars";
import Navbar from "@/components/Navbar";

const CodePage = () => {
  const contributors = ["David Wilson", "Eva Rodriguez", "Frank Chen"];
  
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
              AI Code Assistant
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Intelligent code generation, debugging, and optimization powered by advanced AI models.
            </p>
          </div>

          {/* Contributors */}
          <div className="glass-dark rounded-xl p-6 mb-8 border border-white/20">
            <h2 className="text-xl font-semibold text-foreground mb-4">Project Contributors</h2>
            <ContributorAvatars contributors={contributors} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {contributors.map((contributor, index) => (
                <div key={contributor} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
                    {contributor.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-foreground">{contributor}</p>
                  <p className="text-xs text-muted-foreground">
                    {index === 0 ? "Full Stack Dev" : index === 1 ? "AI Research" : "Backend Expert"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Area */}
          <div className="glass-dark rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Code Generation Demo</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    defaultValue="Create a React component that displays a list of users with search functionality"
                  />
                </div>
                <div className="flex gap-2 mt-3">
                  <Button variant="gradient" className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Generate Code
                  </Button>
                  <select className="bg-muted/30 border border-white/20 rounded-lg px-3 py-2 text-foreground">
                    <option>React/TypeScript</option>
                    <option>Python</option>
                    <option>JavaScript</option>
                    <option>Java</option>
                  </select>
                </div>
              </div>

              {/* Output */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Generated Code
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <Copy className="w-4 h-4" />
                  </Button>
                </h3>
                <div className="bg-slate-900 rounded-lg p-4 border border-white/10 font-mono text-sm overflow-x-auto">
                  <div className="text-gray-300">
                    <div className="text-blue-400">import</div> React, &#123; useState &#125; <div className="text-blue-400">from</div> <div className="text-green-400">'react'</div>;
                    <br /><br />
                    <div className="text-blue-400">const</div> <div className="text-yellow-400">UserList</div> = () =&gt; &#123;
                    <br />
                    &nbsp;&nbsp;<div className="text-blue-400">const</div> [users, setUsers] = <div className="text-yellow-400">useState</div>([]);
                    <br />
                    &nbsp;&nbsp;<div className="text-blue-400">const</div> [search, setSearch] = <div className="text-yellow-400">useState</div>(<div className="text-green-400">''</div>);
                    <br /><br />
                    &nbsp;&nbsp;<div className="text-blue-400">return</div> (
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<div className="text-red-400">div</div>&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<div className="text-red-400">input</div> 
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="text-yellow-400">placeholder</div>=<div className="text-green-400">"Search users..."</div>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="text-yellow-400">onChange</div>=&#123;(e) =&gt; <div className="text-yellow-400">setSearch</div>(e.target.value)&#125;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<div className="text-red-400">div</div>&gt;
                    <br />
                    &nbsp;&nbsp;);
                    <br />
                    &#125;;
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gradient-primary/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Smart Completion</h4>
                <p className="text-sm text-muted-foreground">Context-aware code suggestions</p>
              </div>
              <div className="bg-gradient-secondary/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Bug Detection</h4>
                <p className="text-sm text-muted-foreground">Automatic error identification</p>
              </div>
              <div className="bg-gradient-accent/10 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Code Optimization</h4>
                <p className="text-sm text-muted-foreground">Performance improvements</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodePage;