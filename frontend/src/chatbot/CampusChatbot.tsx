import React, { useState, useRef, useEffect, useCallback } from 'react';
import { getChatResponse, getWelcomeMessage } from './campusKnowledge';
import './chatbot.css';

interface ChatMessage {
  id: string;
  role: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

/**
 * Minimal Markdown-like renderer for bot messages.
 * Supports: **bold**, `code`, tables (|...|), bullet lists, and newlines.
 */
function renderMarkdown(text: string): React.ReactNode {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let tableRows: string[][] = [];
  let inTable = false;

  const parseInline = (line: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    // Match **bold** and `code`
    const regex = /(\*\*(.+?)\*\*)|(`(.+?)`)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index));
      }
      if (match[2]) {
        parts.push(<strong key={match.index}>{match[2]}</strong>);
      } else if (match[4]) {
        parts.push(<code key={match.index}>{match[4]}</code>);
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < line.length) {
      parts.push(line.slice(lastIndex));
    }
    return parts.length ? parts : [line];
  };

  const flushTable = () => {
    if (tableRows.length < 2) {
      tableRows = [];
      return;
    }
    const headers = tableRows[0];
    const dataRows = tableRows.slice(2); // skip header and separator row
    elements.push(
      <table key={`tbl-${elements.length}`}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{parseInline(h.trim())}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{parseInline(cell.trim())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
    tableRows = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Table row detection
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      inTable = true;
      const cells = trimmed.slice(1, -1).split('|');
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
      inTable = false;
    }

    // Empty line
    if (!trimmed) {
      elements.push(<br key={`br-${i}`} />);
      continue;
    }

    // Bullet lists
    if (/^[•\-\*]\s/.test(trimmed)) {
      const content = trimmed.replace(/^[•\-\*]\s*/, '');
      elements.push(
        <div key={`li-${i}`} style={{ paddingLeft: '12px', display: 'flex', gap: '6px', marginBottom: '2px' }}>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>{parseInline(content)}</span>
        </div>
      );
      continue;
    }

    // Numbered lists
    if (/^\d+\.\s/.test(trimmed)) {
      const num = trimmed.match(/^(\d+)\./)?.[1] || '';
      const content = trimmed.replace(/^\d+\.\s*/, '');
      elements.push(
        <div key={`ol-${i}`} style={{ paddingLeft: '12px', display: 'flex', gap: '6px', marginBottom: '2px' }}>
          <span style={{ opacity: 0.6, fontWeight: 600, minWidth: '16px' }}>{num}.</span>
          <span>{parseInline(content)}</span>
        </div>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <div key={`p-${i}`} style={{ marginBottom: '2px' }}>
        {parseInline(trimmed)}
      </div>
    );
  }

  // Flush any remaining table
  if (inTable) flushTable();

  return elements;
}

export const CampusChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasInitialized = useRef(false);

  // Initialize with welcome message
  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      const welcome = getWelcomeMessage();
      setMessages([
        {
          id: 'welcome',
          role: 'bot',
          content: welcome.message,
          timestamp: new Date(),
        },
      ]);
      setSuggestions(welcome.suggestions);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setSuggestions([]);
      setIsTyping(true);

      // Simulate brief "thinking" delay for realism
      const delay = 400 + Math.random() * 600;
      setTimeout(() => {
        const response = getChatResponse(trimmed);
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          role: 'bot',
          content: response.message,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setSuggestions(response.suggestions);
        setIsTyping(false);
      }, delay);
    },
    []
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`chatbot-overlay ${isOpen ? 'chatbot-overlay--open' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Floating Action Button */}
      <button
        className={`chatbot-fab ${isOpen ? 'chatbot-fab--open' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open campus AI assistant'}
        title="Campus AI Assistant"
      >
        {isOpen ? (
          // Close icon
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
          </svg>
        ) : (
          // Chat icon
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9z" />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      <div className={`chatbot-panel ${isOpen ? 'chatbot-panel--open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-avatar">🤖</div>
          <div className="chatbot-header-info">
            <div className="chatbot-header-title">Campus AI Assistant</div>
            <div className="chatbot-header-status">
              <div className="chatbot-header-status-dot" />
              <span>SBJITMR · Always online</span>
            </div>
          </div>
          <button
            className="chatbot-header-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chatbot-msg chatbot-msg--${msg.role}`}>
              <div className="chatbot-msg-avatar">
                {msg.role === 'bot' ? '🤖' : '👤'}
              </div>
              <div className="chatbot-msg-bubble">
                {msg.role === 'bot' ? renderMarkdown(msg.content) : msg.content}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="chatbot-typing">
              <div className="chatbot-msg-avatar" style={{ background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)', borderRadius: '10px', width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                🤖
              </div>
              <div className="chatbot-typing-bubble">
                <div className="chatbot-typing-dot" />
                <div className="chatbot-typing-dot" />
                <div className="chatbot-typing-dot" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        {suggestions.length > 0 && !isTyping && (
          <div className="chatbot-suggestions">
            {suggestions.map((s, i) => (
              <button
                key={i}
                className="chatbot-suggestion-chip"
                onClick={() => sendMessage(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="chatbot-input-area">
          <input
            ref={inputRef}
            type="text"
            className="chatbot-input"
            placeholder="Ask me anything about campus..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
            autoComplete="off"
          />
          <button
            className="chatbot-send-btn"
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isTyping}
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>

        {/* Footer */}
        <div className="chatbot-footer">
          Powered by Campus AI · SBJITMR Nagpur
        </div>
      </div>
    </>
  );
};
