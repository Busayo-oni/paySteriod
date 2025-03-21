import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router";

import { MantineProvider } from '@mantine/core';
import LandingPage from './components/LandingPage';
import WalletManagement from './components/pages/WalletManagement'

export default function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="wallet" element={<WalletManagement />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
