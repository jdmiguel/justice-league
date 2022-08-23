import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@/helpers/theme';
import { CustomNavigationContextProvider } from '@/contexts/CustomNavigationContext';
import { IntroContextProvider } from '@/contexts/IntroContext';
import App from '@/components/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <CustomNavigationContextProvider>
        <IntroContextProvider>
          <App />
        </IntroContextProvider>
      </CustomNavigationContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
