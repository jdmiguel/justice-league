import { Suspense, lazy, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import IntroContext from '@/contexts/IntroContext';
import { theme } from '@/helpers/theme';
import RotateDeviceMsg from '@/components/ui/RotateDeviceMsg';
import Loader from '@/components/ui/Loader';

/* Lazy Components */
const Root = lazy(() => import('@/components/pages/root'));
const Profile = lazy(() => import('@/components/pages/profile'));
const Timeline = lazy(() => import('@/components/pages/timeline'));
const Media = lazy(() => import('@/components/pages/media'));

const App = () => {
  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);

  return (
    <ThemeProvider theme={theme}>
      <RotateDeviceMsg />
      <Suspense fallback={<Loader withLightBg={!!isIntroDisplayed} />}>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/:id/profile" element={<Profile />} />
          <Route path="/:id/timeline" element={<Timeline />} />
          <Route path="/:id/media" element={<Media />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
