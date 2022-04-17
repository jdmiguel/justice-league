import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Loader from '@/components/ui/Loader';
import { theme } from '@/helpers/theme';

/* Lazy Components */
const Root = lazy(() => import('@/components/pages/root'));
const Hero = lazy(() => import('@/components/pages/hero'));

const App = () => (
  <ThemeProvider theme={theme}>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/:id" element={<Hero />} />
      </Routes>
    </Suspense>
  </ThemeProvider>
);

export default App;
