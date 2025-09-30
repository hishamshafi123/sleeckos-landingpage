import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Show loading state immediately for better UX and to indicate progress
rootElement.innerHTML =
  '<div style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #0A0A0A; color: white; font-family: system-ui;">' +
  '<div style="text-align: center;">' +
  '<div style="border: 3px solid #00E5FF; border-top: 3px solid transparent; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>' +
  '<p>Loading...</p>' +
  '</div>' +
  '</div>' +
  '<style>@keyframes spin { to { transform: rotate(360deg); }}</style>';

createRoot(rootElement).render(<App />);
