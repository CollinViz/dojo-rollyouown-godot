import ReactDOM from 'react-dom/client';
import App from './App.tsx';
declare global {
    interface Window {
        systemCalls?: any;
        components?: any;
        network?: any;
        account?: any;
    }
  }
  
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("React root not found");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);