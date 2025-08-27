import { Video, Play, Pause, SkipBack, SkipForward, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorAvatars } from "@/components/ContributorAvatars";
import Navbar from "@/components/Navbar";
import vid1 from "@/assets/videos/video (1).mp4";
import vid2 from "@/assets/videos/video (2).mp4";
import vid3 from "@/assets/videos/video (3).mp4";

const videos = [{ src: vid1, prompt : "A", title : ""},
                { src: vid2, prompt: "B", title : ""},
                { src: vid3, prompt: "C", title : "" }]

const VideoPage = () => {
  const contributors = ["Sanjay", "Esakkiraj", "Muthuselvam", "Balakrishnan", "Hariram", "Venkatesh", "Yokesh"];
  
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
              AI Video
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn ideas into videos—instantly with AI.
            </p>
          </div>



          {/* Demo Area */}
          <div className="glass-dark rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">AI Generated Video</h2>
             <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                {videos.map((video, index) => (
                  <div key={index} className="group relative">
                    <div className="aspect-auto p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-white/10 flex items-center justify-center hover:shadow-glow transition-all duration-300">
                      <video className="w-full h-400px object-fill text-primary group-hover:scale-120 transition-transform" title={video.title} controls>
                        <source src={video.src} type="video/mp4"/>
                      </video>
                    </div>
                    <p className="text-s text-muted-foreground mt-2 text-center">{video.title}</p>
                  </div>
                ))}
              </div>
            </div>

            
          </div>

          {/* Contributors */}
          <div className="glass-dark rounded-xl p-6 mt-8 mb-3 border border-white/20">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contributors</h2>
            <ContributorAvatars contributors={contributors} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {contributors.map((contributor, index) => (
                <div key={contributor} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
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

export default VideoPage;