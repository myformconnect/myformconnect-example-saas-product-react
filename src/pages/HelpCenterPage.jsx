import React, { useState } from 'react';
import HelpHero from '../components/help/HelpHero';
import HelpCategories from '../components/help/HelpCategories';
import SupportForm from '../components/forms/SupportForm';
import FAQSection from '../components/home/FAQSection';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { MessageSquare, ArrowDown } from 'lucide-react';

import ScrollReveal from '../components/common/ScrollReveal';

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const scrollToSupport = () => {
    const el = document.getElementById('support-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HelpHero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <HelpCategories
        searchQuery={searchQuery}
        onSelectArticle={(article) => setSelectedArticle(article)}
      />

      {/* Still Need Help Banner */}
      <section className="py-12 bg-stone-50 border-b border-stone-200 text-center">
        <ScrollReveal className="container-custom max-w-xl space-y-4">
          <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mx-auto border border-orange-200/70">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">Still need help?</h3>
          <p className="text-sm text-slate-600">
            Our technical support team is on call to debug configuration payloads, examine rate limits, and resolve issues.
          </p>
          <div className="pt-1">
            <Button
              variant="primary"
              size="md"
              onClick={scrollToSupport}
              icon={ArrowDown}
              iconPosition="right"
            >
              Contact Support
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Embedded Support Form Section */}
      <section className="py-20 bg-white border-b border-stone-200" id="support-section">
        <ScrollReveal className="container-custom max-w-xl">
          <SupportForm />
        </ScrollReveal>
      </section>

      <FAQSection />

      {/* Article Detail Modal */}
      <Modal
        isOpen={Boolean(selectedArticle)}
        onClose={() => setSelectedArticle(null)}
        title={selectedArticle?.title || 'Knowledge Base Guide'}
        subtitle={`Guide • ${selectedArticle?.reads || '3 min read'}`}
        maxWidth="max-w-2xl"
      >
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            This operational guide outlines the recommended standards, parameter schemas, and failure recovery protocols for <strong className="text-slate-900">{selectedArticle?.title}</strong>.
          </p>
          <div className="p-3.5 bg-slate-50 rounded border border-slate-200 font-mono text-xs text-slate-800 space-y-1">
            <div className="text-slate-500">&#47;&#47; Example configuration snippet</div>
            <div>headers: &#123; &quot;X-Vantage-Signature&quot;: &quot;sha256=...&quot; &#125;</div>
            <div>retryPolicy: &#123; maxAttempts: 5, backoffMultiplier: 2.0 &#125;</div>
          </div>
          <p>
            When configuring event streams or updating identity providers, ensure environment variables match across both Staging and Production workspaces.
          </p>
          <div className="pt-2 flex justify-end">
            <Button variant="secondary" size="sm" onClick={() => setSelectedArticle(null)}>
              Done Reading
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
