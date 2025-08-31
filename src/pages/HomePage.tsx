import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Shield, ArrowRight, TrendingUp, Users, Lock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Track. Categorize. <span className="text-primary">Stay Safe.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Take control of your UPI transactions with AI-powered categorization and fraud detection. 
                Protect your money while understanding your spending patterns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/categorizer">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img 
                src={heroImage} 
                alt="SafeFlow - UPI Transaction Management"
                className="w-full rounded-2xl shadow-feature"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Two Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage and secure your UPI transactions in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Transaction Categorizer */}
            <Card className="group hover:shadow-feature transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Transaction Categorizer</CardTitle>
                <CardDescription className="text-base">
                  Upload or enter your UPI transaction data and get instant categorization with visual insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    Automatic expense categorization (food, travel, bills, etc.)
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    Interactive charts and spending analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    Monthly and yearly spending insights
                  </li>
                </ul>
                <Button asChild className="w-full group">
                  <Link to="/categorizer">
                    Start Categorizing
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fraud Alert Agent */}
            <Card className="group hover:shadow-feature transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="pb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Fraud Alert Agent</CardTitle>
                <CardDescription className="text-base">
                  AI-powered assistant that analyzes patterns and warns about suspicious transactions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Real-time transaction pattern analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Intelligent fraud detection algorithms
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    Instant alerts for suspicious activities
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full group border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Link to="/fraud-alert">
                    Chat with Agent
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How SafeFlow Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and intelligent - protect your finances in three easy steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Upload Transactions</h3>
              <p className="text-muted-foreground">
                Import your UPI transaction history or enter new transactions manually. Your data stays secure and private.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. AI Analysis</h3>
              <p className="text-muted-foreground">
                Our AI automatically categorizes expenses and analyzes patterns to detect potential fraud or suspicious activities.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Stay Protected</h3>
              <p className="text-muted-foreground">
                Get instant insights about your spending and receive alerts about potentially fraudulent transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;