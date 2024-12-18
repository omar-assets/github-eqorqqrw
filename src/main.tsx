import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LoadingScreen } from './components/ui/LoadingScreen';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

// Show loading screen first
root.render(
  <StrictMode>
    <LoadingScreen />
  </StrictMode>
);

// Render full app after brief delay
setTimeout(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}, 1000); // Reduced from 1500ms to 1000ms for faster loading