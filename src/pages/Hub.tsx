import { useState } from "react";
import { Users, Plus, Heart, MessageCircle, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const HubPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();

  const posts = [
    {
      id: 1,
      title: "New AI Music Model Released",
      description: "Just discovered this amazing new model that can generate orchestral music. The quality is incredible!",
      author: "Alex Chen",
      tags: ["music", "ai-models", "orchestra"],
      likes: 24,
      comments: 8,
      createdAt: "2 hours ago"
    },
    {
      id: 2,
      title: "Code Generation Best Practices",
      description: "After working with various AI coding assistants, here are my top tips for getting better results...",
      author: "Sarah Johnson",
      tags: ["coding", "tips", "productivity"],
      likes: 45,
      comments: 12,
      createdAt: "5 hours ago"
    },
    {
      id: 3,
      title: "Video Generation Breakthrough",
      description: "The latest video AI models are getting closer to Hollywood quality. Check out these examples!",
      author: "Mike Rodriguez",
      tags: ["video", "breakthrough", "quality"],
      likes: 67,
      comments: 23,
      createdAt: "1 day ago"
    }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Welcome to AI Hub!",
      description: "You're now connected to the community.",
    });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="glass-dark rounded-2xl p-12 border border-white/20 max-w-2xl mx-auto">
                <Users className="w-20 h-20 text-primary mx-auto mb-6 animate-pulse" />
                <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                  Welcome to AI Hub
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Join our community of AI enthusiasts to share ideas, discover tools, and connect with fellow innovators.
                </p>
                <Button variant="gradient" size="lg" onClick={handleLogin} className="px-8 py-3">
                  Sign In with Google
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Sign in to explore posts, share your ideas, and engage with the community.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                AI Hub Community
              </h1>
              <p className="text-muted-foreground">Share ideas, tools, and learning updates</p>
            </div>
            <Button variant="gradient" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Post
            </Button>
          </div>

          {/* Create Post */}
          <div className="glass-dark rounded-xl p-6 mb-8 border border-white/20">
            <h2 className="text-lg font-semibold text-foreground mb-4">Create a New Post</h2>
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Post title..."
                className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground placeholder-muted-foreground"
              />
              <textarea 
                placeholder="Share your ideas, tools, or learning updates..."
                rows={4}
                className="w-full bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground placeholder-muted-foreground resize-none"
              />
              <div className="flex items-center gap-4">
                <input 
                  type="text"
                  placeholder="Add tags (comma separated)"
                  className="flex-1 bg-muted/30 border border-white/20 rounded-lg p-3 text-foreground placeholder-muted-foreground"
                />
                <Button variant="gradient">
                  Publish Post
                </Button>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="glass-dark rounded-xl p-6 border border-white/20 hover:shadow-glow transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{post.author}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {post.createdAt}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 bg-primary/20 text-primary px-2 py-1 rounded-full text-xs">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="glass" className="px-8">
              Load More Posts
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HubPage;