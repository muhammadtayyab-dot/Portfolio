import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { TypeAnimation } from "react-type-animation";
import Fuse from "fuse.js";
import { knowledge } from "@/lib/portfolio-knowledge";
import { cn } from "@/lib/utils";

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
        setMessages([{
          id: "init-1",
          role: "bot",
          text: "Hello! I'm Muhammad's AI sidekick. Ask me anything about his projects, skills, rates or how to work together!",
          timestamp: Date.now(),
        }]);
      }
    } else {
      const initialMsg: Message = {
        id: "init-1",
        role: "bot",
        text: "Hello! I'm Muhammad's AI sidekick. Ask me anything about his projects, skills, rates or how to work together!",
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
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

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

    setTimeout(() => {
      const result = fuse.search(userText);
      let botResponse = "I'm still learning... ask me about my projects, rates, or skills!";

      if (result.length > 0) {
        botResponse = result[0].item.answer;
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: botResponse,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-4 z-[9999] w-[calc(100vw-2rem)] max-w-[400px]"
        >
          <Card className="border border-border/50 shadow-2xl bg-card/95 backdrop-blur-xl flex flex-col h-[500px]">
            <CardHeader className="p-4 border-b border-border/50 flex flex-row items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 border border-border">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-xs">AI</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-sm">Muhammad AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Assistant</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            <ScrollArea className="flex-1 p-4 overflow-x-hidden">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex flex-col max-w-[85%] gap-1",
                      msg.role === "user" ? "ml-auto items-end" : "items-start"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-2.5 text-sm leading-relaxed break-words",
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-secondary text-secondary-foreground rounded-tl-none border border-border/50"
                      )}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="bg-secondary w-fit px-4 py-2.5 rounded-2xl rounded-tl-none border border-border/50">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <CardFooter className="p-3 border-t border-border/50">
              <div className="flex w-full items-center gap-2">
                <Input
                  ref={inputRef}
                  placeholder="Ask about projects, rates..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="bg-secondary/50 border-none focus-visible:ring-1 focus-visible:ring-primary h-10"
                />
                <Button onClick={handleSend} size="icon" className="shrink-0 rounded-xl h-10 w-10">
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
