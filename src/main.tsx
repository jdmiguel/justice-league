import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from '@/helpers/theme';
import { HeroMetasContextProvider } from '@/contexts/HeroMetasContext';
import { HeroContextProvider } from '@/contexts/HeroContext';
import { IntroContextProvider } from '@/contexts/IntroContext';
import App from '@/components/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <HeroContextProvider>
        <HeroMetasContextProvider>
          <IntroContextProvider>
            <App />
          </IntroContextProvider>
        </HeroMetasContextProvider>
      </HeroContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
