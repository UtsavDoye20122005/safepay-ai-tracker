import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Percent, 
  Wallet, 
  Play, 
  X,
  TrendingUp,
  DollarSign,
  Video
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const FloatingActions = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false);

  const actions = [
    {
      id: 'discounts',
      icon: Percent,
      label: 'Discounts',
      color: 'bg-gradient-primary',
      hoverColor: 'hover:shadow-glow',
      card: {
        title: 'Special Discounts',
        content: (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
              <span className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-accent" />
                Premium Plan
              </span>
              <span className="text-accent font-semibold">50% OFF</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
              <span className="flex items-center gap-2">
                <Percent className="h-4 w-4 text-primary" />
                First Month
              </span>
              <span className="text-primary font-semibold">FREE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Limited time offers for new SafePay AI users. Secure your financial future with AI-powered insights.
            </p>
          </div>
        )
      }
    },
    {
      id: 'savings',
      icon: Wallet,
      label: 'Monthly Savings',
      color: 'bg-gradient-accent',
      hoverColor: 'hover:shadow-glow',
      card: {
        title: 'Your Potential Savings',
        content: (
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">₹2,450</div>
              <p className="text-sm text-muted-foreground">Average monthly savings with SafePay AI</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Fraud Prevention</span>
                <span className="text-accent font-medium">₹1,200</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Smart Categorization</span>
                <span className="text-accent font-medium">₹850</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Budget Optimization</span>
                <span className="text-accent font-medium">₹400</span>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
              <TrendingUp className="h-4 w-4 text-accent" />
              <span className="text-sm">98% of users save money within first month</span>
            </div>
          </div>
        )
      }
    },
    {
      id: 'demo',
      icon: Play,
      label: 'Watch Demo',
      color: 'bg-warning',
      hoverColor: 'hover:bg-warning/90',
      isVideo: true
    }
  ];

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {actions.map((action, index) => {
          const IconComponent = action.icon;
          
          if (action.isVideo) {
            return (
              <Dialog key={action.id} open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className={`
                      h-14 w-14 rounded-full shadow-lg transition-all duration-300 
                      bg-muted/20 text-muted-foreground/60 border border-muted/30
                      hover:bg-muted/40 hover:text-muted-foreground/80
                      hover:scale-110 group relative
                      animate-fade-in
                    `}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <IconComponent className="h-6 w-6" />
                    <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-card text-card-foreground px-3 py-1 rounded-md shadow-lg whitespace-nowrap text-sm border">
                      {action.label}
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-card border-y-4 border-y-transparent"></div>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Video className="h-5 w-5" />
                      SafePay AI Demo
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">
                        Upload your demo video to showcase how SafePay AI works
                      </p>
                      <input
                        type="file"
                        accept="video/*"
                        className="hidden"
                        id="demo-video"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            // Handle video upload here
                            console.log('Video uploaded:', file.name);
                          }
                        }}
                      />
                      <label htmlFor="demo-video">
                        <Button variant="outline" className="cursor-pointer" asChild>
                          <span>Choose Video File</span>
                        </Button>
                      </label>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      Supported formats: MP4, WebM, AVI (Max size: 50MB)
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            );
          }

          return (
            <div key={action.id} className="relative">
              <Button
                size="lg"
                onClick={() => setActiveCard(activeCard === action.id ? null : action.id)}
                className={`
                  h-14 w-14 rounded-full shadow-lg transition-all duration-300 
                  bg-muted/20 text-muted-foreground/60 border border-muted/30
                  hover:bg-muted/40 hover:text-muted-foreground/80
                  hover:scale-110 group relative
                  animate-fade-in
                  ${activeCard === action.id ? 'scale-110 bg-muted/40 text-muted-foreground/80' : ''}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <IconComponent className="h-6 w-6" />
                <div className="absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-card text-card-foreground px-3 py-1 rounded-md shadow-lg whitespace-nowrap text-sm border">
                  {action.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-card border-y-4 border-y-transparent"></div>
                </div>
              </Button>

              {/* Expandable Card */}
              {activeCard === action.id && (
                <Card className="absolute right-20 top-0 w-80 shadow-feature animate-scale-in border bg-card/95 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{action.card.title}</CardTitle>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setActiveCard(null)}
                        className="h-6 w-6 p-0 hover:bg-muted/80"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {action.card.content}
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>

      {/* Overlay to close cards */}
      {activeCard && (
        <div
          className="fixed inset-0 bg-background/20 backdrop-blur-[1px] z-30"
          onClick={() => setActiveCard(null)}
        />
      )}
    </>
  );
};

export default FloatingActions;