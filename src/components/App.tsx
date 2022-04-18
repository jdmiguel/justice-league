import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/helpers/theme';
import { IntroContextProvider } from '@/contexts/IntroContext';
import Loader from '@/components/ui/Loader';

/* Lazy Components */
const Root = lazy(() => import('@/components/pages/root'));
const Hero = lazy(() => import('@/components/pages/hero'));

const App = () => (
  <ThemeProvider theme={theme}>
    <IntroContextProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/:id" element={<Hero />} />
        </Routes>
      </Suspense>
    </IntroContextProvider>
  </ThemeProvider>
);

export default App;
