import ReactDOM from 'react-dom/client';
import { App } from './app';
import 'bootstrap';
import './style/index.scss';

import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

// Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { msalConfig } from './api/auth-config';

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
    <MsalProvider instance={msalInstance}>
        <App />
    </MsalProvider>
    // </React.StrictMode>
);
