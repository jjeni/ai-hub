import { Music, Code, Terminal} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContributorAvatars } from "@/components/ContributorAvatars";
import Navbar from "@/components/Navbar";
import aud1 from "@/assets/audio/audio (1).mp3";
import aud2 from "@/assets/audio/audio (2).mp3";
import aud3 from "@/assets/audio/audio (3).mp3"; 

const audios = [
  { src: aud1, title: "Relaxing Music" , prompt: "lorem ipsumYou want to use your MP3 audio files in place of the images inside that grid. Since your current code is mapping over an images array, you can adapt it into an audios array (or keep it generic like media) and render <audio> instead of <img>. asiaiaou ashaso saos assdvdsvdsdffdfadfafadfadfadfaffdafadfafaf "},
  { src: aud2, title: "Nature Sounds", prompt: "lorem ipsum asiaiaou ashaso saos You want to use your MP3 audio files in place of the images inside that grid. Since your current code is mapping over an images array, you can adapt it into an audios array (or keep it generic like media) and render <audio> instead of <img>."},
  { src: aud3, title: "Podcast Episode", prompt: "lorem ipsum asiaiaou ashaso saos assdvdsvdsdffdfadfafadYou want to use your MP3 audio files in place of the images inside that grid. Since your current code is mapping over an images array, you can adapt it into an audios array (or keep it generic like media) and render <audio> instead of <img>.fadfadfaffdafadfafaf"},
];


const MusicPage = () => {
  const contributors = ["Jeni", "Karthik", "Rishaban","Bhuvaneshwaran", "Chiranjeevi","Thamilavan", "Harish"];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-xl mb-6 mx-auto animate-glow">
              <Music className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              AI Music 
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enjoy exclusive tracks created with the power of artificial intelligence.
            </p>
          </div>
          

          {/* Demo Area */}
          <div className="  p-8">
            {/* <h2 className="text-2xl font-bold text-foreground mb-6">AI Generated Audio</h2> */}
            
            {/* Audio Player UI */}
            <div className="bg-gradient-primary/10 rounded-lg p-6 mb-6">
              <div className="flex flex-col items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">AI Generated Audio</h3>
                </div>
                
                <div className="mt-8 flex flex-row items-start justify-between mb-3 p-6">
                  <div>
                    {audios.map((audio, index) => (
                      <div key={index} className="group w-full relative mb-10 mt-5 mx-8 border border-white/20 px-10 py-5 rounded-lg border border-white/10">
                        <div className="w-full flex p-7 flex-col items-start justify-between mx-10">
                            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-3">
                              <Terminal className="w-5 h-5" />
                              Prompt
                            </h3>
                            <div className="bg-muted/30 rounded-lg p-4 border border-white/10 mx-10">
                              <textarea 
                              className="w-96 px-8 py-6 bg-transparent border-none resize-none text-foreground placeholder-muted-foreground focus:outline-none"
                              rows={10}
                              placeholder="Your Prompt goes here"
                              value={audio.prompt}
                             />
                            </div>
               
                        </div>
                        <div className="display-block aspect-auto p-4  bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-white/10 flex flex-col items-center justify-center hover:shadow-glow transition-all duration-300">
                          <audio controls className="w-full">
                            <source src={audio.src} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                        <p className="text-s text-muted-foreground mt-2 text-center">{audio.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contributors */}
          <div className="glass-dark rounded-xl p-6 mt-8 mb-8 border border-white/20">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contributors</h2>
            <ContributorAvatars contributors={contributors} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
              {contributors.map((contributor, index) => (
                <div key={contributor} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg">
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

export default MusicPage;