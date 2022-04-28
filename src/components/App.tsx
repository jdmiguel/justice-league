import { Suspense, lazy, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import IntroContext from '@/contexts/IntroContext';
import { theme } from '@/helpers/theme';
import Loader from '@/components/ui/Loader';

/* Lazy Components */
const Root = lazy(() => import('@/components/pages/root'));
const Hero = lazy(() => import('@/components/pages/hero'));

const App = () => {
  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader withLightBg={!!isIntroDisplayed} />}>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/:id" element={<Hero />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
