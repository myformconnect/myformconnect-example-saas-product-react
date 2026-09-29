import React, { useState } from 'react';
import HelpHero from '../components/help/HelpHero';
import HelpCategories from '../components/help/HelpCategories';
import SupportForm from '../components/forms/SupportForm';
import FeedbackForm from '../components/forms/FeedbackForm';
import FAQSection from '../components/home/FAQSection';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { MessageSquare, ArrowDown, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeFormTab, setActiveFormTab] = useState('support'); // 'support' | 'feedback'

  const scrollToContact = (tab = 'support') => {
    setActiveFormTab(tab);
    const el = document.getElementById('contact-section');
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
      <section className="py-12 bg-slate-50 border-b border-slate-200 text-center">
        <ScrollReveal className="max-w-xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mx-auto border border-sky-200/70">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">Need help or have feedback?</h3>
          <p className="text-sm text-slate-600">
            Reach our friendly team for questions, suggestions, or help setting up your desktop.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollToContact('support')}
              icon={ArrowDown}
              iconPosition="right"
            >
              Contact Support
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => scrollToContact('feedback')}
              icon={Sparkles}
              iconPosition="left"
            >
              Share Feedback
            </Button>
          </div>
        </ScrollReveal>
      </section>

      {/* Forms Section: Contact Support or Share Feedback */}
      <section className="py-16 bg-slate-50/50 border-b border-slate-200" id="contact-section">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 mb-2 block">
              We&apos;re Here to Help
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Get in touch with us
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-normal">
              Send us a question or share feedback to help us improve Orevio.
            </p>

            {/* Tab Pills */}
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 mt-6 text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveFormTab('support')}
                className={`px-4 py-2 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFormTab === 'support'
                    ? 'bg-white text-slate-900 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
                <span>Contact Support</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveFormTab('feedback')}
                className={`px-4 py-2 rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeFormTab === 'feedback'
                    ? 'bg-white text-slate-900 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Send Feedback</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 border border-slate-200 shadow-sm rounded-2xl">
            {activeFormTab === 'support' ? (
              <SupportForm />
            ) : (
              <FeedbackForm />
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* Article Detail Modal */}
      {selectedArticle && (
        <Modal
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle.title}
          size="md"
        >
          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100 text-xs text-slate-400">
              <span>Guide duration: {selectedArticle.reads}</span>
              <span>•</span>
              <span>Updated recently</span>
            </div>
            <p>
              In Orevio, everyday actions are designed to be fast and simple. You can drag and drop items directly into the app window, search with a single shortcut, and organize your work without feeling overwhelmed.
            </p>
            <p>
              If you ever get stuck or have questions about using this feature, our support team is happy to help you set up your ideal workspace.
            </p>
            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setSelectedArticle(null)}
              >
                Close Guide
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
