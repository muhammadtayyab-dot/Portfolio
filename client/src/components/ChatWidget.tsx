import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { ChatWindow } from "./ChatWindow";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-1 ring-primary/20"
          >
            <MessageSquare className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
