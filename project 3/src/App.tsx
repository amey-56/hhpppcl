import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Introduction from './pages/Introduction';
import Ideation from './pages/Ideation';
import Graphs from './pages/Graphs';
import Report from './pages/Report';
import Financials from './pages/Financials';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/ideation" element={<Ideation />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/report" element={<Report />} />
          <Route path="/financials" element={<Financials />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;