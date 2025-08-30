import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Send, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Bot,
  User,
  MessageSquare
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'warning' | 'success' | 'info';
}

const mockMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your SafePay AI Fraud Alert Agent. I can help analyze your transactions for potential fraud. Share a transaction detail or ask me about suspicious activities.",
    sender: 'bot',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    type: 'info'
  },
];

const FraudAlert = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    // Simulate AI response
    const botResponse: Message = {
      id: messages.length + 2,
      text: generateBotResponse(inputMessage),
      sender: 'bot',
      timestamp: new Date(Date.now() + 1000),
      type: getBotResponseType(inputMessage)
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage("");
  };

  const generateBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('transaction') || lowerInput.includes('payment')) {
      return "I can help analyze that transaction. Based on the pattern, this appears to be a legitimate transaction to a verified merchant. The amount and timing are within normal parameters. Would you like me to check for any red flags?";
    }
    
    if (lowerInput.includes('suspicious') || lowerInput.includes('fraud')) {
      return "⚠️ Here are some red flags to watch for: 1) Unexpected large amounts, 2) Transactions to unknown merchants, 3) Multiple rapid transactions, 4) Requests for sensitive information. Always verify merchant details before making payments.";
    }
    
    if (lowerInput.includes('safe') || lowerInput.includes('secure')) {
      return "✅ Great question! To stay safe: Never share OTPs, verify merchant names, check transaction amounts carefully, and use official apps only. I'm here 24/7 to help verify suspicious activities.";
    }

    return "I can help you identify potential fraud in your UPI transactions. Share transaction details, ask about suspicious activities, or get security tips. What would you like to know?";
  };

  const getBotResponseType = (input: string): 'warning' | 'success' | 'info' => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('suspicious') || lowerInput.includes('fraud')) {
      return 'warning';
    }
    
    if (lowerInput.includes('safe') || lowerInput.includes('secure')) {
      return 'success';
    }
    
    return 'info';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Fraud Alert Agent
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chat with our AI-powered fraud detection agent to analyze transactions and get security advice.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Security Features Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="text-center p-4">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real-time Analysis</h3>
              <p className="text-sm text-muted-foreground">Instant fraud pattern detection</p>
            </Card>
            <Card className="text-center p-4">
              <AlertTriangle className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Risk Assessment</h3>
              <p className="text-sm text-muted-foreground">Advanced threat scoring</p>
            </Card>
            <Card className="text-center p-4">
              <CheckCircle className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Security Tips</h3>
              <p className="text-sm text-muted-foreground">Personalized safety advice</p>
            </Card>
          </div>

          {/* Chat Interface */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Chat with Fraud Alert Agent
              </CardTitle>
              <CardDescription>
                Ask about suspicious transactions or get security advice
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Messages */}
              <ScrollArea className="h-96 mb-4 p-4 border rounded-lg">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          message.sender === 'user' ? 'bg-primary' : 'bg-accent'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </div>
                        
                        {/* Message */}
                        <div className={`px-4 py-3 rounded-lg ${
                          message.sender === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : message.type === 'warning' 
                              ? 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                              : message.type === 'success'
                                ? 'bg-green-50 text-green-800 border border-green-200'
                                : 'bg-muted'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-2 ${
                            message.sender === 'user' 
                              ? 'text-primary-foreground/70' 
                              : 'text-muted-foreground'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Describe a transaction or ask about fraud detection..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Button 
              variant="outline" 
              className="text-left justify-start h-auto p-4"
              onClick={() => setInputMessage("Is this transaction suspicious: ₹5000 to unknown merchant?")}
            >
              <div>
                <p className="font-medium">Check Transaction</p>
                <p className="text-sm text-muted-foreground">Analyze specific payment</p>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="text-left justify-start h-auto p-4"
              onClick={() => setInputMessage("How can I stay safe from UPI fraud?")}
            >
              <div>
                <p className="font-medium">Security Tips</p>
                <p className="text-sm text-muted-foreground">Learn protection methods</p>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              className="text-left justify-start h-auto p-4"
              onClick={() => setInputMessage("What are common fraud patterns in UPI?")}
            >
              <div>
                <p className="font-medium">Fraud Patterns</p>
                <p className="text-sm text-muted-foreground">Identify red flags</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FraudAlert;