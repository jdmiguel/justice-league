import { Suspense, lazy, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import IntroContext from '@/contexts/IntroContext';
import { theme } from '@/helpers/theme';
import NoMatch from '@/components/views/NoMatch';
import RotateDeviceMsg from '@/components/ui/RotateDeviceMsg';
import Loader from '@/components/ui/Loader';

/* Lazy Components */
const Root = lazy(() => import('@/components/pages/root'));
const Hero = lazy(() => import('@/components/pages/hero'));
const Profile = lazy(() => import('@/components/pages/profile'));
const Enemies = lazy(() => import('@/components/pages/enemies'));
const Timeline = lazy(() => import('@/components/pages/timeline'));

const App = () => {
  const { isIntroVisible } = useContext(IntroContext);

  return (
    <ThemeProvider theme={theme}>
      <RotateDeviceMsg />
      <Suspense fallback={<Loader withLightBg={!!isIntroVisible} />}>
        <Routes>
          <Route index element={<Root />} />
          <Route path=":id" element={<Hero />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="enemies" element={<Enemies />} />
            <Route path="timeline" element={<Timeline />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
