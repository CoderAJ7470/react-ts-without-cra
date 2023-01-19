import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './components/App';

const root = ReactDOMClient.createRoot(document.getElementById('root') as Element);

root.render(<App message='TS is cool' />);
