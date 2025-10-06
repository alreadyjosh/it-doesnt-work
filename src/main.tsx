import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Handle 404 redirects from GitHub Pages
const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
	sessionStorage.removeItem('redirectPath');
	window.history.replaceState(null, '', redirectPath);
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
