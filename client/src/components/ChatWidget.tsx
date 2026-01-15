import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.8)]"
          >
            <MessageCircle className="h-7 w-7 text-white" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
