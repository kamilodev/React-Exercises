import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import GifExpertApp from './GifExpertApp';

const divRoot = document.getElementById('app');

const root = createRoot(divRoot);

root.render(
	<StrictMode>
		<GifExpertApp />
	</StrictMode>,
);
