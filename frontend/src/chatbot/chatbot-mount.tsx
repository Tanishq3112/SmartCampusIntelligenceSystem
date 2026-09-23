/**
 * Chatbot Standalone Mount
 * 
 * This script creates an independent React root for the chatbot widget.
 * It runs completely separate from the main App tree, ensuring zero
 * interference with existing components.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CampusChatbot } from './CampusChatbot';

// Mount the chatbot on its own root element
const chatbotRoot = document.getElementById('chatbot-root');
if (chatbotRoot) {
  createRoot(chatbotRoot).render(
    <StrictMode>
      <CampusChatbot />
    </StrictMode>
  );
}
