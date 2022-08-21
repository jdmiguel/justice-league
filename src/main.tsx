import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@/helpers/theme';
import { HeroContextProvider } from '@/contexts/HeroContext';
import { IntroContextProvider } from '@/contexts/IntroContext';
import App from '@/components/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <HeroContextProvider>
        <IntroContextProvider>
          <App />
        </IntroContextProvider>
      </HeroContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
