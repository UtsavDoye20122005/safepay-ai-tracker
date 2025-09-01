import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatbotWidget from "./ChatbotWidget";
import FloatingActions from "./FloatingActions";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/30e0b643-4961-4092-a8ac-7c3d85dfe80d.png" 
                alt="SafeFlow Logo" 
                className="h-10 w-auto group-hover:scale-105 transition-transform"
              />
              <span className="text-xl font-bold text-foreground">SafeFlow</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/categorizer" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/categorizer') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Categorizer
              </Link>
              <Link 
                to="/fraud-alert" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/fraud-alert') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Fraud Alert
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-slide-in">
              <nav className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/categorizer" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/categorizer') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorizer
                </Link>
                <Link 
                  to="/fraud-alert" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/fraud-alert') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fraud Alert
                </Link>
                <Link 
                  to="/about" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t bg-card mt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 SafeFlow. Made to keep your UPI transactions secure.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
      <FloatingActions />
    </div>
  );
};

export default Layout;