import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './shared/config/i18n/i18n';
import ThemeProvider from './app/providers/themeProvider/ThemeProvider';
import {StoreProvider} from "./app/providers/storeProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <React.StrictMode>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </React.StrictMode>
        </StoreProvider>
    </BrowserRouter>
);
