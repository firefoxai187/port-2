import React, { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      content: "Hi! I'm Uyen's digital twin. Ask me about her work history, availability, or marketing philosophy.",
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Mock AI Response (Can be replaced with real backend fetch later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          content: "Thanks for reaching out! Since my intelligence core is currently being set up in the cloud, please reach out to Uyen directly via the contact form or LinkedIn!",
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-[calc(100%+1rem)] right-0 w-[340px] bg-surface-container-lowest shadow-[0_16px_40px_rgba(176,0,70,0.15)] border border-surface-container flex flex-col transition-all overflow-hidden animate-fade-in origin-bottom-right">
          
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-surface-container-highest bg-surface-container">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary animate-pulse"></div>
              <span className="font-bold text-[10px] tracking-widest uppercase text-on-surface">Uyen AI Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-secondary hover:text-primary transition-colors flex items-center justify-center p-1"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex flex-col gap-4 p-5 h-80 overflow-y-auto bg-surface-container-lowest custom-scrollbar">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col max-w-[85%] ${msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'}`}
              >
                <div 
                  className={`p-4 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-on-primary' 
                      : 'bg-surface-container-low text-on-surface border border-surface-container-highest'
                  }`}
                  style={{
                    borderRadius: msg.role === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0'
                  }}
                >
                  {msg.content}
                </div>
                <span className="text-[9px] uppercase tracking-widest text-secondary/50 mt-1 px-1 font-bold">
                  {msg.role === 'user' ? 'You' : 'AI Assistant'}
                </span>
              </div>
            ))}
            
            {isTyping && (
              <div className="self-start items-start flex flex-col max-w-[85%]">
                <div className="p-4 bg-surface-container-low border border-surface-container-highest flex items-center gap-1.5" style={{ borderRadius: '12px 12px 12px 0' }}>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-primary/80 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-surface-container border-t border-surface-container-highest flex items-center gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..." 
              className="flex-1 bg-surface-container-lowest border border-surface-container-highest text-sm py-3 px-4 focus:ring-1 focus:ring-primary focus:outline-none placeholder:text-secondary/50" 
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="bg-primary text-on-primary disabled:bg-surface-container-highest disabled:text-secondary/30 hover:bg-primary-container transition-colors w-10 h-10 flex items-center justify-center shrink-0"
            >
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-on-primary flex items-center justify-center shadow-[0_16px_40px_rgba(176,0,70,0.2)] hover:scale-110 transition-transform"
      >
        <span className="material-symbols-outlined text-3xl transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
          {isOpen ? 'close' : 'chat_bubble'}
        </span>
      </button>
    </div>
  );
}
