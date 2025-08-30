import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Users, Lock, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            About SafePay AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make UPI transactions safer and smarter for everyone. 
            SafePay AI combines advanced artificial intelligence with user-friendly design 
            to help you manage your digital payments with confidence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Mission Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To democratize financial security and spending insights for all UPI users
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Security First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your financial data deserves the highest level of protection. We use advanced AI to detect 
                    fraud while keeping your information private and secure.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Smart Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Transform your transaction data into actionable insights. Understand your spending patterns 
                    and make informed financial decisions with AI-powered analytics.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>User-Centric</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Designed for real people, not just tech experts. Our intuitive interface makes complex 
                    financial analytics accessible to everyone, regardless of technical background.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Why SafePay AI Section */}
          <section className="bg-muted/50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Why SafePay AI?
              </h2>
              <p className="text-lg text-muted-foreground">
                The digital payment revolution in India has transformed how we handle money, 
                but with great convenience comes greater responsibility for security and financial awareness.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-6">The Challenge</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>UPI fraud cases are increasing with digital adoption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Most people lack visibility into their spending patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Existing solutions are complex or target only enterprises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span>Financial literacy and fraud awareness need improvement</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Our Solution</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>AI-powered fraud detection that learns from transaction patterns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Automatic categorization and spending insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Simple, accessible interface for all users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span>Real-time alerts and educational guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Lock className="h-6 w-6 text-primary" />
                    Privacy by Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your transaction data is processed locally whenever possible. We believe in transparent 
                    data practices and give you full control over your financial information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-accent" />
                    Accuracy & Trust
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We continuously improve our AI algorithms to provide accurate fraud detection and 
                    categorization. Trust is earned through reliable performance and honest communication.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="h-6 w-6 text-primary" />
                    Accessibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Financial security shouldn't be a luxury. Our tools are designed to be accessible 
                    to users across all economic segments and technical comfort levels.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    Continuous Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The digital payments landscape evolves rapidly. We stay ahead of emerging threats 
                    and opportunities to keep our users protected and informed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Impact Section */}
          <section className="text-center bg-gradient-hero rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Making a Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Every transaction analyzed, every fraud prevented, and every insight provided contributes 
              to a safer, more financially aware community. Join us in building a more secure digital 
              payment ecosystem for everyone.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Transactions Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-muted-foreground">Fraud Detection Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Protection Coverage</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;