import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
import './css/styles.css';

const divRoot = createRoot(document.querySelector('#app'));

divRoot.render(
	<StrictMode>
		<CounterApp value={0} />
	</StrictMode>,
);
