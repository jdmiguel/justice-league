import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/helpers/theme';
import Root from '@/components/pages/root';
import Hero from '@/components/pages/hero';
import Profile from '@/components/pages/profile';
import Enemies from '@/components/pages/enemies';
import Timeline from '@/components/pages/timeline';
import NoMatch from '@/components/views/NoMatch';
import RotateDeviceMsg from '@/components/ui/RotateDeviceMsg';

const App = () => (
  <ThemeProvider theme={theme}>
    <RotateDeviceMsg />
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
  </ThemeProvider>
);

export default App;
