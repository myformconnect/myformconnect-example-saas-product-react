import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import HelpCenterPage from './pages/HelpCenterPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';

function NotFoundPage() {
  return (
    <div className="py-24 text-center container-custom">
      <h1 className="text-4xl font-bold text-slate-900 mb-3 font-mono">404</h1>
      <p className="text-slate-600 mb-6">The page you requested could not be located.</p>
      <a href="/" className="btn-base btn-primary px-4 py-2">
        Return to Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
