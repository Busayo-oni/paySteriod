import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';


import { MantineProvider } from '@mantine/core';
import LandingPage from './components/LandingPage';

export default function App() {
  return <MantineProvider>
    <LandingPage />
  </MantineProvider>;
}