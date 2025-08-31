import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot,
  User,
  Loader2,
  Minimize2
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'warning' | 'success' | 'info';
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm SafeFlow's AI assistant. I can help with transaction analysis, fraud detection, and financial security questions. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'info'
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const callGeminiAPI = async (userInput: string): Promise<string> => {
    const GEMINI_API_KEY = "AIzaSyBmLzYG7AY7RLizWgNW8Q_DXC02AjQZ7Jk";
    const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
    
    const systemPrompt = `You are SafeFlow's AI assistant, specialized in UPI transactions and financial security.

Your role:
- Help with transaction categorization and analysis
- Provide financial security advice
- Answer questions about UPI fraud detection
- Assist with SafeFlow app features

Guidelines:
- Be helpful, friendly, and concise
- Focus on financial technology and security
- Keep responses under 100 words
- Use 💡 for tips, ⚠️ for warnings, ✅ for confirmations`;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `${systemPrompt}\n\nUser Query: ${userInput}`
            }
          ]
        }
      ]
    };

    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': GEMINI_API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm unable to respond right now. Please try again.";
  };

  const getBotResponseType = (response: string): 'warning' | 'success' | 'info' => {
    const lowerResponse = response.toLowerCase();
    
    if (lowerResponse.includes('⚠️') || lowerResponse.includes('warning') || lowerResponse.includes('fraud') || lowerResponse.includes('risk')) {
      return 'warning';
    }
    
    if (lowerResponse.includes('✅') || lowerResponse.includes('safe') || lowerResponse.includes('secure')) {
      return 'success';
    }
    
    return 'info';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const botResponseText = await callGeminiAPI(inputMessage);
      const botResponse: Message = {
        id: messages.length + 2,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
        type: getBotResponseType(botResponseText)
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorResponse: Message = {
        id: messages.length + 2,
        text: "I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date(),
        type: 'warning'
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 animate-scale-in">
          <Card className="w-80 h-96 shadow-lg border">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary" />
                  SafeFlow Assistant
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0"
                >
                  <Minimize2 className="h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-3 space-y-3">
              {/* Messages */}
              <ScrollArea className="h-48 pr-2">
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* Avatar */}
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                          message.sender === 'user' ? 'bg-primary' : 'bg-accent'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="h-3 w-3" />
                          ) : (
                            <Bot className="h-3 w-3" />
                          )}
                        </div>
                        
                        {/* Message */}
                        <div className={`px-3 py-2 rounded-lg text-xs ${
                          message.sender === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : message.type === 'warning' 
                              ? 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                              : message.type === 'success'
                                ? 'bg-green-50 text-green-800 border border-green-200'
                                : 'bg-muted'
                        }`}>
                          <p>{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-2 max-w-[85%]">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-accent text-white text-xs">
                          <Bot className="h-3 w-3" />
                        </div>
                        <div className="px-3 py-2 rounded-lg bg-muted">
                          <Loader2 className="h-3 w-3 animate-spin" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="text-xs h-8"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  size="sm"
                  className="h-8 w-8 p-0"
                >
                  {isLoading ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : (
                    <Send className="h-3 w-3" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 left-4 z-40 h-12 w-12 rounded-full shadow-lg hover:scale-105 transition-all duration-200 ${
          isOpen ? 'bg-muted-foreground hover:bg-muted-foreground' : ''
        }`}
        size="sm"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </Button>
    </>
  );
};

export default ChatbotWidget;