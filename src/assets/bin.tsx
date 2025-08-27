<div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {/* Video Player */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4"> Preview</h3>
                <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg aspect-video overflow-hidden border border-white/10 ">
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
            </div>