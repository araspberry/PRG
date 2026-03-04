import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, CheckCircle2, Building2, MapPin, User, Phone, Mail } from 'lucide-react';
import { cn } from '../utils/cn';
import { SERVICE_AREAS } from '../constants';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: string[];
  field?: string;
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Welcome to Pullum Real Estate Group. I'm your luxury concierge. Are you looking to buy, sell, or rent?",
      options: ['Buy', 'Sell', 'Rent'],
      field: 'intent'
    }
  ]);
  const [formData, setFormData] = useState({
    intent: '',
    city: '',
    name: '',
    phone: '',
    email: '',
  });
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };

  const handleOptionClick = (option: string, field: string) => {
    // Add user message
    addMessage({ id: Date.now().toString(), type: 'user', text: option });
    
    // Update data
    const updatedData = { ...formData, [field]: option };
    setFormData(updatedData);

    // Trigger next bot question
    setTimeout(() => {
      if (field === 'intent') {
        addMessage({
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: `Excellent. Which area on the Emerald Coast are you interested in?`,
          options: SERVICE_AREAS,
          field: 'city'
        });
      } else if (field === 'city') {
        addMessage({
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: `Perfect choice. May I have your full name so I can address you properly?`,
          field: 'name'
        });
      }
    }, 600);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const currentBotMsg = [...messages].reverse().find(m => m.type === 'bot' && m.field);
    if (!currentBotMsg) return;

    const field = currentBotMsg.field!;
    const text = inputValue.trim();

    addMessage({ id: Date.now().toString(), type: 'user', text });
    setFormData(prev => ({ ...prev, [field]: text }));
    setInputValue('');

    setTimeout(() => {
      if (field === 'name') {
        addMessage({
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: `Thank you, ${text}. What is the best phone number to reach you?`,
          field: 'phone'
        });
      } else if (field === 'phone') {
        addMessage({
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: `And finally, your email address so we can send you curated listings?`,
          field: 'email'
        });
      } else if (field === 'email') {
        setIsSubmitted(true);
        addMessage({
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: `Thank you. Our luxury concierge team has been notified. Expect excellence.`,
        });
      }
    }, 600);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Pulsing Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        <div className="absolute inset-0 bg-brand rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative w-16 h-16 bg-brand rounded-full flex items-center justify-center shadow-2xl shadow-brand/40 text-white transition-transform hover:scale-110">
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </div>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[380px] h-[520px] bg-white rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-zinc-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg leading-tight">Pullum Concierge</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Live Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar"
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    msg.type === 'user' ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div className={cn(
                    "px-4 py-3 rounded-2xl text-sm leading-relaxed",
                    msg.type === 'user' 
                      ? "bg-brand text-white rounded-tr-none" 
                      : "bg-zinc-100 text-zinc-800 rounded-tl-none"
                  )}>
                    {msg.text}
                  </div>
                  
                  {msg.options && !isSubmitted && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionClick(opt, msg.field!)}
                          className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:border-brand hover:text-brand transition-all shadow-sm"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-4 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-3" />
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Request Received</p>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            {!isSubmitted && (
              <div className="p-4 border-t border-zinc-100 bg-zinc-50">
                <form 
                  onSubmit={handleInputSubmit}
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-full py-3 pl-5 pr-12 text-sm focus:outline-none focus:border-brand transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 p-2 bg-brand text-white rounded-full hover:bg-brand-light transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
