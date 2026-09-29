import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import HelpCenterPage from './pages/HelpCenterPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';

function NotFoundPage() {
  return (
    <div className="py-28 text-center container-custom max-w-xl mx-auto">
      <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2 block">
        Error 404
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
        Page not found
      </h1>
      <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
        The page or shortcut you are trying to reach does not exist or has been moved.
      </p>
      <Link to="/" className="btn-base btn-primary px-5 py-2.5 rounded-lg inline-flex items-center gap-2">
        Return to Home
      </Link>
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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
