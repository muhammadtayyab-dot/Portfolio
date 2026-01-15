import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";
import Fuse from "fuse.js";
import { knowledge } from "@/lib/portfolio-knowledge";
import { cn } from "@/lib/utils";
import muhammadPhoto from "@assets/WhatsApp_Image_2026-01-15_at_7.30.53_AM_1768460571326.jpeg";

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  timestamp: number;
}

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_KEY = "muhammad-portfolio-chat-history";

const fuse = new Fuse(knowledge, {
  keys: ["keywords"],
  threshold: 0.4,
  includeScore: true,
});

export function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse chat history", e);
      }
    } else {
      const initialMsg: Message = {
        id: "init-1",
        role: "bot",
        text: "Hello! I'm Muhammad's AI sidekick. Ask me anything about his AI projects, skills, rates or how to work together! 🪄",
        timestamp: Date.now(),
      };
      setMessages([initialMsg]);
      localStorage.setItem(STORAGE_KEY, JSON.stringify([initialMsg]));
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    setInputValue("");

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      text: userText,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    const delay = Math.random() * 700 + 800;

    setTimeout(() => {
      const result = fuse.search(userText);
      let botResponse = "I'm still learning new spells... but ask me about my projects, skills, services or rates! ✨";

      if (result.length > 0) {
        botResponse = result[0].item.answer;
      } else {
        const lower = userText.toLowerCase();
        if (lower.includes("price") || lower.includes("rate") || lower.includes("cost")) {
           botResponse = knowledge.find(k => k.keywords.includes("rate"))?.answer || botResponse;
        }
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: botResponse,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleQuickReply = (text: string) => {
    setInputValue(text);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-4 z-[9999] w-[90vw] max-w-[380px] sm:right-6"
        >
          <Card className="border-primary/30 shadow-2xl bg-card/95 backdrop-blur-md overflow-hidden flex flex-col h-[500px] sm:h-[600px]">
            <CardHeader className="p-4 bg-primary/10 border-b border-primary/10 flex flex-row items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/40 blur-md rounded-full animate-pulse"></div>
                  <Avatar className="h-10 w-10 border-2 border-primary relative z-10">
                    <AvatarImage src={muhammadPhoto} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
                    Muhammad AI
                    <Sparkles className="h-3 w-3 text-secondary animate-pulse" />
                  </h3>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:bg-primary/20 hover:text-primary rounded-full h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-background/50 to-background/80">
              <div className="space-y-4 flex flex-col">
                {messages.map((msg, index) => {
                  const isLast = index === messages.length - 1;
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "flex w-max max-w-[85%] flex-col gap-2 rounded-2xl px-4 py-3 text-sm shadow-sm",
                        msg.role === "user"
                          ? "ml-auto bg-primary text-primary-foreground rounded-tr-sm"
                          : "bg-muted/80 text-foreground border border-primary/10 rounded-tl-sm"
                      )}
                    >
                      {msg.role === "bot" && isLast && !isTyping ? (
                        <TypeAnimation
                          sequence={[msg.text]}
                          wrapper="span"
                          speed={65}
                          cursor={false}
                        />
                      ) : (
                        <span className="whitespace-pre-wrap">{msg.text}</span>
                      )}
                    </motion.div>
                  );
                })}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-1 bg-muted/50 w-fit px-4 py-3 rounded-2xl rounded-tl-sm border border-primary/5"
                  >
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></span>
                  </motion.div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <div className="px-4 py-2 bg-background/50 flex gap-2 overflow-x-auto no-scrollbar">
              {["Projects", "Rates", "Services", "Hire"].map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleQuickReply(chip)}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors whitespace-nowrap"
                >
                  {chip}
                </button>
              ))}
            </div>

            <CardFooter className="p-3 bg-card border-t border-border">
              <div className="flex w-full items-center gap-2">
                <Input
                  ref={inputRef}
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-muted/50 border-primary/20 focus-visible:ring-primary/50"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0 rounded-full shadow-lg shadow-primary/20"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
