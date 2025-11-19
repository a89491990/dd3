import { Button } from "@/components/ui/button";
import heroPoster from "@/assets/hero-poster.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Poster with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroPoster})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-float">
            <img 
              src={logo} 
              alt="Game Logo" 
              className="h-24 md:h-32 lg:h-40 w-auto drop-shadow-2xl"
            />
          </div>

          {/* Main Content */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider">
              <span className="block text-neon-cyan text-glow-cyan animate-pulse-glow">Ultimate</span>
              <span className="block text-neon-magenta text-glow-magenta animate-pulse-glow">Combat</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-semibold tracking-wide">
              EXPERIENCE THE MOST INTENSE FIGHTING ACTION
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" variant="combat" className="text-lg px-12 py-6 h-auto">
                PLAY NOW
              </Button>
              <Button size="lg" variant="neon" className="text-lg px-12 py-6 h-auto">
                WATCH TRAILER
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="LIGHTNING FAST"
              description="60 FPS combat with frame-perfect inputs"
              accentColor="cyan"
            />
            <FeatureCard
              title="EXPLOSIVE POWERS"
              description="Master devastating special moves and combos"
              accentColor="magenta"
            />
            <FeatureCard
              title="COMPETE ONLINE"
              description="Challenge fighters from around the world"
              accentColor="red"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  accentColor: "cyan" | "magenta" | "red";
}

const FeatureCard = ({ title, description, accentColor }: FeatureCardProps) => {
  const glowClass = accentColor === "cyan" ? "text-glow-cyan" : 
                    accentColor === "magenta" ? "text-glow-magenta" : "text-glow-red";
  const colorClass = accentColor === "cyan" ? "text-neon-cyan border-neon-cyan" : 
                     accentColor === "magenta" ? "text-neon-magenta border-neon-magenta" : 
                     "text-neon-red border-neon-red";

  return (
    <div className="relative group">
      <div className={`
        p-8 rounded-lg border-2 bg-card/50 backdrop-blur-sm
        transition-all duration-300 hover:scale-105 hover:bg-card/80
        ${colorClass}
      `}>
        <h3 className={`text-2xl font-bold mb-4 ${glowClass}`}>
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Index;
